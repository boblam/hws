function showAlertInfoWin(maskDivId) {
	closeSendMailWin(maskDivId);
	closeMailAlertWin(maskDivId);
	hideLayer(maskDivId, "maskMsgDiv");
	
	showMask(maskDivId);
	
	var alertInfoDivObj = document.getElementById("alertInfoDiv");
	var pageDimensions = getMaskSize();
	
	alertInfoDivObj.style.top = String((pageDimensions[0] / 2) - 150) + "px";
	alertInfoDivObj.style.left = String((pageDimensions[1] / 2) - 300) + "px";
	alertInfoDivObj.style.display = "block";
}
function closeAlertInfoWin(maskDivId) {
	var alertInfoDivObj = document.getElementById("alertInfoDiv");
	alertInfoDivObj.style.display = "none";
	alertInfoDivObj.style.top = "0px";
	alertInfoDivObj.style.left = "0px";
	
	hideMask(maskDivId);
}
function showSendMailWin(maskDivId) {
	closeAlertInfoWin(maskDivId);
	
	showMask(maskDivId);
	
	var sendMailDivObj = document.getElementById("sendMailDiv");
	var pageDimensions = getMaskSize();
	
	sendMailDivObj.style.top = String((pageDimensions[0] / 2) - 200) + "px";
	sendMailDivObj.style.left = String((pageDimensions[1] / 2) - 300) + "px";
	sendMailDivObj.style.display = "block";
}
function closeSendMailWin(maskDivId) {
	var sendMailDivObj = document.getElementById("sendMailDiv");
	
	sendMailDivObj.style.display = "none";
	sendMailDivObj.style.top = "0px";
	sendMailDivObj.style.left = "0px";
	
	var toMailErrMsgObj = document.getElementById("toMailErrMsg");
	var toMailObj = document.getElementById("toMail");
	var mailContentTxtObj = document.getElementById("mailContentTxt");
	mailContentTxtObj.innerHTML = "&nbsp;";
	toMailObj.value = "";
	toMailErrMsgObj.style.display = "none";
	
	hideMask(maskDivId);
}
function prepareSendMail(maskDivId) {
	closeAlertInfoWin(maskDivId);
	showLayer(maskDivId, "maskMsgDiv");
	
	var jsonProp = {
			"url" : ctx + "/mail/getDefaultContent.u",
			"method" : "POST",
			"async" : true,
			"success" : function(respJsonData) {
				hideLayer(maskDivId, "maskMsgDiv");
				if (respJsonData.fetchMailContentFlag == 0) {
					showMailAlertWin(maskDivId, false, 2);
					return;
				}
				var mailContentTxtObj = document.getElementById("mailContentTxt");
				mailContentTxtObj.innerHTML = respJsonData.mailContent;
				showSendMailWin(maskDivId);
			},
			"failed" : function(respJsonData, statusCode) {
				hideLayer(maskDivId, "maskMsgDiv");
				showMailAlertWin(maskDivId, false, 2);
			},
			"responseType" : "json"
		};
	var sendAjaxProcessor = new AjaxProcessor(jsonProp);
	sendAjaxProcessor.sendRequest();
}
function winResized(maskDivId) {
	//alert("asasa");
	var maskDivObj = document.getElementById(maskDivId);
	//alert(maskDivObj.style.display);
	if (maskDivObj.style.display && maskDivObj.style.display.toLowerCase() == "block") {
		var alertInfoDivObj = document.getElementById("alertInfoDiv");
		if (alertInfoDivObj.style.display && alertInfoDivObj.style.display.toLowerCase() == "block") {
			showAlertInfoWin(maskDivId);
		}
		var sendMailDivObj = document.getElementById("sendMailDiv");
		if (sendMailDivObj.style.display && sendMailDivObj.style.display.toLowerCase() == "block") {
			showSendMailWin(maskDivId);
		}
		var maskMsgDivObj = document.getElementById("maskMsgDiv");
		if (maskMsgDivObj.style.display && maskMsgDivObj.style.display.toLowerCase() == "block") {
			showLayer(maskDivId, "maskMsgDiv");
		}
		var mailAlertDivObj = document.getElementById("mailAlertDiv");
		if (mailAlertDivObj.style.display && mailAlertDivObj.style.display.toLowerCase() == "block") {
			showMailAlertWin(maskDivId, true, true);
		}
	}
}
function toMailBlur() {
	var toMailObj = document.getElementById("toMail");
	
	var toMailErrMsgObj = document.getElementById("toMailErrMsg");
	
	var emailRegExp = /^(\S)+[@]{1}(\S)+[.]{1}(\w)+$/;
	if (!emailRegExp.test(toMailObj.value)) {
		toMailErrMsgObj.style.display = "block";
		return false;
	}
	toMailErrMsgObj.style.display = "none";
	return true;
}
function closeMailAlertWin(maskDivId) {
	var alertInfoDivObj = document.getElementById("mailAlertDiv");
	
	alertInfoDivObj.style.top = "0px";
	alertInfoDivObj.style.left = "0px";
	alertInfoDivObj.style.display = "none";
	
	var mailResultMsgObj = document.getElementById("mailResultMsg");
	var mailResultErrMsgObj = document.getElementById("mailResultErrMsg");
	var mailResultErr1MsgObj = document.getElementById("mailResultErr1Msg");
	
	mailResultMsgObj.style.display = "none";
	mailResultErrMsgObj.style.display = "none";
	mailResultErr1MsgObj.style.display = "none";
	
	hideMask(maskDivId);
}
function showMailAlertWin(maskDivId, adjust, successFlag) {
	closeAlertInfoWin(maskDivId);
	hideLayer(maskDivId, "maskMsgDiv");
	showMask(maskDivId);
	
	if (!adjust) {
		var mailResultMsgObj = document.getElementById("mailResultMsg");
		var mailResultErrMsgObj = document.getElementById("mailResultErrMsg");
		var mailResultErr1MsgObj = document.getElementById("mailResultErr1Msg");
		if (successFlag == 1) {
			mailResultMsgObj.style.display = "block";
			mailResultErrMsgObj.style.display = "none";
			mailResultErr1MsgObj.style.display = "none";
		} else if (successFlag == 0) {
			mailResultMsgObj.style.display = "none";
			mailResultErrMsgObj.style.display = "block";
			mailResultErr1MsgObj.style.display = "none";
		} else {
			mailResultMsgObj.style.display = "none";
			mailResultErrMsgObj.style.display = "none";
			mailResultErr1MsgObj.style.display = "block";
		}
	}
	
	var alertInfoDivObj = document.getElementById("mailAlertDiv");
	var pageDimensions = getMaskSize();
	alertInfoDivObj.style.top = String((pageDimensions[0] / 2) - 150) + "px";
	alertInfoDivObj.style.left = String((pageDimensions[1] / 2) - 200) + "px";
	alertInfoDivObj.style.display = "block";
}
function sendRegFinMail(maskDivId) {
	if (!toMailBlur()) {
		return;
	}
	var toMailObj = document.getElementById("toMail");
	var toMailStr = toMailObj.value;
	closeAlertInfoWin(maskDivId);
	closeSendMailWin(maskDivId);
	showLayer(maskDivId, "maskMsgDiv");
	
	//alert(toMailObj.value);
	var jsonProp = {
			"url" : ctx + "/mail/sendRegFinMail.u",
			"method" : "POST",
			"async" : true,
			"success" : function(respJsonData) {
				hideLayer(maskDivId, "maskMsgDiv");
				/*if (respJsonData.sendMailFlag == 1) {
					showMailAlertWin(maskDivId, false, 1);
					return;
				}*/
				showMailAlertWin(maskDivId, false, respJsonData.sendMailFlag);
			},
			"failed" : function(respJsonData, statusCode) {
				hideLayer(maskDivId, "maskMsgDiv");
				showMailAlertWin(maskDivId, false, 2);
			},
			"data" : '{"toMail":"' + toMailStr + '"}',
			"responseType" : "json"
		};
	var sendAjaxProcessor = new AjaxProcessor(jsonProp);
	sendAjaxProcessor.sendRequest();
}
function initPage() {
	document.body.onresize = function () {
		winResized("maskDiv");
	};
	if (hasFinAccountFlag == "N") {
		if (firstAlertFlag == "") {
			showAlertInfoWin("maskDiv");
		}
	}
}