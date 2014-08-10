function recordinfo(c_userid,b_userid,freightid){
	jQuery.ajax({
		url : ctx+'/recordchat/recordchat.u', // 提交的页面
		data: {'c_userid':c_userid,'b_userid':b_userid,'freightid':freightid},
		type : "POST", // 设置请求类型为"POST"，默认为"GET"
		dataType : "json",
		contentType : "application/x-www-form-urlencoded;charset=UTF-8", // 必须要设置为UTF-8，否则提交数据乱码
		beforeSend: function(){  
        	if(b_userid==null && b_userid=='')
        		return false;
        }
	});
}
//查看庄家信誉
function showCompanyEvaluation(parentId){
	window.open(ctx+"/front/userEvaluation.u?parentId="+parentId);
}