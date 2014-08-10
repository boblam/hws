package com.ims.bean;

/*madatory:ѧ�� ������ :��ʼ���� ���༶���� ��ϵ����� ���绰 ���ʼ� ��
 */

public class Student {
	public Double stuid;
	public String stuName;
	public String stuPwd;
	public Double classid;
	public Double deptid;
	public Double tel;
	public String email;
	public Double stuCode;

	public Student(String stuName, String stuPwd) {
		super();
		this.stuName = stuName;
		this.stuPwd = stuPwd;
	}

	public Student() {
		// TODO Auto-generated constructor stub
	}

	public Double getStuid() {
		return stuid;
	}

	public void setStuid(Double stuid) {
		this.stuid = stuid;
	}

	public String getStuName() {
		return stuName;
	}

	public void setStuName(String stuName) {
		this.stuName = stuName;
	}

	public String getStuPwd() {
		return stuPwd;
	}

	public void setStuPwd(String stuPwd) {
		this.stuPwd = stuPwd;
	}

	public Double getClassid() {
		return classid;
	}

	public void setClassid(Double classid) {
		this.classid = classid;
	}

	public Double getDeptid() {
		return deptid;
	}

	public void setDeptid(Double deptid) {
		this.deptid = deptid;
	}

	public Double getTel() {
		return tel;
	}

	public void setTel(Double tel) {
		this.tel = tel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getStuCode() {
		return stuCode;
	}

	public void setStuCode(Double stuCode) {
		this.stuCode = stuCode;
	}

}
