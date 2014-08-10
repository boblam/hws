var oTable = null;  
var sAction = "";
var sSearchKey = "";
var ITEM_PER_PAGE = 3;//page size

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
   
	//分页功能
	filiter = "all";//查询条件，查询老师所有的发布的作业
	dataTables(sAction); 
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

var dataTables = function(action){
	sSearchKey = "";
	$(".input_search").val("");
	$.ajax({
		type : "post",
		url : ctx+"/queryHomeWorkRows.do?oprt="+action,
		dataType : "json", 
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			if (data.length > 0) {
				sAction = action;
			    $("#pagination").pagination(data, optInit);
			}else{
				alert("error when calculate reports count");
			}
		},
		error : function(XMLHttpRequest,
				textStatus, errorThrown) {
			alert(errorThrown);
		}
	});     
};

//page query
var queryByPage = function(currentPage, numPerPage) {
	var a = currentPage;
	var bs = numPerPage;
	//$("#tby tr").remove();
	$.ajax({
		type : "post",
		url : ctx+"/queryHomeWorkList.do?searchKey="+sSearchKey+"&oprt="+sAction+"&currentPage="+currentPage+"&numPerPage="+numPerPage,
		dataType : "json", 
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			//$("#tbodyPage td").html("");
			$("#tbodyPage td").remove();
			var tby = $("#tbodyPage");
			$(data).each(function(index,item){
				var td2=$("<td>" + item.job_order_title + "</td>");
				var td3=$("<td>" + item.start_date + "</td>");
				var td4=$("<td>" + item.end_date + "</td>");
				//var td5=$("<td>" + item.client + "</td>");
				var tr = $("<tr></tr>");
				tr.append(td2).append(td3).append(td4);
				tr.appendTo(tby);
			});
			/*for(var report in array){
				
				//$("#unlockImg").attr("disabled",true);
				var td1=$("<td>"+lockhtml+"</td>");
				var td2=$("<td>" + array[report].inspectionDate + "</td>");
				var td3=$("<td>" + array[report].orderNb + "</td>");
				var td4=$("<td>" + array[report].type + "</td>");
				var td5=$("<td>" + array[report].client + "</td>");
				var prodNames = array[report].productName;
				
				var td7=$("<td class='last'>" + array[report].inspector + "</td>");
				var td8=$("<td style='display:none'>" + array[report].finishedFlag + "</td>");
				var tr = $("<tr></tr>");
				tr.append(td1).append(td2).append(td3).append(td4)
					.append(td5).append(td6).append(td7).append(td8);
				tr.appendTo(tby);
			}*/
		
		},
		error : function(XMLHttpRequest,
				textStatus, errorThrown) {
			alert(errorThrown);
		}
	});
};


function pageselectCallback(page_index, jq){
    queryByPage(page_index, ITEM_PER_PAGE); 
    // Prevent click eventpropagation
    return false;
}
 

function getOptionsFromForm(){
    var opt = {callback: pageselectCallback,
    		items_per_page: ITEM_PER_PAGE,
    		next_text: "下一页",
    		num_display_entries: 10,
    		num_edge_entries: 2,
    		prev_text: "上一页"};
    return opt;
}


//Create pagination element with options from form
var optInit = getOptionsFromForm();


function search(){
	sSearchKey = $(".input_search").val();
	$.ajax({
		type : "post",
		url : "spvs/queryReportRows.do?oprt="+sAction+"&srch="+sSearchKey,
		dataType : "json", 
		contentType : "application/json; charset=utf-8",
		success : function(data) {
			if (data>=0){
			    $("#Pagination").pagination(data, optInit);
			}else{
				alert($.i18n.prop("error.message1"));
			}
		},
		error : function(XMLHttpRequest,
				textStatus, errorThrown) {
			alert(errorThrown);
		}
	});  	
}

 