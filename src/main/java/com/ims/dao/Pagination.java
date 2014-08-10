package com.ims.dao;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

public class Pagination extends JdbcDaoSupport {
	static Logger logger = Logger.getLogger(Pagination.class.getName());
	
	public static final int NUMBERS_PER_PAGE = 10;
	private int numPerPage;
	private int totalRows; 
	private int totalPages; 
	private int currentPage; 
	private int startIndex; 
	private int lastIndex; 
	private List resultList;
	private JdbcTemplate jTemplate;

	/**
	 * Each page shows 10 records constructors, 
	 * use this function must be set Pagination currentPage,initial jTemplate value
	 * 
	 * @param sql
	 *            oracle
	 */
	public Pagination(String sql) {
		if (jTemplate == null) {
			throw new IllegalArgumentException(
					"com.deity.ranking.util.Pagination.jTemplate is null,please initial it first. ");
		} else if (sql.equals("")) {
			throw new IllegalArgumentException(
					"com.deity.ranking.util.Pagination.sql is empty,please initial it first. ");
		}
		new Pagination(sql, currentPage, NUMBERS_PER_PAGE, jTemplate, null);
	}

	/**
	 * 分页构造函数
	 * 
	 * @param sql
	 * According to the incoming SQL statements to get some basic information page
	 * @param currentPage
	 * @param numPerPage
	 * @param jTemplate JdbcTemplate instance
	 */
	public Pagination(String sql, int currentPage, int numPerPage,
			JdbcTemplate jTemplate,Object[] param) {
		if (jTemplate == null) {
			throw new IllegalArgumentException(
					"com.deity.ranking.util.Pagination.jTemplate is null,please initial it first. ");
		} else if (sql == null || sql.equals("")) {
			throw new IllegalArgumentException(
					"com.deity.ranking.util.Pagination.sql is empty,please initial it first. ");
		}
		// 设置每页显示记录数
		setNumPerPage(numPerPage);
		// 设置要显示的页数
		setCurrentPage(currentPage+1);
		// 计算总记录数
		StringBuffer totalSQL = new StringBuffer(" SELECT count(*) FROM ( ");
		totalSQL.append(sql);
		totalSQL.append(" ) totalTable ");
		// 给JdbcTemplate赋值
		setJdbcTemplate(jTemplate);
		// 总记录数
		setTotalRows(getJdbcTemplate().queryForInt(totalSQL.toString(),param));
		// 计算总页数
		setTotalPages();
		// 计算起始行数
		setStartIndex();
		// 计算结束行数
		setLastIndex();
		logger.debug("lastIndex=" + lastIndex+",startIndex="+startIndex);
	     
		//构造oracle数据库的分页语句
		/* StringBuffer paginationSQL = new StringBuffer(" SELECT * FROM ( ");
		 paginationSQL.append(" SELECT temp.* ,ROWNUM num FROM ( ");
		 paginationSQL.append(sql);
		 paginationSQL.append(" ) temp where ROWNUM <= " + lastIndex);
		 paginationSQL.append(" ) WHERE num > " + startIndex);*/
		 
		// put in result set
		//setResultList(getJdbcTemplate().queryForList(paginationSQL.toString()));
		setResultList(getJdbcTemplate().queryForList(
				getMySQLPageSQL(sql, startIndex, numPerPage),param));
	}

	/**
	 * * Construct the MySQL data paging SQL
	 * 
	 * @param queryString
	 * @param startIndex
	 * @param pageSize
	 * @return
	 */
	public String getMySQLPageSQL(String queryString, Integer startIndex,
			Integer pageSize) {
		String result = "";
		if (null != startIndex && null != pageSize) {
			result = queryString + " limit " + startIndex + "," + pageSize;
		} else if (null != startIndex && null == pageSize) {
			result = queryString + " limit " + startIndex;
		} else {
			result = queryString;
		}
		return result;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

	public int getNumPerPage() {
		return numPerPage;
	}

	public void setNumPerPage(int numPerPage) {
		this.numPerPage = numPerPage;
	}

	public List getResultList() {
		return resultList;
	}

	public void setResultList(List resultList) {
		this.resultList = resultList;
	}

	public int getTotalPages() {
		return totalPages;
	}

	// calculate total pages
	public void setTotalPages() {
		if (totalRows % numPerPage == 0) {
			this.totalPages = totalRows / numPerPage;
		} else {
			this.totalPages = (totalRows / numPerPage) + 1;
		}
	}

	public int getTotalRows() {
		return totalRows;
	}

	public void setTotalRows(int totalRows) {
		this.totalRows = totalRows;
	}

	public int getStartIndex() {
		return startIndex;
	}

	public void setStartIndex() {
		this.startIndex = (currentPage - 1) * numPerPage;
	}

	public int getLastIndex() {
		return lastIndex;
	}

	public JdbcTemplate getJTemplate() {
		return jTemplate;
	}

	public void setJTemplate(JdbcTemplate template) {
		jTemplate = template;
	} 
	
	// calculate the last index 
	public void setLastIndex() {
		logger.debug("totalRows="+totalRows+",numPerPage="+numPerPage);
		
		if(totalRows < numPerPage){ 
			this.lastIndex = totalRows; 
		}else if((totalRows % numPerPage == 0) || (totalRows % numPerPage != 0 && currentPage < totalPages)){ 
			this.lastIndex = currentPage *numPerPage; 
		}else if(totalRows % numPerPage != 0 && currentPage == totalPages){
			//the last page
			this.lastIndex = totalRows ;
		}
	}
}
