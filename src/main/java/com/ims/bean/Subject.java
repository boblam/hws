package com.ims.bean;

public class subject {
	/**
	stuid	stuname	stusex	studept
	ѧ��	����	�Ա�	ϵ��
	int	Varchar(30)	Char(4)	Varchar(20)
	 * 
	 */
	int    stuid;
	String stuname;
	String stusex;
	String studept;
	
	
	public int getStuid() {
		return stuid;
	}
	public void setStuid(int stuid) {
		this.stuid = stuid;
	}
	public String getStuname() {
		return stuname;
	}
	public void setStuname(String stuname) {
		this.stuname = stuname;
	}
	public String getStusex() {
		return stusex;
	}
	public void setStusex(String stusex) {
		this.stusex = stusex;
	}
	public String getStudept() {
		return studept;
	}
	public void setStudept(String studept) {
		this.studept = studept;
	}
	
}
