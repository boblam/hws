package com.ims.service;

import java.util.List;

import com.ims.bean.Deptment;
import com.ims.bean.Teacher;

/**
 * Teacher��Ϣҵ���߼���
 * @author Administrator
 *
 */
public interface DeptService {
	/**
	 * ��ѯȫ����Ϣ
	 * @return ���ز�ѯ���
	 */
	public List<Deptment> getAllDeptInfo();
	
	/**
	 * ���Teacher�˺Ų�����Ϣ
	 * @param name Teacher�˺�
	 * @return ���ز��ҵĽ��
	 */
	public boolean getAllDeptInfoById(String name);
	
	/**
	 * �޸�Teacher��Ϣ
	 * @param u Ҫ�޸ĵ�Teacher��Ϣ
	 * @return �����޸Ľ��
	 */
	public boolean updateDeptInfo(Teacher u);
	
	
	/**
	 * Teacher��½
	 * @param name Teacher��
	 * @param pwd Teacher����
	 * @return �����Ƿ�ɹ�
	 */
	public Deptment getAllDeptInfoByName(String name,String pwd);
	
	/**
	 * ע��Teacher
	 * @param u Teacher��Ϣ
	 * @return ����ִ�н��
	 */
	public boolean insertDeptInfo(Teacher u);
	
	public boolean deleteDeptById(Integer teaId);
}
