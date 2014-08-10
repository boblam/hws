package com.ims.bean;

/*DROP TABLE IF EXISTS `homeworksystem`.`course`;
CREATE TABLE  `homeworksystem`.`course` (
  `course_id` int(11) NOT NULL,
  `dept_id` int(11) default NULL,
  `enable_flag` varchar(1) default NULL,
  `class_id` int(11) default NULL,
  `branch_id` int(11) default NULL,
  `course_name` varchar(45) default NULL COMMENT '���������',
  `teacher_id` int(11) default NULL,
  `created_by` varchar(45) default NULL,
  `created_date` date default NULL,
  `last_update_by` varchar(45) default NULL,
  `last_update_date` date default NULL,
  `course_course_id` int(11) NOT NULL,
  PRIMARY KEY  (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;*/
/**
 * @author bob
 *
 */
public class Course {
	public Integer course_id;
	public Integer dept_id;
	public Integer class_id;
	public Integer branch_id;
	public Integer teacher_id;
	public String course_name;
	public Integer course_course_id;//course-class
	public String enable_flag;
	
	
	public Course() {
		super();
	}
	public Integer getCourse_id() {
		return course_id;
	}
	public void setCourse_id(Integer course_id) {
		this.course_id = course_id;
	}
	public Integer getDept_id() {
		return dept_id;
	}
	public void setDept_id(Integer dept_id) {
		this.dept_id = dept_id;
	}
	public Integer getClass_id() {
		return class_id;
	}
	public void setClass_id(Integer class_id) {
		this.class_id = class_id;
	}
	public Integer getBranch_id() {
		return branch_id;
	}
	public void setBranch_id(Integer branch_id) {
		this.branch_id = branch_id;
	}
	public Integer getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(Integer teacher_id) {
		this.teacher_id = teacher_id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public Integer getCourse_course_id() {
		return course_course_id;
	}
	public void setCourse_course_id(Integer course_course_id) {
		this.course_course_id = course_course_id;
	}
	public String getEnable_flag() {
		return enable_flag;
	}
	public void setEnable_flag(String enable_flag) {
		this.enable_flag = enable_flag;
	}
	
	
}
