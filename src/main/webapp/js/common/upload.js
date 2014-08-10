
function UploadComponent(props) {
	this.formId = props.formId;
	this.url = props.url;
	this.fileNameDisplayTextId = props.fileNameDisplayTextId;
	this.fileNameDisplayId = props.fileNameDisplayId;
	this.id = props.id;
	this.uploadButtonText = props.uploadButtonText;
	this.blockWidth = props.blockWidth;
	this.autoUpload = props.autoUpload;
	this.rootPath = props.rootPath;
	this.objectName = props.objectName;
	this.props = props;
}

UploadComponent.prototype.init = function() {
	document.write('<div id="' + this.id + 'OuterDivX" style="position:relative;overflow-x:hidden;overflow-y:hidden;width:' + this.blockWidth + ';">');
	document.write('<div id="' + this.id + 'BtnDivX" style="width:' + this.blockWidth + ';">');
	document.write('<input class="btn_s2" type="button" id="' + this.id + 'BtnX" name="' + this.id + 'BtnX" value="' + this.uploadButtonText + '"/>');
	document.write('</div>');
	document.write('<div id="' + this.id + 'FormDivX" style="position:absolute;width:100px;left:0px;top:0px;z-index:100;cursor:pointer;filter: alpha(opacity = 0);-moz-opacity: 0.00;opacity: 0.00;">');
	if (!this.formId) {
		document.write('<form name="' + this.id + 'FrmX" id="' + this.id + 'FrmX" method="post" enctype="multipart/form-data">');
	}
	document.write('<input type="hidden" name="' + this.id + 'ObjName" id="' + this.id + 'ObjNameX" value="' + this.objectName + '"/>');
	document.write('<input type="file" class="btn_s2" name="' + this.id + '" id="' + this.id + '" style="font-size:18px;height:50px;"/>');
	document.write('<div id="' + this.id + 'ParamsDivX" style="display:none;"></div>');
	if (!this.formId) {
		document.write('</form>');
	}
	document.write('</div>');
	document.write('<iframe name="' + this.id + 'IFrameX" id="' + this.id + 'IFrameX" style="display:none;"></iframe>');
	document.write('</div>');
	//document.getElementById(this.id + 'IFrameX').setAttribute("src", this.rootPath + "/auth_no/forward.u?upload_return");
	var currentObj = this;
	document.getElementById(this.id).onchange = function (evt) {
		var evtC = evt ? evt : window.event;
		var targetObj = evtC.srcElement ? evtC.srcElement : evtC.target;
		//alert(this.props.props);
		if (currentObj.props.uploadVerifyFun) {
			if (currentObj.props.uploadVerifyFun(targetObj)) {
				if (currentObj.fileNameDisplayId) {
					document.getElementById(currentObj.fileNameDisplayId).innerHTML = targetObj.value;
				}
				if (currentObj.fileNameDisplayTextId) {
					document.getElementById(currentObj.fileNameDisplayTextId).value = targetObj.value;
				}
				if (currentObj.props.paramsFun) {
					var paramsDivObj = document.getElementById(currentObj.id + "ParamsDivX");
					var paramVals = currentObj.props.paramsFun();
					if (paramVals && paramVals.length && paramVals.length > 0) {
						for (var i = 0; i < paramVals.length; i++) {
							var hiddenObj = document.createElement("input");
							hiddenObj.setAttribute("name", currentObj.id + "Param");
							hiddenObj.setAttribute("id", currentObj.id + "Param" + String(i));
							hiddenObj.setAttribute("type", "hidden");
							hiddenObj.value = paramVals[i];
							paramsDivObj.appendChild(hiddenObj);
						}
					}
				}
				if (currentObj.props.afterValidFun) {
					currentObj.props.afterValidFun(targetObj);
				}
				if (currentObj.autoUpload) {
					currentObj.upload();
				}
			} else {
				if (currentObj.props.afterInvalidFun) {
					currentObj.props.afterInvalidFun(targetObj);
				}
			}
		} else {
			if (currentObj.props.paramsFun) {
				var paramsDivObj = document.getElementById(currentObj.id + "ParamsDivX");
				var paramVals = currentObj.props.paramsFun();
				if (paramVals && paramVals.length && paramVals.length > 0) {
					for (var i = 0; i < paramVals.length; i++) {
						var hiddenObj = document.createElement("input");
						hiddenObj.setAttribute("name", currentObj.id + "Param");
						hiddenObj.setAttribute("id", currentObj.id + "Param" + String(i));
						hiddenObj.setAttribute("type", "hidden");
						hiddenObj.value = paramVals[i];
						paramsDivObj.appendChild(hiddenObj);
					}
				}
			}
			if (currentObj.props.afterValidFun) {
				currentObj.props.afterValidFun(targetObj);
			}
			if (currentObj.autoUpload) {
				currentObj.upload();
			}
		}
	};
	
	this.callbackFun = function(fileName) {
		var uploadComObj = document.getElementById(currentObj.id);
		var parentObj = uploadComObj.parentNode;
		var newUploadComObj = document.createElement("input");
		newUploadComObj.setAttribute("type", "file");
		newUploadComObj.className = "btn_s2";
		newUploadComObj.setAttribute("name", currentObj.id);
		newUploadComObj.setAttribute("id", currentObj.id);
		newUploadComObj.style.fontSize = "18px";
		newUploadComObj.style.height = "50px";
		parentObj.replaceChild(newUploadComObj, uploadComObj);
		
		var paramsDivObj = document.getElementById(currentObj.id + "ParamsDivX");
		var parentParamsObj = paramsDivObj.parentNode;
		var newParamsDivObj = document.createElement("div");
		newParamsDivObj.setAttribute("id", currentObj.id + "ParamsDivX");
		newParamsDivObj.style.display = "none";
		parentParamsObj.replaceChild(newParamsDivObj, paramsDivObj);
		
		newUploadComObj.onchange = function (evt) {
			var evtC = evt ? evt : window.event;
			var targetObj = evtC.srcElement ? evtC.srcElement : evtC.target;
			//alert(this.props.props);
			if (currentObj.props.uploadVerifyFun) {
				if (currentObj.props.uploadVerifyFun(targetObj)) {
					if (currentObj.fileNameDisplayId) {
						document.getElementById(currentObj.fileNameDisplayId).innerHTML = targetObj.value;
					}
					if (currentObj.fileNameDisplayTextId) {
						document.getElementById(currentObj.fileNameDisplayTextId).value = targetObj.value;
					}
					if (currentObj.props.paramsFun) {
						var paramsDivObj = document.getElementById(currentObj.id + "ParamsDivX");
						var paramVals = currentObj.props.paramsFun();
						if (paramVals && paramVals.length && paramVals.length > 0) {
							for (var i = 0; i < paramVals.length; i++) {
								var hiddenObj = document.createElement("input");
								hiddenObj.setAttribute("name", currentObj.id + "Param");
								hiddenObj.setAttribute("id", currentObj.id + "Param" + String(i));
								hiddenObj.setAttribute("type", "hidden");
								hiddenObj.value = paramVals[i];
								paramsDivObj.appendChild(hiddenObj);
							}
						}
					}
					if (currentObj.props.afterValidFun) {
						currentObj.props.afterValidFun(targetObj);
					}
					if (currentObj.autoUpload) {
						currentObj.upload();
					}
				} else {
					if (currentObj.props.afterInvalidFun) {
						currentObj.props.afterInvalidFun(targetObj);
					}
				}
			} else {
				if (currentObj.props.paramsFun) {
					var paramsDivObj = document.getElementById(currentObj.id + "ParamsDivX");
					var paramVals = currentObj.props.paramsFun();
					if (paramVals && paramVals.length && paramVals.length > 0) {
						for (var i = 0; i < paramVals.length; i++) {
							var hiddenObj = document.createElement("input");
							hiddenObj.setAttribute("name", currentObj.id + "Param");
							hiddenObj.setAttribute("id", currentObj.id + "Param" + String(i));
							hiddenObj.setAttribute("type", "hidden");
							hiddenObj.value = paramVals[i];
							paramsDivObj.appendChild(hiddenObj);
						}
					}
				}
				if (currentObj.props.afterValidFun) {
					currentObj.props.afterValidFun(targetObj);
				}
				if (currentObj.autoUpload) {
					currentObj.upload();
				}
			}
		};
		currentObj.props.callbackFun(fileName);
	};
};
UploadComponent.prototype.upload = function() {
	var uploadFrmObj = null;
	if (!this.formId) {
		uploadFrmObj = document.getElementById(this.id + 'FrmX');
	} else {
		uploadFrmObj = document.getElementById(this.formId);
	}
	//String orgnFormEnctype = uploadFrmObj.getAttribute("enctype");
	uploadFrmObj.setAttribute("enctype", "multipart/form-data");
	uploadFrmObj.action = this.rootPath + this.url;
	uploadFrmObj.target = this.id + 'IFrameX';
	uploadFrmObj.method = "POST";
	uploadFrmObj.submit();
	//uploadFrmObj.setAttribute("enctype", orgnFormEnctype);
};