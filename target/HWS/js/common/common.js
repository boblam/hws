/*
 * This file provide common javascript functions.
 * 
 * Please add detail description of your function before you created.
 * Also, please add necessary comment when you modified.
 * 
 * Thanks.
 * 
 * Jim.Bi
 */

/**
 * Enable a disabled button. e.g. enableButton($("#button_id"))
 * enableButton($(".button_class"))
 */
function enableButton(button) {
	if(!button.is(".disabledButton")) return;
	button.removeClass("disabledButton");
	if (button.get(0).onkeypress == undefined) {
		return;
	}
	button.get(0).onclick = button.get(0).onkeypress;

}

/**
 * Disable a button. e.g. disableButton($("#button_id"))
 * disableButton($(".button_class"))
 */
function disableButton(button) {
	if(button.is(".disabledButton")) return;
	if(button.length == 0) return;
	button.addClass("disabledButton");
	button.get(0).onkeypress = button.get(0).onclick;
	button.get(0).onclick = null;
}

/**
 * This function will find even columns in tbody element and add a 'even-row'
 * class, same as odd columns. The final effect is the styles between odd and
 * even columns will alternate.
 */
function zebraColumns() {
	$(".listTable tbody td:even").addClass("even-row");
	$(".listTable tbody td:odd").addClass("odd-row");
}

/**
 * This function will find even rows in tbody element and add a 'even-row'
 * class, same as odd rows. The final effect is the styles between odd and even
 * rows will alternate.
 */
function zebraRows(obj, evenClass, oddClass) {
	if (obj == undefined) obj = $(".listTable");
	if (evenClass == undefined) evenClass = "even-row";
	if (oddClass == undefined) oddClass = "odd-row";

	obj.find("." + evenClass).removeClass(evenClass);
	obj.find("." + oddClass).removeClass(oddClass);

	obj.find("tbody tr:visible").each(function(i){$(this).addClass([evenClass,oddClass][i%2])})
//	$("tbody tr:visible").each(function(i){$(this).addClass([evenClass,oddClass][i%2])})
//	obj.find("tbody tr:even").addClass(evenClass);
//	obj.find("tbody tr:odd").addClass(oddClass);
}

function zebraRowsForSearch(obj, evenClass, oddClass) {
	if (obj == undefined) {
		return;
	}
	obj.find("." + evenClass).removeClass(evenClass);
	obj.find("." + oddClass).removeClass(oddClass);

	obj.find("tbody tr:even").addClass(evenClass);
	obj.find("tbody tr:odd").addClass(oddClass);
}

/**
 * This method can change the specified table to be sortable.
 * 
 * sortableTable("createdGroupsTable","last_post_date","Desc")
 * 
 * 
 * @param tableId -
 *            id property of the table
 * @param defaultSortField -
 *            class property of the span of column.
 * @param defaultSortType -
 *            sort type, Desc or Asc, please note that is case-sensitive;
 * @param callback -
 *            The callback function.
 * @return
 * 
 * NOTE: If you want any td element in the provided table cant been sorted, add
 * 'unsort' class to td element.
 */
function sortableTable(tableId, defaultSortField, defaultSortType, callback) {
	if ($("#" + tableId) == "undefined")
		return;
	sortFields = $("#" + tableId + " thead span:not(.unsort)");
	sortFields.addClass("link");

	// Click function of each column head.
	sortFields.click( function() {
		var sortType = "Desc";
		if ($(this).is(".sortAsc,.sortDesc")) {
			if ($(this).is(".sortDesc")) {
				$(this).removeClass("sortDesc");
				$(this).addClass("sortAsc");
				sortType = "Asc"; 
			} else {
				$(this).removeClass("sortAsc");
				$(this).addClass("sortDesc");
			}
		} else {
			$("#" + tableId + " .sortAsc").removeClass("sortAsc");
			$("#" + tableId + " .sortDesc").removeClass("sortDesc");
			$(this).addClass("sortDesc");
		}
		if ($.isFunction(callback)) {
			callback(tableId, $(this).attr('id'), sortType);
		}
	});

	if(defaultSortType.toLowerCase()=='desc'){defaultSortType="Desc"}
	if(defaultSortType.toLowerCase()=='asc'){defaultSortType="Asc"}
	
	sortFields.filter("[id='" + defaultSortField+"']")
			.addClass("sort" + defaultSortType);
}

/**
 * Use to add a default tip text of input element.
 * 
 * @return
 */
