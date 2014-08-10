package com.ims.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service("loginService")
public class LoginService {
	@Autowired
	protected JdbcTemplate jdbcTemplate;  
	
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String, Object>> getUser(String userName, String password,String role){
		String sql = "select teacher_id from teacher where teacher_code = ? and teacher_password = ?";
		if("teacher" == role){
			//return jdbcTemplate.queryForInt(sql,new String []{userName,password});
			return jdbcTemplate.queryForList(sql, new String []{userName,password});
			//queryForObject(没有符合条件的记录就会报错： Incorrect result size: expected 1, actual 0)必须要有一条符合条件的记录
		}else{
			sql = "select 1 from student where student_code = ? and student_password = ?";
			return jdbcTemplate.queryForList(sql, new String []{userName,password});
		}
	}
	
	
}
