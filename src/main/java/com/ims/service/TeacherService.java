package com.ims.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ims.bean.HomeWorkOrder;
import com.ims.dao.TeacherDao;

@Service("teacherService")
public class TeacherService {
	@Autowired
	protected TeacherDao teacherDao;  
	
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public List<Map<String, Object>> queryClassName(String teacherId){
		return teacherDao.queryClasstRows(teacherId);
	}



	public List queryCourseByClassId(String classId,String teacherId) {
		// TODO Auto-generated method stub
		return teacherDao.queryCoursetRows(classId,teacherId);
	}



	public int releaseHomeWork(HomeWorkOrder hwOrder) {
		// TODO Auto-generated method stub
		return teacherDao.insertHomeWorkOrder(hwOrder);
		
	}



	public int queryHomeWorkRows(String teacher_id) {
		// TODO Auto-generated method stub
		return teacherDao.queryHomeWorkRows(teacher_id);
		
	}



	public List queryHomeWorkList(String teacher_id,Integer currentPage, Integer numPerPage) {
		// TODO Auto-generated method stub
		return teacherDao.queryHomeWorkList(teacher_id,currentPage, numPerPage);
	}
	
	
}
