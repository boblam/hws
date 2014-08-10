/**
 * Class BankManagerController
 */
package com.ims.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.common.core.web.BaseController;
import com.common.util.StringUtil;
import com.ims.bean.HomeWorkOrder;
import com.ims.bean.User;
import com.ims.service.TeacherService;

@Controller("teacherController")
public class TeacherController extends BaseController {

	@Resource(name = "teacherService")
	protected TeacherService teacherService;

	/**
	 * goFinancingPage()
	 */

	@RequestMapping(value = "/queryClassName.do", method = { RequestMethod.GET,
			RequestMethod.POST })
	public void queryClassName(final HttpServletRequest request,
			final HttpServletResponse response) {
		User loginUser = (User) request.getSession().getAttribute("loginUser");
		List classNameList = teacherService.queryClassName(loginUser
				.getTeacher_id());// teacher_code 作为登录名
		JSONArray secArray = JSONArray.fromObject(classNameList);
		renderText(request, response, secArray.toString());
	}

	@RequestMapping(value = "/queryCourseByClassId.do", method = {
			RequestMethod.GET, RequestMethod.POST })
	public void queryCourseByClassId(final HttpServletRequest request,
			final HttpServletResponse response) {
		// User loginUser = (User)
		// request.getSession().getAttribute("loginUser");
		String classId = request.getParameter("classId");
		User loginUser = (User) request.getSession().getAttribute("loginUser");
		List courseNameList = teacherService.queryCourseByClassId(classId,
				loginUser.getTeacher_id());// teacher_code 作为登录名
		JSONArray secArray = JSONArray.fromObject(courseNameList);
		renderText(request, response, secArray.toString());
	}

	/*
	 * @RequestMapping(value = "/releaseHomeWork.do", method = {
	 * RequestMethod.GET, RequestMethod.POST }) public void releaseHomeWork(
	 * HttpServletRequest request, HttpServletResponse response) throws
	 * UnsupportedEncodingException {
	 * 
	 * SingleFileUpload upload = new SingleFileUpload();
	 * upload.parseRequest(request); File parent = new File("D:\\updir\\");
	 * 
	 * try { upload.upload(parent); }
	 * catch(org.apache.commons.fileupload.FileUploadBase
	 * .SizeLimitExceededException e){ // 文件大小超出最大值 e.printStackTrace(); }catch
	 * (Exception e) { e.printStackTrace(); } }
	 */

	// @RequestParam(value = "attachment" ) ,attachment 是前台页面file的name
	@RequestMapping(value = "/releaseHomeWork.do", method = {
			RequestMethod.GET, RequestMethod.POST })
	public String upload(
			@RequestParam(value = "attachment") MultipartFile file,
			 HttpServletRequest request,
			HttpServletResponse response) {
		String[] className = request.getParameter("className").split("_");
		String[] courseName = request.getParameter("courseName").split("_");

		if (!file.isEmpty()) {
			try {
				String OriginalFilename = file.getOriginalFilename();
				file.transferTo(new File("D:\\updir\\" + OriginalFilename));

			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		// 保存要发布的作业到数据库
		// className[1]
		/*
		 * this.job_order_id = job_order_id; this.class_id = class_id;
		 * this.course_id = course_id; this.teacher_id = teacher_id;
		 * this.job_order_title = job_order_title; this.job_description =
		 * job_description; this.job_document = job_document; this.end_date =
		 * end_date; this.start_date = start_date;
		 */

		String job_order_id = StringUtil.getDateStringWithMillis();// 获取当前时间作为id
		String class_id = className[0];// 4091901_信息管理
		String course_id = courseName[0];
		User loginUser = (User) request.getSession().getAttribute("loginUser");// 可以获取老师的id（登录名）
		String job_order_title = request.getParameter("homeWorkName");// 作业名称
		String job_description = request.getParameter("work_desc");// 作业描述
		String end_date = request.getParameter("end_date");// 截止时间
		String start_date = request.getParameter("start_date");// 发布时间

		HomeWorkOrder hwOrder2 = new HomeWorkOrder(job_order_id, class_id,
				course_id, loginUser.getTeacher_id(), job_order_title,
				job_description, end_date, start_date);
		if(teacherService.releaseHomeWork(hwOrder2) > 0){
			//数据插入成功
			renderText(request, response, "1");
		}
		
		return null;

	}

	/***
	 * 保存文件
	 * 
	 * @param file
	 * @return
	 */
	/*
	 * private boolean saveFile(MultipartFile file) { // 判断文件是否为空 if
	 * (!file.isEmpty()) { try { // 文件保存路径 String filePath =
	 * request.getSession().getServletContext().getRealPath("/") + "upload/" +
	 * file.getOriginalFilename(); // 转存文件 file.transferTo(new File(filePath));
	 * return true; } catch (Exception e) { e.printStackTrace(); } } return
	 * false; } 3、编写action:
	 * 
	 * @RequestMapping("filesUpload") public String
	 * filesUpload(@RequestParam("files") MultipartFile[] files) {
	 * //判断file数组不能为空并且长度大于0 if(files!=null&&files.length>0){ //循环获取file数组中得文件
	 * for(int i = 0;i<files.length;i++){ MultipartFile file = files[i]; //保存文件
	 * saveFile(file); } } // 重定向 return "redirect:/list.html"; }
	 */
	
	
	@RequestMapping(value = "/queryHomeWorkRows.do", method = {
			RequestMethod.GET, RequestMethod.POST })
	public void queryHomeWorkRows(final HttpServletRequest request,
			final HttpServletResponse response) {
		// User loginUser = (User)
		// request.getSession().getAttribute("loginUser");
		//String classId = request.getParameter("classId");
		int totalCount = -1;
		User loginUser = (User) request.getSession().getAttribute("loginUser");
		totalCount = teacherService.queryHomeWorkRows(loginUser.getTeacher_id());// teacher_code 作为登录名
		JSONArray secArray = JSONArray.fromObject(totalCount);
		renderText(request, response, secArray.toString());
	}
	
	
	@RequestMapping(value = "/queryHomeWorkList.do", method = {
			RequestMethod.GET, RequestMethod.POST })
	public void queryHomeWorkList(final HttpServletRequest request,
			final HttpServletResponse response) {
		User loginUser = (User) request.getSession().getAttribute("loginUser");
		String currentPage = request.getParameter("currentPage");
		String numPerPage = request.getParameter("numPerPage");
		String action = request.getParameter("oprt");
		String search = request.getParameter("searchKey");
		List homeWorkList = teacherService.queryHomeWorkList(loginUser.getTeacher_id(),Integer.parseInt(currentPage),Integer.parseInt(numPerPage));// teacher_code 作为登录名
		JSONArray secArray = JSONArray.fromObject(homeWorkList);
		renderText(request, response, secArray.toString());
	}

}
