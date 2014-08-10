package com.common.core.web;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.annotation.Resource;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.CustomNumberEditor;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.web.bind.ServletRequestDataBinder;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;
import org.stringtree.json.JSONWriter;

import com.common.bean.ParamStrValue;
import com.google.common.base.Strings;


public abstract class BaseController extends MultiActionController {
	
	@Resource(name="viewPathPrefix")
	protected ParamStrValue viewPathPrefix = null;
	
	@Resource(name="viewPathSuffix")
	protected ParamStrValue viewPathSuffix = null;
	


	private static final Logger LOGGER = Logger.getLogger(BaseController.class);

	@Override
	protected void initBinder(final HttpServletRequest request, final ServletRequestDataBinder binder) {
		final SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy", Locale.getDefault());
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
		binder.registerCustomEditor(Integer.class, new CustomNumberEditor(Integer.class, true));
		binder.registerCustomEditor(Double.class, new CustomNumberEditor(Double.class, true));
		binder.registerCustomEditor(String.class, new StringTrimmerEditor(false));
	}
	
	protected ModelAndView renderHtml(final HttpServletRequest request, final HttpServletResponse response, final String text) {
		try {
			response.setContentType("text/html;charset=UTF-8");
			response.getWriter().write(text);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (final IOException e) {
			
			LOGGER.error(e.getMessage(), e);
		}
		
		return null;
	}

	protected ModelAndView renderText(final HttpServletRequest request, final HttpServletResponse response, final String text) {
		try {
			response.setContentType("text/plain;charset=UTF-8");
			response.getWriter().write(text);
		} catch (final IOException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}

	protected ModelAndView renderXML(final HttpServletRequest request, final HttpServletResponse response, final String text) {
		try {
			response.setContentType("text/xml;charset=UTF-8");
			response.getWriter().write(text);
		} catch (final IOException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
	
	protected ModelAndView renderJson(final HttpServletRequest request, final HttpServletResponse response, final Object object) {
		JSONWriter jsonWriter = new JSONWriter();
		try {
			response.setContentType("text/xml;charset=UTF-8");
			response.getWriter().write(jsonWriter.write(object));
		} catch (final IOException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return null;
	}
	
	public String redirectPage(String page) {
		return "redirect:" + page;
		// return page;
	}

	public String forwardPage(String page) {
		return "forward:" + page;
		// return page;
	}

	public ModelAndView forward(String page) {
		return new ModelAndView(page);
	}

	
	
	public String getUserEvalScoreGrade(String score){
		
		if(Strings.isNullOrEmpty(score)){
			score = "0";
		}
		Integer s = Integer.parseInt(score);
		
		if(s<=1){
			s = 1;
		}else if(s>=2&&s<=5){
			s = 2;
		}else if(s>=6&&s<=19){
			s = 3;
		}else if(s>=20&&s<=49){
			s = 4;
		}else if(s>=50&&s<=99){
			s = 5;
		}else if(s>=100&&s<=199){
			s = 6;
		}else if(s>=200&&s<=499){
			s = 7;
		}else if(s>=500&&s<=999){
			s = 8;
		}else if(s>=1000&&s<=2499){
			s = 9;
		}else if(s>=2500&&s<=9999){
			s = 10;
		}else if(s>=10000&&s<=19999){
			s = 11;
		}else if(s>=20000&&s<=49999){
			s = 12;
		}else if(s>=50000&&s<=99999){
			s = 13;
		}else if(s>=100000&&s<=199999){
			s = 14;
		}else if(s>=200000&&s<=499999){
			s = 15;
		}else if(s>=500000&&s<=999999){
			s = 16;
		}else if(s>=1000000&&s<=1999999){
			s = 17;
		}else if(s>=2000000&&s<=4999999){
			s = 18;
		}else if(s>=5000000&&s<=9999999){
			s = 19;
		}else if(s>=10000000){
			s = 20;
		}
		String imgSrc = "../images/s_grade_"+s+".gif";
		return imgSrc;
	}
	
	private String username;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		
		this.username = username;
	}
	
}