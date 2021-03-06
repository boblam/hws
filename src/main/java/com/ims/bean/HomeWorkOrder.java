/*       DROP TABLE IF EXISTS `homeworksystem`.`job_order`;
CREATE TABLE  `homeworksystem`.`job_order` (
  `job_order_id` int(11) NOT NULL auto_increment,
  `class_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL,
  `job_order_title` varchar(45) NOT NULL,
  `end_date` date NOT NULL,
  `start_date` date default NULL,
  `job_description` varchar(200) default NULL,
  `job_document` varchar(45) default NULL,
  `created_by` varchar(45) default NULL,
  `created_date` date default NULL,
  `last_updaet_by` varchar(45) default NULL,
  `last_update_date` date default NULL,
  `status` varchar(45) NOT NULL,
  `attachment` varchar(200) NOT NULL,
  PRIMARY KEY  (`job_order_id`,`course_id`,`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='��ҵ���?������ҵ��-���\n';   
*/
package com.ims.bean;

import java.util.Date;

public class HomeWorkOrder{
	    public  String job_order_id;
		public String class_id;
		public String course_id;
		public String teacher_id;
		public String job_order_title;
		
		public String job_description;
		public String job_document;
		public String end_date;
		public String start_date;
		
		public HomeWorkOrder(String job_order_id, String class_id,
				String course_id, String teacher_id, String job_order_title,
				String job_description, String job_document, String end_date) {
			super();
			this.job_order_id = job_order_id;
			this.class_id = class_id;
			this.course_id = course_id;
			this.teacher_id = teacher_id;
			this.job_order_title = job_order_title;
			this.job_description = job_description;
			this.job_document = job_document;
			this.end_date = end_date;
			this.start_date = start_date;
		}
		
		public String getJob_order_id() {
			return job_order_id;
		}
		public void setJob_order_id(String job_order_id) {
			this.job_order_id = job_order_id;
		}
		public String getClass_id() {
			return class_id;
		}
		public void setClass_id(String class_id) {
			this.class_id = class_id;
		}
		public String getCourse_id() {
			return course_id;
		}
		public void setCourse_id(String course_id) {
			this.course_id = course_id;
		}
		public String getTeacher_id() {
			return teacher_id;
		}
		public void setTeacher_id(String teacher_id) {
			this.teacher_id = teacher_id;
		}
		public String getJob_order_title() {
			return job_order_title;
		}
		public void setJob_order_title(String job_order_title) {
			this.job_order_title = job_order_title;
		}
		public String getJob_description() {
			return job_description;
		}
		public void setJob_description(String job_description) {
			this.job_description = job_description;
		}
		public String getJob_document() {
			return job_document;
		}
		public void setJob_document(String job_document) {
			this.job_document = job_document;
		}
		public String getEnd_date() {
			return end_date;
		}
		public void setEnd_date(String end_date) {
			this.end_date = end_date;
		}
		public String getStart_date() {
			return start_date;
		}
		public void setStart_date(String start_date) {
			this.start_date = start_date;
		}
		
}