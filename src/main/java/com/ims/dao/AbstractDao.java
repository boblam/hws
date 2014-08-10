package com.ims.dao;

import javax.sql.DataSource;
import javax.annotation.Resource;

import org.springframework.jdbc.core.support.JdbcDaoSupport;

public class AbstractDao extends JdbcDaoSupport {
	@Resource(name = "dataSource")
	public void setSuperDataSource(DataSource dataSource) {
		super.setDataSource(dataSource);
	}
}
