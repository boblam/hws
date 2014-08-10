function login(){
	var password = $('#password').val();
	var loginName = $('#account').val();
	//通过jquery获取前台的值（登录名和密码）
	//var role = $().val();
	$.ajax({
		async: false,
        type: "post",//access the data by post method
        dataType: "json",//return the data as json type
        url: ctx+"/login.do",//specify the controller
        data: { 
        	loginName:loginName,password:password
         },//the data to be sent 
        complete :function(data){
        	 if(1 === data){
        		 alert('ok');
        	 }
        	},
        success: function(data){ 
        	if(data != undefined)
        	alert('登陆成功');
        },
        error:function(){
         //messageDialog($.i18n.prop("error.message"));
        }
	});
}



//initial
$(function() {
	//getLockList();
	var date = my_curr_date();
	$("#curDate").val(date);

	
	//处理登陆功能
	$("#loginBut").click(function(){
		login();
	});
	 
	
});



/*show the current date*/
function my_curr_date() {   
	 var currentDate = new Date();
	 var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	 var dayOfWeek = weekday[currentDate.getDay()];
	 var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	 var curMonth = months[currentDate.getMonth()];
	 var day = currentDate.getDate();
	 //var month = currentDate.getMonth() + 1;
	 var year = currentDate.getFullYear();
	 var my_date = day+"/"+curMonth+"/"+year+","+dayOfWeek;
	 return my_date;
	}

 