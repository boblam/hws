package com.common.core.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.google.common.base.Strings;


public class Page implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int currentPage = 1;
	
	private int prevPageNo;
	private int nextPageNo;
	
	private int displayItemNums=6;
	
	
	private int startNo;
	private int endNo;
	
	private int totalPageSize;
	
	private Boolean isPaging = true;
	
	/**
	 * @description 需要计算总页数
	 */
	private int totalPage;
	private int pageSize=10;
	/**
	 * 分页下面的数字
	 */
	@SuppressWarnings({ "rawtypes" })
	private List pageItem;
	
	
	private Object dataList;
	
	public Page(){
		
	}
	public Page(int currentPage,int totalPage,int displayItemNums,int pageSize){
		this.currentPage = currentPage;
		this.totalPage = totalPage;
		this.displayItemNums = displayItemNums;
		this.pageSize = pageSize;
	}
	/**
	 * 
	 * @param request
	 * @param p_currentPage
	 * @param p_pageSize
	 * @param displayItemNums
	 * @param totalPage
	 */
	public Page(HttpServletRequest request,String p_currentPage,String p_pageSize,String displayItemNums){
		
		String s_currendPage = request.getParameter(p_currentPage);
		String s_pageSize = request.getParameter(p_pageSize);
		String s_displayItemNums = request.getParameter(displayItemNums);
		
		if(!Strings.isNullOrEmpty(s_currendPage)){
			this.currentPage = Integer.parseInt(s_currendPage);
		}
		
		if(!Strings.isNullOrEmpty(s_pageSize)){
			this.pageSize = Integer.parseInt(s_pageSize);
		}
		
		if(!Strings.isNullOrEmpty(s_displayItemNums)){
			this.displayItemNums = Integer.parseInt(s_displayItemNums);
		}
		
		
		if(this.currentPage==1){
			this.setStartNo(this.currentPage);
		}else{
			this.setStartNo((this.currentPage-1)*this.pageSize+1);
		}
		
		
		if(this.currentPage==1){
			this.setEndNo(this.pageSize);
		}else{
			this.setEndNo(this.currentPage*this.pageSize);
		}
		
		
	}
	
	/**
	 * 
	 * @param request
	 * @param p_currentPage
	 * @param p_pageSize
	 * @param displayItemNums
	 * @param totalPage
	 * @param pagesize
	 */
	public Page(HttpServletRequest request,String p_currentPage,String p_pageSize,String displayItemNums,Integer pagesize){
		
		String s_currendPage = request.getParameter(p_currentPage);
		String s_displayItemNums = request.getParameter(displayItemNums);
		
		if(!Strings.isNullOrEmpty(s_currendPage)){
			this.currentPage = Integer.parseInt(s_currendPage);
		}
		
		if(pagesize!=null){
			this.pageSize = pagesize;
		}
		
		if(!Strings.isNullOrEmpty(s_displayItemNums)){
			this.displayItemNums = Integer.parseInt(s_displayItemNums);
		}
		
		if(this.currentPage==1){
			this.setStartNo(this.currentPage);
		}else{
			this.setStartNo((this.currentPage-1)*this.pageSize+1);
		}
		
		if(this.currentPage==1){
			this.setEndNo(this.pageSize);
		}else{
			this.setEndNo(this.currentPage*this.pageSize);
		}
		
		
	}
	
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	
	public int getDisplayItemNums() {
		return displayItemNums;
	}
	public void setDisplayItemNums(int displayItemNums) {
		this.displayItemNums = displayItemNums;
	}
	
	@SuppressWarnings("rawtypes")
	public void setPageItem(List pageItem) {
		this.pageItem = pageItem;
	}
	
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getPrevPageNo() {
		if(this.currentPage<=1){
			this.prevPageNo = 1;
		}else{
			this.prevPageNo = this.currentPage-1;
		}
		return prevPageNo;
	}
	public void setPrevPageNo(int prevPageNo) {
		this.prevPageNo = prevPageNo;
	}
	public int getNextPageNo() {
		if(this.currentPage>=this.totalPage){
			this.nextPageNo = this.totalPage;
		}else{
			this.nextPageNo = this.currentPage+1;
		}
		return nextPageNo;
	}
	public void setNextPageNo(int nextPageNo) {
		this.nextPageNo = nextPageNo;
	}
	
	public int getStartNo() {
		return startNo;
	}
	public void setStartNo(int startNo) {
		this.startNo = startNo;
	}
	public int getEndNo() {
		return endNo;
	}
	public void setEndNo(int endNo) {
		this.endNo = endNo;
	}
	
	@SuppressWarnings({ "rawtypes"})
	public List getPageItem(){
		return pageItem;
	}
	
	public Object getDataList() {
		return dataList;
	}
	public void setDataList(Object dataList) {
		this.dataList = dataList;
	}
	
	public int getTotalPageSize() {
		return totalPageSize;
	}
	public void setTotalPageSize(int totalPageSize) {
		this.totalPageSize = totalPageSize;
	}
	
	public Boolean getIsPaging() {
		return isPaging;
	}
	public void setIsPaging(Boolean isPaging) {
		this.isPaging = isPaging;
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public void handlePageItemList(int totalPageNo){
		List itemList = new ArrayList();
		if(totalPageNo==0){
			this.setIsPaging(false);
		}else{
			this.setIsPaging(true);
		}
		this.setTotalPageSize(totalPageNo);
		
		int _totalPage = totalPageNo/this.pageSize;
		if(totalPageNo%this.pageSize!=0){
			_totalPage+=1;
		}
		if(_totalPage==0){
			_totalPage=1;
		}
		this.totalPage = _totalPage;
		
		int start = this.currentPage;
		int itemCount = 0;
		
		if(this.currentPage>this.totalPage){
			this.currentPage=this.totalPage;
		}else if(this.currentPage<1){
			this.currentPage=1;
		}
		
		if(this.totalPage>this.displayItemNums){
			
		}else{
			this.displayItemNums = this.totalPage;
		}
		
		if(this.currentPage+this.displayItemNums-1<=this.totalPage){
			itemCount = this.currentPage+this.displayItemNums ;
		}else{
			itemCount = this.totalPage+1;
			start = this.totalPage-this.displayItemNums+1;
		}
		
		for(int i = start ; i < itemCount ; i++){
			itemList.add(i);
		}
		
		this.setPageItem(itemList);
		
	}
	
	@SuppressWarnings("rawtypes")
	public static void main(String[] args){
		Page p = new Page(10, 10, 6, 5);
		
		List pageItem = p.getPageItem();
		
		for(int i = 0 ; i < pageItem.size() ; i++ ){
			System.out.println(pageItem.get(i));
		}
	}
	
}
