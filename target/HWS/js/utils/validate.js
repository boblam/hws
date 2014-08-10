function checkEmail(emailStr) {

	var emailPat = /^(.+)@(.+)$/;
	var specialChars = "\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
	var validChars = "\[^\\s" + specialChars + "\]";
	var quotedUser = "(\"[^\"]*\")";
	var ipDomainPat = /^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
	var atom = validChars + '+';
	var word = "(" + atom + "|" + quotedUser + ")";
	var userPat = new RegExp("^" + word + "(\\." + word + ")*$");
	var domainPat = new RegExp("^" + atom + "(\\." + atom + ")*$");
	var matchArray = emailStr.match(emailPat);
	if (matchArray == null) {
		return false;
	}
	var user = matchArray[1];
	var domain = matchArray[2];
	if (user.match(userPat) == null) {
		return false;
	}
	var IPArray = domain.match(ipDomainPat);
	if (IPArray != null) {
		for ( var i = 1; i <= 4; i++) {
			if (IPArray[i] > 255) {
				return false;
			}
		}
		return true;
	}
	var domainArray = domain.match(domainPat);
	if (domainArray == null) {
		return false;
	}
	var atomPat = new RegExp(atom, "g");
	var domArr = domain.match(atomPat);
	var len = domArr.length;
	if ((domArr[domArr.length - 1].length < 2)
			|| (domArr[domArr.length - 1].length > 3)) {
		return false;
	}
	if (len < 2) {
		return false;
	}
	return true;
}


function isCheckChar(inValue) {
	var charpattern = /^[-_. a-zA-Z0-9]+$/;
	if (!charpattern.test(inValue)) {
		return false;
	}
	return true;
}

function isCheckCharCommon(inValue) {
	var charpattern = /^[-a-zA-Z0-9]+$/;
	if (!charpattern.test(inValue)) {
		return false;
	}
	return true;
}

function isValidUserId(userId) {
	var charpattern = /^[-_.a-zA-Z0-9]+$/;
	if (!charpattern.test(userId)) {
		return false;
	}
	return true;
}

function isValidSubdomain(subdomain) {
	var charpattern = /^[-a-zA-Z0-9]+$/;
	if (!charpattern.test(subdomain)) {
		return false;
	}
	return true;
}

function isValidCharacter(subdomain) {
	var charpattern = /^[-a-zA-Z]+$/;
	if (!charpattern.test(subdomain)) {
		return false;
	}
	return true;
}

function isValidAffiliatedOrganization(userId){
	if(userId.length>100){
		return false;
	}
	return true;
}

function isValidCompanyName(userId) {
	var charpattern = /^[\s-_. a-zA-Z0-9]+$/;
	if (!charpattern.test(userId)) {
		return false;
	}
	return true;
}

function isCheckMailChar(inValue) {
	var charpattern = /^[<&>]+$/;
	if (charpattern.test(inValue)) {
		return false;
	}
	return true;
}

function checkURL(value) {
	var urlregex = new RegExp(
			"^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}[0-9A-Za-z\.\-]*\.[0-9A-Za-z\.\-]*$");
	if (urlregex.test(value)) {
		return (true);
	}
	return (false);
}

function IsURL(str_url) {

	var str = str_url;
	var dispStr = "";

	var urlpatern0 = /^https?:\/\/.+$/i;
	if (!urlpatern0.test(str)) {
		return false;
	}

	var urlpatern2 = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?.+$/i;
	if (!urlpatern2.test(str)) {
		return false;
	}

	var urlpatern1 = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;

	if (!urlpatern1.test(str)) {
		return false;
	}

	var s = "0";
	var t = 0;
	var re = new RegExp(":\\d+", "ig");
	while ((arr = re.exec(str)) != null) {
		s = str.substring(RegExp.index + 1, RegExp.lastIndex);

		if (s.substring(0, 1) == "0") {
			return false;
		}

		t = parseInt(s);
		if (t < 1 || t > 65535) {
			return false;
		}
	}
	return true;
}

