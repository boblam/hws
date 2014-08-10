package com.ims.dao;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ims.bean.HomeWorkOrder;

@Repository("teacherDao")
public class TeacherDao extends AbstractDao {
	@Autowired
	protected JdbcTemplate jdbcTemplate; 

	public List<Map<String, Object>> queryClasstRows(String teacherId){
		String sql = "SELECT CLASS_ID,CLASS_NAME FROM CLASS C "
				+ "WHERE C.CLASS_ID IN (SELECT  DISTINCT CLASS_CLASS_ID FROM COURSE_HAS_CLASS WHERE TEACHER_ID = ?)";
		//注意子查询的记录数不能多于1,要用in
		return jdbcTemplate.queryForList(sql, new Object []{teacherId});
	}
	
	public List<Map<String, Object>> queryCoursetRows(String classId,String teacherId){
		String sql = "SELECT COURSE_ID,COURSE_NAME FROM COURSE C WHERE C.COURSE_ID IN"+
				"(SELECT  COURSE_COURSE_ID FROM COURSE_HAS_CLASS WHERE CLASS_CLASS_ID = ? AND TEACHER_ID = ?)";
		//注意子查询的记录数不能多于1,要用in
		return jdbcTemplate.queryForList(sql, new Object []{classId,teacherId});
	}

	public int insertHomeWorkOrder(HomeWorkOrder hwOrder) {
		// TODO Auto-generated method stub
		/*String sql1 = "insert into job_order(job_order_id,class_id,course_id,teacher_id,job_order_title,job_description,start_date,end_date)"
					+ " values(10,7,7,456,'wangluogongcheng','','2014-08-02 19:26:01','2014-08-02 19:26:01');";*/
		String sql = "insert into job_order(job_order_id,class_id,course_id,teacher_id,job_order_title,job_description,start_date,end_date)"
				+ " values(?,?,?,?,?,?,?,?)";
		return jdbcTemplate.update(sql,new Object[]{hwOrder.getJob_order_id(),hwOrder.getClass_id(),hwOrder.getTeacher_id(),hwOrder.getCourse_id(),hwOrder.getJob_order_title(),
				hwOrder.getJob_description(),hwOrder.getStart_date(),hwOrder.getEnd_date()});
	}

	public int queryHomeWorkRows(String teacher_id) {
		// TODO Auto-generated method stub
		//String sql = "select job_order_id,job_order_title,end_date,start_date from job_order where teacher_id = ?";
		String sql = "select count(*) from job_order where teacher_id = ?";//查询对应老师或者学生的作业记录
		return jdbcTemplate.queryForInt(sql, new Object []{teacher_id});
		/*String sql = "select count(*) from job_order";//没有过滤条件
		return jdbcTemplate.queryForInt(sql);*/
	}

	public List queryHomeWorkList(String teacher_id,Integer currentPage, Integer numPerPage) {
		// TODO Auto-generated method stub
		String sql = "select job_order_id,job_order_title,date_format(end_date,'%Y-%m-%d %H:%i') as end_date,"
				+ "date_format(start_date,'%Y-%m-%d %H:%i') as start_date from job_order where teacher_id = ? order by start_date desc ";
		/*String sql = "select job_order_id,job_order_title,date_format(end_date,'%Y-%m-%d %H:%i') as end_date,"
				+ "date_format(start_date,'%Y-%m-%d %H:%i') as start_date from job_order order by end_date asc";*/
		Object[] param = new Object[]{teacher_id};
		Pagination page = new Pagination(sql.toString(), currentPage, numPerPage, getJdbcTemplate(),param);
		return page.getResultList();
		//return jdbcTemplate.queryForList(sql, new Object []{teacher_id});
	}

	
}