function initInputDefaultValue(inputObj, defaultValue) {
	inputObj.each( function() {
		if ($.trim(this.value) == "") {
			this.value = defaultValue;
			$(this).addClass("gray_434343");
		}
	});

	inputObj.focus( function() {
		if (this.value == defaultValue) {
			this.value = "";
			$(this).removeClass("gray_434343");
		}
	});

	inputObj.blur( function() {
		if ($.trim(this.value) == "") {
			this.value = defaultValue;
			$(this).addClass("gray_434343");
		}
	});
}

function tinyMCEInit() {
	tinyMCE
			.init( {
				mode :"exact",
				elements :"userDesc",
				theme :"advanced",
				plugins :"safari,table",
				font_size_style_values :"8pt,10pt,12pt,14pt,18pt,24pt,36pt",
				theme_advanced_buttons1 :"bold,italic,underline,separator, fontselect, fontsizeselect, forecolor,justifyleft,justifycenter,justifyright,bullist,numlist",
				theme_advanced_buttons2 :"tablecontrols",
				theme_advanced_buttons3 :"",
				theme_advanced_toolbar_location :"top",
				theme_advanced_toolbar_align :"left",
				theme_advanced_path_location :"",
				plugin_insertdate_dateFormat :"%Y-%m-%d",
				plugin_insertdate_timeFormat :"%H:%M:%S",
				extended_valid_elements :"a[name|href|target|title|onclick],img[class|src|border=0|alt|title|hspace|vspace|width|height|align|onmouseover|onmouseout|name],hr[class|width|size|noshade],font[face|size|color|style],span[class|align|style]"
			});
}

function disabledTrue(object) {
	if (object.disabled) {
		return true;
	}
	object.disabled = true;
	object.style.color = "#9D9DA1";
	// alert(object.disabled);
	return false;
}

function disabledFalse(object) {
	object.disabled = false;
	object.style.color = "#810000";
	// alert(object.disabled);
}

function bookmarkItemReload(itemId, userId, referURL, itemType, itemDesc) {
	$
			.ajax( {
				type :"POST",
				url :ctx + "/bookmarkItem.u",
				data : {
					itemId :itemId,
					userId :userId,
					itemType :itemType,
					itemDesc:itemDesc
				},
				success : function(msg) {
					if (msg == 'true') {
						/*alertMessageInfo(
								"Bookmark successfully saved. Review bookmarked items on your My Stuff screen.",
								function() {
									location.reload();
								});*/
					// location.reload();
					
						window.location.href = ctx + "/account.u?r=" + Math.floor(Math.random() * 100) + "#Activity";
					} else {
						if (itemType == 0)
							alertMessageInfo(
									"This Presentation is currently not accessible.",
									function() {
										window.location.href = ctx + "/account.u?r=" + Math.floor(Math.random() * 100) + "#Activity";
									});
						if (itemType == 1)
							alertMessageInfo(
									"This Course is currently not accessible.",
									function() {
										window.location.href = ctx + "/account.u?r=" + Math.floor(Math.random() * 100) + "#Activity";
									});
					}
				},
				error : function(XMLHttpRequest, textStatus, thrownError) {
					return;
				}
			});
}

function bookmarkItem(itemId, userId, referURL, itemType, itemDesc) {
	$
			.ajax( {
				type :"POST",
				url :ctx + "/bookmarkItem.u",
				data : {
					itemId :itemId,
					userId :userId,
					itemType :itemType,
					itemDesc:itemDesc
				},
				success : function(msg) {
					if (msg == 'true') {
						/*alertMessageInfo(
								"Bookmark successfully saved. Review bookmarked items on your My Stuff screen.",
								function() {
								});*/
					} else {
						if (itemType == 0)
							alertMessageInfo(
									"This Presentation is currently not accessible.",
									function() {
										location.reload();
									});
						if (itemType == 1)
							alertMessageInfo(
									"This Course is currently not accessible.",
									function() {
										location.reload();
									});
					}
				},
				error : function(XMLHttpRequest, textStatus, thrownError) {
					return;
				}
			});
}

// download file with original name
function downloadAttachment(fileName, pathUrl) {
	fileName = filterFileExtraChar(fileName);
	window.open(ctx + "/downLoadFile.u?filename=" + fileName + "&pathurl="
			+ pathUrl);
}

function _downloadAttachment(fileName, pathUrl) {
	fileName = filterFileExtraChar(fileName);
	window.location.href=ctx + "/downLoadFile.u?filename=" + fileName + "&pathurl="
			+ pathUrl;
}

