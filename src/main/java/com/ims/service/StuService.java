package com.ims.service;

import java.util.List;

import com.ims.bean.Student;

/**
 * student��Ϣҵ���߼���
 * @author Administrator
 *
 */
public interface StuService {
	/**
	 * ��ѯȫ����Ϣ
	 * @return ���ز�ѯ���
	 */
	public List<Student> getAllStudentInfo();
	
	/**
	 * ���student�˺Ų�����Ϣ
	 * @param name student�˺�
	 * @return ���ز��ҵĽ��
	 */
	public boolean getAllStudentInfoById(String name);
	
	/**
	 * �޸�student��Ϣ
	 * @param u Ҫ�޸ĵ�student��Ϣ
	 * @return �����޸Ľ��
	 */
	public boolean updateStudentInfo(Student u);
	
	
	/**
	 * student��½
	 * @param name student��
	 * @param pwd student����
	 * @return �����Ƿ�ɹ�
	 */
	public Student getAllStudentInfoByName(String name,String pwd);
	
	/**
	 * ע��student
	 * @param u student��Ϣ
	 * @return ����ִ�н��
	 */
	public boolean insertStudentInfo(Student u);
	
	public boolean deleteStuById(Integer stuid);
	
	//public Map getPageList(String user_no,String curPage);
}
