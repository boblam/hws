package com.ims.bean;

import java.util.Date;

/*DROP TABLE IF EXISTS `homeworksystem`.`class`;
CREATE TABLE  `homeworksystem`.`class` (
  `class_id` int(11) NOT NULL,
  `dept_id` int(11) default NULL,
  `class_code` varchar(45) default NULL,
  `class_name` varchar(45) default NULL COMMENT '2009����Ϣ��������Ϣϵͳ2��',
  `enable_flag` varchar(1) default NULL,
  `created_by` varchar(45) default NULL,
  `created_date` date default NULL,
  `last_update_by` varchar(45) default NULL,
  `last_update_date` date default NULL,
  PRIMARY KEY  (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;*/

public class Classes {
	
	public Integer class_id;
	public Integer dept_id;
	public String class_code;
	public String class_name;
	public String enable_flag;
	public String created_by;
	public Date created_date;
	public String last_update_by;
	public Date last_update_date;
	
	
	public Classes() {
		super();
	}


	public Integer getClass_id() {
		return class_id;
	}


	public void setClass_id(Integer class_id) {
		this.class_id = class_id;
	}


	public Integer getDept_id() {
		return dept_id;
	}


	public void setDept_id(Integer dept_id) {
		this.dept_id = dept_id;
	}


	public String getClass_code() {
		return class_code;
	}


	public void setClass_code(String class_code) {
		this.class_code = class_code;
	}


	public String getClass_name() {
		return class_name;
	}


	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}


	public String getEnable_flag() {
		return enable_flag;
	}


	public void setEnable_flag(String enable_flag) {
		this.enable_flag = enable_flag;
	}


	public String getCreated_by() {
		return created_by;
	}


	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}


	public Date getCreated_date() {
		return created_date;
	}


	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}


	public String getLast_update_by() {
		return last_update_by;
	}


	public void setLast_update_by(String last_update_by) {
		this.last_update_by = last_update_by;
	}


	public Date getLast_update_date() {
		return last_update_date;
	}


	public void setLast_update_date(Date last_update_date) {
		this.last_update_date = last_update_date;
	}
	
	
}
