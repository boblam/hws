/**
 * 
 */

 $().ready(function(){


	 /* get the class name */	  
	 $.ajax({
	 	type: "post",
	 	dataType: "json",
	 	url: ctx+"/queryClassName.do",
	 	data: {
	 		//id:123//老师id查询所教班级，后台session获取
	 	},
	 	complete :function(){
	 	},
	 	success: function(data){
	 		//alert(data);
	 		var jsons=new Array();
	 		var classNameHtml ="";
	 		if(data != undefined){
	 			$.each(data,function(index,item){
	 				classNameHtml+="<option value='"+item.CLASS_ID+"_"+item.CLASS_NAME+"'>"+item.CLASS_NAME+"</option>";
	 				//jsons.push(data[0].class_name);
	 			});
	 			$(classNameHtml).appendTo("#classNameSelector");
	 		};
	 	},
	 	error:function(){
	 		//messageDialog($.i18n.prop("error.message"));
	 	}
	 });
	 
	//根据班级级联查询课程
 	$("#classNameSelector").change(function(){
			var name = $("#classNameSelector").val().split('_');
			var classId = name[0];
		  	if(classId != undefined){
		  		/*ZTree*/
		  		//ajaxForSection('show','','',ipId,'');//call the ajax function 
		  		queryCourseByClassId(classId);
		  	}
		  	
		  	
		});
 	
 	
 });
 
 function queryCourseByClassId(parameter){
	 $("#courseSelector").html('');
	 $.ajax({
		 	type: "post",
		 	dataType: "json",
		 	url: ctx+"/queryCourseByClassId.do",
		 	data: {
		 		classId:parameter//id:123//老师id查询所教班级，后台session获取
		 	},
		 	complete :function(){
		 	},
		 	success: function(data){
		 		var jsons=new Array();
		 		var courseNameHtml ="";
		 		if(data != undefined){
		 			$.each(data,function(index,item){
		 				courseNameHtml+="<option value='"+item.COURSE_ID+"_"+item.COURSE_NAME+"'>"+item.COURSE_NAME+"</option>";
		 				//jsons.push(data[0].class_name);
		 			});
		 			$(courseNameHtml).appendTo("#courseSelector");
		 		};
		 	},
		 	error:function(){
		 		//messageDialog($.i18n.prop("error.message"));
		 	}
		 });
 }


