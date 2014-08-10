package com.ims.bean;

import java.util.Date;

public class Teacher {
	Integer teacher_id;
	Integer dept_id;
	String teacher_code;
	String teacher_name;
	String teacher_password;
	Integer telephone_num;
	String email;
	String create_by;
	Date create_date;
	String last_update_by;
	Date last_update_date;
	
	public Teacher(){
		
	}
	public Teacher(Integer teacher_id, String teacher_password) {
		super();
		this.teacher_id = teacher_id;
		this.teacher_password = teacher_password;
	}
	public Teacher(String string) {
		// TODO Auto-generated constructor stub
	}
	public Integer getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(Integer teacher_id) {
		this.teacher_id = teacher_id;
	}
	public Integer getDept_id() {
		return dept_id;
	}
	public void setDept_id(Integer dept_id) {
		this.dept_id = dept_id;
	}
	public String getTeacher_code() {
		return teacher_code;
	}
	public void setTeacher_code(String teacher_code) {
		this.teacher_code = teacher_code;
	}
	public String getTeacher_name() {
		return teacher_name;
	}
	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}
	public String getTeacher_password() {
		return teacher_password;
	}
	public void setTeacher_password(String teacher_password) {
		this.teacher_password = teacher_password;
	}
	public Integer getTelephone_num() {
		return telephone_num;
	}
	public void setTelephone_num(Integer telephone_num) {
		this.telephone_num = telephone_num;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	
}
