function AjaxProcessor(jsonProp) {
	this.jsonProp = jsonProp;
}
AjaxProcessor.prototype.sendRequest = function() {
	if (this.jsonProp) {
		var req = null;
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		if (req) {
			this.httpRequest = req;
			// alert(this.httpRequest);
			// this.url = this.jsonProp.url;
			var urlTmp = this.jsonProp.url;
			if (urlTmp.indexOf("?") == -1) {
				urlTmp = urlTmp + "?time=" + new Date();
			} else {
				urlTmp = urlTmp + "&time=" + new Date();
			}
			var methodTmp = null;
			if (this.jsonProp.method) {
				methodTmp = this.jsonProp.method;
			} else {
				methodTmp = "GET";
			}
			var asyncTmp = null;
			if (this.jsonProp.async) {
				asyncTmp = this.jsonProp.async;
			} else {
				asyncTmp = true;
			}

			this.httpRequest.open(methodTmp, urlTmp, asyncTmp);
			if (!this.jsonProp.responseType) {
				this.httpRequest.setRequestHeader("Content-Type",
						"text/plain;charset=UTF-8");
			} else if (this.jsonProp.responseType == "json") {
				this.httpRequest.setRequestHeader("Content-Type",
				 "application/json;charset=UTF-8");
			} else if (this.jsonProp.responseType == "xml") {
				this.httpRequest.setRequestHeader("Content-Type",
						"application/xml;charset=UTF-8");
			} else {
				this.httpRequest.setRequestHeader("Content-Type",
						"text/plain;charset=UTF-8");
			}
			// alert("sdsdsds333");
			if (this.jsonProp.headers) {
				for ( var i = 0; i < this.jsonProp.headers.length; i++) {
					// alert("sdsdsds4444");
					this.httpRequest.setRequestHeader(
							this.jsonProp.headers[i].name,
							this.jsonProp.headers[i].value);
					// alert("sdsdsds55555");
				}
			}
			var thisObj = this;
			this.httpRequest.onreadystatechange = function() {
				if (thisObj.httpRequest.readyState == 4) {
					if (thisObj.httpRequest.status == 200) {
						// alert("sdsdsd2");
						var respText = null;
						if (thisObj.jsonProp
								&& thisObj.jsonProp.responseType
								&& (thisObj.jsonProp.responseType == "json" || thisObj.jsonProp.responseType == "plain")) {
							respText = thisObj.httpRequest.responseText;
							//alert(respText);
							if (thisObj.jsonProp.responseType == "json") {
								var resp = eval('(' + respText + ')');
								if (thisObj.jsonProp.success) {
									thisObj.jsonProp.success(resp);
								}
							} else {
								if (thisObj.jsonProp.success) {
									thisObj.jsonProp.success(respText);
								}
							}
						} else {
							if (thisObj.jsonProp.success) {
								respText = thisObj.httpRequest.responseXML;
								thisObj.jsonProp.success(respText);
							}
						}
					} else {
						if (thisObj.jsonProp
								&& thisObj.jsonProp.responseType
								&& (thisObj.jsonProp.responseType == "json" || thisObj.jsonProp.responseType == "plain")) {
							respText = thisObj.httpRequest.responseText;
							//alert(respText);
							if (thisObj.jsonProp.responseType == "json") {
								var resp = eval('(' + respText + ')');
								if (thisObj.jsonProp.failed) {
									thisObj.jsonProp.failed(resp, thisObj.httpRequest.status);
								}
							} else {
								if (thisObj.jsonProp.failed) {
									thisObj.jsonProp.failed(respText, thisObj.httpRequest.status);
								}
							}
						} else {
							if (thisObj.jsonProp.failed) {
								respText = thisObj.httpRequest.responseXML;
								thisObj.jsonProp.failed(respText, thisObj.httpRequest.status);
							}
						}
					}
				}
			};

			if (this.jsonProp.data) {
				req.send(this.jsonProp.data);
			} else {
				req.send(null);
			}
		}
	}
};