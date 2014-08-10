function GetCookie(Name) {	
	var search = Name + "=";
	var returnvalue = "";
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			returnvalue = unescape(document.cookie.substring(offset, end));
		}
	}
	if(Name == 'com_skta_ulearn_username' || Name == 'com_skta_ulearn_fullname'){
		returnvalue = $.base64Decode(returnvalue.replace(/-/g, "="));
	}
	return returnvalue;
}

function WriteCookie(name, value, time) {
	if(name == 'com_skta_ulearn_username' || name == 'com_skta_ulearn_fullname'){
		value = $.base64Encode(value).replace(/=/g, "-"); 
	}
	jQuery.cookie(name, value, {
		expires : time,
		domain : ".knoodle.com",
		path :"/"
	});
}

function checkBrowseCookie(){
	WriteCookie("com_browse_cookie","true",1/24/60);
	var com_browse_cookie = GetCookie("com_browse_cookie");
	if (com_browse_cookie != "true") {
		alertMessageCheckBrowse("Your browser does not currently accept cookies. Please enable cookies in your browser to proceed.");
		/*$('#check_browse').modal( {
			close :false,
			overlayId :'check_browse_overlay',
			containerId :'check_browse_container',
			onShow : function(dialog) {
				dialog.data.find('.message').text("Your browser is currently not supporting cookies. Please enable the cookies to proceed further.");
		  }
		});*/
	}
}