function checkTelephone(objvalue) {
	// if(f_check_phone(obj) || f_check_mobile(obj)) {
	var regu = /^[0-9\-]*$/;
	var re = new RegExp(regu);
	if (re.test(objvalue)) {
		return true;
	} else {
		return false;
	}
}

function f_check_phone(val) {
	var regu = /(^([0][1-9]{2,3}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0][1-9]{2,3}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{3,8}$)/;
	var re = new RegExp(regu);
	if (re.test(val)) {
		return true;
	}
	return false;
}

function f_check_mobile(val) {
	var regu = /(^[1][3][0-9]{9}$)|(^0[1][3][0-9]{9}$)/;
	var re = new RegExp(regu);
	if (re.test(val)) {
		return true;
	}
	return false;
}

function isInteger(s) {
	var i;
	for (i = 0; i < s.length; i++) {
		// Check that current character is number.
		var c = s.charAt(i);
		if (((c < "0") || (c > "9")))
			return false;
	}
	// All characters are numbers.
	return true;
}

function checkInternationalPhone(strPhone) {
	// Declaring required variables
	var digits = "0123456789";
	// non-digit characters which are allowed in phone numbers
	var phoneNumberDelimiters = "()- ";
	// characters which are allowed in international phone numbers
	// (a leading + is OK)
	var validWorldPhoneChars = phoneNumberDelimiters + "+";
	// Minimum no of digits in an international phone no.
	var minDigitsInIPhoneNumber = 10;
	var bracket = 3
	strPhone = trim(strPhone)
	if (strPhone.indexOf("+") > 1)
		return false
	if (strPhone.indexOf("-") != -1)
		bracket = bracket + 1
	if (strPhone.indexOf("(") != -1 && strPhone.indexOf("(") > bracket)
		return false
	var brchr = strPhone.indexOf("(")
	if (strPhone.indexOf("(") != -1 && strPhone.charAt(brchr + 2) != ")")
		return false
	if (strPhone.indexOf("(") == -1 && strPhone.indexOf(")") != -1)
		return false
	s = stripCharsInBag(strPhone, validWorldPhoneChars);
	return (isInteger(s) && s.length >= minDigitsInIPhoneNumber);
}

function onlyNumberInput(event){
	var unicode=event.charCode? event.charCode : event.keyCode;
	
if(!(unicode==8)&&!(unicode==13))
  if(!((unicode>=48&&unicode<=57))){
    event.returnValue=false;
    return false;
  }
} 

jQuery.fn.exists = function(){return jQuery(this).length>0;} 

function checkNumber(value){
    var reg = /^\d+$/;
    var re = new RegExp(reg);
	return (re.test(value)) ;
}

function checkInteger(value){
	
	var reg = /^(-|\+)?\d+$/;
    var re = new RegExp(reg);
	return (re.test(value)) ;
}

String.prototype.trim=function() {

    return this.replace(/(^\s*)|(\s*$)/g,'');
}

function isFloat(str){
	if(checkNumber(str))
		return true;
	var reg = /^(-|\+)?\d+\.\d*$/;
	return reg.test(str);
}

function checkImage(filePath){
	var lastDotIndex = filePath.lastIndexOf(".");
	if (lastDotIndex == -1) {	
		return false;
	} else {
		var fileNameX = filePath.substring(lastDotIndex + 1, filePath.length);
		if (!fileNameX || fileNameX == "") {
			return false;
		} else {
			var imgXNameReg = /^(([gG][iI][fF])|([jJ][pP][gG])|([bB][mM][pP])|([pP][nN][gG]))$/;
			if (!imgXNameReg.test(fileNameX)) {
				return false;
			}
		}
	}
	return true;
}

function isMoney(str){
	var reg = /(^[0-9]+(.[0-9]{1,2})?$)|(^[0-9](.[0-9]{1,2}){1}$)/
	return reg.test(str);
}

function isChinese(str){
	var pattern=/[\u4E00-\u9FA5]/gi; 
	return pattern.test(str);
}