function filterFileExtraChar(str) {
	var p = str.lastIndexOf('.');
	var blank = "";
	if (p < 0) {
		blank = str;
	} else {
		blank = str.substr(0, p);
	}

	var temp = ReplaceAll(blank);
	var newstr = temp.replace(/[^\w]*/, '');
	if ($.trim(newstr).length == 0) {
		newstr = '_';
	}
	if (temp.indexOf("@", "#", "!", "~", "$", "^", "&", "*", "(", ")") >= 0) {
		newstr = '_';
	}
	var result = "";
	if (p < 0) {
		result = newstr;
	} else {
		result = newstr + str.substr(p, str.length);
	}
	while (result.indexOf("#") >= 0) {
		result = result.replace("#", "_");
	}
	while (result.indexOf("%") >= 0) {
		result = result.replace("%", "_");
	}
	while (result.indexOf("@") >= 0) {
		result = result.replace("@", "_");
	}
	while (result.indexOf("!") >= 0) {
		result = result.replace("!", "_");
	}
	while (result.indexOf("~") >= 0) {
		result = result.replace("~", "_");
	}
	while (result.indexOf("$") >= 0) {
		result = result.replace("$", "_");
	}
	while (result.indexOf("^") >= 0) {
		result = result.replace("^", "_");
	}
	while (result.indexOf("&") >= 0) {
		result = result.replace("&", "_");
	}
	while (result.indexOf("*") >= 0) {
		result = result.replace("*", "_");
	}
	while (result.indexOf("(") >= 0) {
		result = result.replace("(", "_");
	}
	while (result.indexOf(")") >= 0) {
		result = result.replace(")", "_");
	}

	return result;
}

function ReplaceAll(str) {
	while (str.indexOf(" ") >= 0) {
		str = str.replace(" ", "_");
	}
	return str;
}

function getCurrentHost(){
	return currentHost;
}

function initDefault(inputId, defaultValue) {
    $(inputId).each(function() {
        if($.trim(this.value) == "") {
            this.value = defaultValue;
        }
    }); 
  
    $(inputId).focus(function() {
        if(this.value == defaultValue) {
            this.value = "";
        }
    });
    
    $(inputId).blur(function() {
        if($.trim(this.value) == "") {
            this.value = defaultValue;
        }
    });
 }

function limitTextLength(field,limitLength) {
	$(field).keydown(function(){
		if ($(this).val().length > limitLength) {
			$(this).val($(this).val().substring(0, limitLength));
			$(this).scrollTo($(this).attr('scrollHeight'));
		}
	});
	
	$(field).keyup(function(){
		if ($(this).val().length > limitLength) {
			$(this).val($(this).val().substring(0, limitLength));
			$(this).scrollTo($(this).attr('scrollHeight'));
		}
	});
}

function onlyNumberInput(obj){
	obj.keypress(function(event) {  
	    if (!$.browser.mozilla) {  
	        if (event.keyCode && (event.keyCode < 48 || event.keyCode > 57)) {  
	            // ie6,7,8,opera,chrome  
	            event.preventDefault();  
	        }  
	    } else {  
	        if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {  
	            // firefox
	            event.preventDefault();  
	        }  
	    }  
	});	
}

function startLockTimer(){
	if('true' == _isLockEnable){
		setInterval("extendLock()", 1*60*1000);
	}
	return;
}

function extendLock(){
	$.ajax( {
		type :"POST",
		url :ctx + "/extendLock.u",
		data : {
			mediaId : _lockMediaId
		},
		success : function(msg) {
			return;
		},
		error : function(XMLHttpRequest, textStatus, thrownError) {
			return;
		}
	});
}

/*
 * jQuery Contains function which is case insensitive
 */
jQuery.expr[':'].Contains = function(a, i, m) { 
	  return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0; 
	};
	
/**
 * This function will find even rows in tbody element and add a 'even-row'
 * class, same as odd rows. The final effect is the styles between odd and even
 * rows will alternate.
 */
function zebraRows4SortTable(tableObj, evenClass, oddClass) {
	if (tableObj == undefined) tableObj = $(".listTable");
	if (evenClass == undefined) evenClass = "even-row";
	if (oddClass == undefined) oddClass = "odd-row";

	tableObj.find("." + evenClass).removeClass(evenClass);
	tableObj.find("." + oddClass).removeClass(oddClass);

	var evenFlg = true;

	tableObj.find("tbody tr").each(function(){
		if (!$(this).is(':hidden')){
			if (evenFlg) {
			   $(this).addClass(evenClass);
			   evenFlg = false;
			} else {
			   $(this).addClass(oddClass);
			   evenFlg = true;
			}
		}
	});
}

