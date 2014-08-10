/**
 * Class BankManagerController
 */
package com.ims.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.InternalResourceView;

import com.common.core.web.BaseController;
import com.ims.bean.User;
import com.ims.service.LoginService;




@Controller("loginController")
public class LoginController extends BaseController {
	
	@Resource(name="loginService")
	protected LoginService loginService;
	
	/**
	 * goFinancingPage()
	 * @return
	 */

	@RequestMapping(value = "/login.do", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView login(final HttpServletRequest request, final HttpServletResponse response) {
		String name =	request.getParameter("loginName");
		String password = request.getParameter("password");
		//String role = request.getParameter("role");
		String view = "register";
		if(! "".equals(name) && ! "".equals(password)){
			List<Map<String, Object>> obj = loginService.getUser(name, password,"teacher");
			if( obj.size() > 0){
				//UserBean loginUser = loginService.getUser(userName, password);
				User loginUser = new User();
				loginUser.setTeacher_id(name);
				request.getSession().setAttribute("loginUser",loginUser);
				return new ModelAndView("tea/teaReleaseHw");//访问这个路径下的jsp资源，stu是文件夹，sutIndex是jsp页面名称
				 //view =  "stu/stuIndex";
			}
			return new ModelAndView("stu/stuIndex");
		}
		return new ModelAndView(new InternalResourceView(view + this.viewPathSuffix));//访问web-inf外的jsp资源文件
		
		/*if(request.getParameter("reportView")==null)
		{ 
			String userName = request.getParameter("loginId");
			String password = request.getParameter("password");
			
			if(userName == null || password == null || userName.trim().equals("") || password.trim().equals("")){
				return new ModelAndView(new InternalResourceView("login" + this.viewPathSuffix));
			}
			//UserBean loginUser = loginService.getUser(userName, password);
			//request.getSession().setAttribute("loginUser", loginUser);
	 
	 
			if(userName.trim().length() >= 3){
				if(userName.trim().substring(0, 3).equalsIgnoreCase("stu")){
					return new ModelAndView("stuIndex");
				}if(userName.trim().substring(0, 3).equalsIgnoreCase("tea") || userName.trim().substring(0, 3).equalsIgnoreCase("man")){
					return new ModelAndView("teaReleaseHw");
				}
				return new ModelAndView("htmlTools");
			}else{
				return new ModelAndView("htmlTools");
			}
			
		}
		else
		return new ModelAndView("main");*/
 
	}
	
	
	@RequestMapping(value = "/logout.do", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView logOut(final HttpServletRequest request, final HttpServletResponse response) {
		request.getSession().removeAttribute("loginUser");//clear the user info storaged in session
		request.getSession().invalidate();
		return new ModelAndView(new InternalResourceView("login" + this.viewPathSuffix));
	}
	
}
