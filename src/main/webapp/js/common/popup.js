function showwindow(url, width) {
	var content = $("#windowcontent");
	$("#windowcontent").show();
	content.html('<div id="clarityDiv"></div>'
			+ '<div id="window" style="width:' + width + 'px">'
			+ '<div id="window_content">' + '</div>' + '</div>');
	var divId = $("#window");
	divId.css("left", (document.body.clientWidth - divId.attr('clientWidth'))
			/ 2 + document.body.scrollLeft + "px");
	// divId.style.top=divId.clientHeight;
	divId.css("top", divId.attr('offsetTop')-80);
	divId.css("left","50%");   
    divId.css("margin-left","-"+width/2+"px"); 
	getPage(url, 'window_content');
}

function showwindow2(url, width) {
	var content = $("#windowcontent");
	$("#windowcontent").show();
	content.html('<div id="clarityDiv2"></div>'
			+ '<div id="window" style="width:' + width + 'px">'
			+ '<div id="window_content">' + '</div>' + '</div>');
	var divId = $("#window");
	divId.css("left", (document.body.clientWidth - divId.attr('clientWidth'))
			/ 2 + document.body.scrollLeft + "px");
	// divId.style.top=divId.clientHeight;
	divId.css("top", divId.attr('offsetTop')-80);
	divId.css("left","50%");   
    divId.css("margin-left","-"+width/2+"px"); 
    divId.css("z-index","1020");
	getPage(url, 'window_content');
}

function showFlexWindow(width,height,funcName,loId,uploadType,isSlideShow,userId,clipId,slideNum,recordFrom) {  
	var content = $("#windowcontent");
	$("#windowcontent").show();
	content.html('<div id="clarityDiv" style="z-index:2999"></div>'
			+ '<div id="window" style="width:' + width + 'px;z-index:3000">'
			+ '<div id="window_content"><div id="createPopupFlexWindow_swf">' + '</div></div></div>');
	var divId = $("#window");
	divId.css("left", (document.body.clientWidth - divId.attr('clientWidth'))
			/ 2 + document.body.scrollLeft + "px");
	divId.css("top", divId.attr('offsetTop') -76);
	divId.css("left","50%");   
    divId.css("margin-left","-"+width/2+"px"); 
    createSWFObject("/PopupFlexPage.swf", "createPopupFlexWindow_swf",width,height,{
    funcName:funcName,loId:loId,uploadType:uploadType,isSlideShow:isSlideShow,userId:userId,clipId:clipId,slideNum:slideNum,recordFrom:recordFrom
		  ,groupContext:groupContext
		  ,popupTitleColor:popupTitleColor
		  ,popupBGColor:popupBGColor
		  ,popupBorderColor:popupBorderColor
		  ,alertTitleColor:alertTitleColor
		  ,alertBorderColor:alertBorderColor
		  ,alertLogoURL:alertLogoURL}, {menu:'false',allowFullScreen:'true',wmode:'transparent'}, {}); 
}

function closeFlexWindow(){   
    if($('#createPopupFlexWindow_swf')!=null){
      $('#createPopupFlexWindow_swf').empty();
      $('#createPopupFlexWindow_swf').remove();
      }
      $('#windowcontent').html("");  
    }
    
function getLessonAttNum(lessonId){
   $.ajax({
		type :"POST",
		url :ctx + "/manage/presentation/getLessonAttNum.u",
		data : {
			lessonId:lessonId
		},
		success : function(msg) {
		 $("#lessonAttNum").text(msg);
		 $("#shareLessonAttNum").text(msg);
		 $("#" + selectId + " .lessonAttValue").val(msg);
		},
		error : function(XMLHttpRequest, textStatus, thrownError) {
			return;
		}
	});	  

    }


function getPage(url, o) {
	var request_url = url;
	var divId = o;
	$("#" + divId).load(url, {
		n :Math.random()
	});
}

// for more and less and home page.

function ref(instance_or_id) {
	return (typeof (instance_or_id) == "string") ? document
			.getElementById(instance_or_id) : instance_or_id;
}

function hasClass(element, _className) {
	if (!element) {
		return;
	}
	var upperClass = _className.toUpperCase();
	if (element.className) {
		var classes = element.className.split(' ');
		for ( var i = 0; i < classes.length; i++) {
			if (classes[i].toUpperCase() == upperClass) {
				return true;
			}
		}
	}
	return false;
}

function addClass(element, _class) {
	if (!hasClass(element, _class)) {
		element.className += element.className ? (" " + _class) : _class;
	}
}

function removeClass(element, _class) {
	var upperClass = _class.toUpperCase();
	var remainingClasses = [];
	if (element.className) {
		var classes = element.className.split(' ');
		for ( var i = 0; i < classes.length; i++) {
			if (classes[i].toUpperCase() != upperClass) {
				remainingClasses[remainingClasses.length] = classes[i];
			}
		}
		element.className = remainingClasses.join(' ');
	}
}

function showDiv(divName) {
	var tempDiv = ref(divName);
	if (!tempDiv) {
		return;
	}
	if (hasClass(tempDiv, "wasinline")) {
		tempDiv.style.display = "inline";
		removeClass(tempDiv, "wasinline");
	} else if (hasClass(tempDiv, "wasblock")) {
		tempDiv.style.display = "block";
		removeClass(tempDiv, "block");
	} else {
		tempDiv.style.display = getDisplayStyleByTagName(tempDiv);
	}

}

function getDisplayStyleByTagName(o) {
	var n = o.nodeName.toLowerCase();
	return (n == "span" || n == "img" || n == "a") ? "inline" : (n == 'tr'
			|| n == 'td' ? "" : "block");
}

function hideDiv(divName) {
	var tempDiv = ref(divName);
	if (!tempDiv) {
		return;
	}
	if (tempDiv.style.display == "inline") {
		addClass(tempDiv, "wasinline");
	} else if (tempDiv.style.display == "block") {
		addClass(tempDiv, "wasblock");
	}
	tempDiv.style.display = "none";
}

function uploadCallback(batchId, type){
	if(type == "0"){
		addNewSlide(batchId);
	}else if(type == "1"){
		addNewClip(batchId);
	}
}

function mutilUploadCallback(docId,fileName,fileSize){
	recorderBuildRow(docId, fileName, fileSize);
}

function updateSwapClip(clipId){
	swapCallback(clipId);
}

function isTrimed(clipId, type){
	trimCallback(clipId, type);
}