function zebraRows4EveryStatus(obj, evenClass, oddClass) {
	if (obj == undefined) obj = $(".listTable");
	if (evenClass == undefined) evenClass = "even-row";
	if (oddClass == undefined) oddClass = "odd-row";

	obj.find("." + evenClass).removeClass(evenClass);
	obj.find("." + oddClass).removeClass(oddClass);

	obj.find("tbody tr:even").addClass(evenClass);
	obj.find("tbody tr:odd").addClass(oddClass);
}

function getMaskSize() {
	var bodyOffsetWidth = 0;
	var bodyOffsetHeight = 0;
	var bodyScrollWidth = 0;
	var bodyScrollHeight = 0;
	var pageDimensions = [ 0, 0 ];
	pageDimensions[0] = document.body.clientHeight;
	pageDimensions[1] = document.body.clientWidth;
	bodyOffsetWidth = document.body.offsetWidth;
	bodyOffsetHeight = document.body.offsetHeight;
	bodyScrollWidth = document.body.scrollWidth;
	bodyScrollHeight = document.body.scrollHeight;
	if (bodyOffsetHeight > pageDimensions[0]) {
		pageDimensions[0] = bodyOffsetHeight;
	}
	if (bodyOffsetWidth > pageDimensions[1]) {
		pageDimensions[1] = bodyOffsetWidth;
	}
	if (bodyScrollHeight > pageDimensions[0]) {
		pageDimensions[0] = bodyScrollHeight;
	}
	if (bodyScrollWidth > pageDimensions[1]) {
		pageDimensions[1] = bodyScrollWidth;
	}
	return pageDimensions;
}
function getMaskSizeWithoutScroll() {
	var pageDimensions = [ 0, 0 ];
	pageDimensions[0] = document.body.clientHeight;
	pageDimensions[1] = document.body.clientWidth;
	//alert((pageDimensions[0] / 2) - 150);
	return pageDimensions;
}
function UserAgent() {
	this.sys = {};
    var ua = navigator.userAgent.toLowerCase();
    //alert(ua);
    if (window.ActiveXObject) {
    	this.sys.ie = ua.match(/msie ([\d.]+)/)[1];
    } else if (document.getBoxObjectFor) {
    	this.sys.firefox = ua.match(/firefox\/([\d.]+)/)[1];
    } else if (window.MessageEvent && !document.getBoxObjectFor) {
    	try {
    		this.sys.chrome = ua.match(/chrome\/([\d.]+)/)[1];
    	} catch(e) {
    		this.sys.firefox = ua.match(/firefox\/([\d.]+)/)[1];
    	}
    } else if (window.opera) {
    	this.sys.opera = ua.match(/opera.([\d.]+)/)[1];
    } else if (window.openDatabase) {
    	this.sys.safari = ua.match(/version\/([\d.]+)/)[1];
    }
}
function showMask(maskId) {
	var maskObj = document.getElementById(maskId);
	var pageDimensions = getMaskSize();
	
	maskObj.style.height = String(pageDimensions[0]) + "px";
	maskObj.style.width = String(pageDimensions[1]) + "px";
	
	/*var userAgent = new UserAgent();
	if (userAgent.sys.ie) {
		maskObj.style.height = String(pageDimensions[0] - 4) + "px";
	} else {
		maskObj.style.height = String(pageDimensions[0]) + "px";
	}
	if (userAgent.sys.ie) {
		maskObj.style.width = String(pageDimensions[1] - 20) + "px";
	} else {
		maskObj.style.width = String(pageDimensions[1]) + "px";
	}*/
	maskObj.style.display = "block";
}

function hideMask(maskId) {
	var maskObj = document.getElementById(maskId);
	maskObj.style.display = "none";
	maskObj.style.height = "0px";
	maskObj.style.width = "0px";
}
function hideLayer(maskDiv, maskMsgDiv) {
	hideMask(maskDiv);
	document.getElementById(maskMsgDiv).style.display = "none";
	document.getElementById(maskMsgDiv).style.top = "0px";
	document.getElementById(maskMsgDiv).style.left = "0px";
	// document.getElementById("errorMsgMask").innerHTML = "";
}
function showLayer(maskDiv, maskMsgDiv) {
	showMask(maskDiv);
	var pageDimensions = getMaskSize();
	document.getElementById(maskMsgDiv).style.top = String((pageDimensions[0] / 2) - 50) + "px";
	document.getElementById(maskMsgDiv).style.left = String((pageDimensions[1] / 2) - 50) + "px";
	document.getElementById(maskMsgDiv).style.display = "block";
}