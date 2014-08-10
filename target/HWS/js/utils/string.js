String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

function gup(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

function toBreakWord(tagObj, intLen, max, id, iscut) {
	var obj = document.getElementsByTagName(tagObj);

	for ( var i = 0; i < obj.length; i++) {

		if (obj[i].id == id) {
			var strContent = $(obj[i]).text();
			// var num1=countInstances(strContent,"<");
			// var num2=countInstances(strContent,">");
			// max=max+3*(num1+num2);
			if (iscut == 'true') {
				strContent = cutDescription(strContent, max);
			} else {
				if (strContent.length > max) {
					strContent = cutDescription(strContent, max);
				}
			}
			var strTemp = nobreakWords(strContent, intLen);
			$(obj[i]).text(strTemp);
			var ht = $(obj[i]).html();
			var reg = new RegExp("&lt;br&gt;", "g");
			ht = ht.replace(reg, "<br>");
			reg = new RegExp("&lt;br>", "g");
			ht = ht.replace(reg, "<br>");
			ht = ht.replace("<br>...","...");
			$(obj[i]).html(ht);
		}
	}
}

function nobreakWords(strContent, strlength) {
	var strTemp = '';
	var reg = new RegExp("<br>", "g");
	var result = strContent.replace(reg, " ");
	result = $.trim(result);
	var sign = [ " ", "?", "!", ",", ":", ";" ];
	while (result.length > strlength) {

		var x = strlength;
		var tempLine = '';
		var length = 0;
		while (x > 0) {
			index = result.indexOf(sign[0]);
			if (index < 0)
				index = result.length;
			for (i = 1; i < sign.length; i++) {
				length = result.indexOf(sign[i]);
				if (length < 0)
					length = result.length;
				if (index > length)
					index = length;
			}
			// */
			if (index + 1 <= x) {
				tempLine += result.substr(0, index + 1);
				x = x - index - 1;
				result = result.substr(index + 1, result.length - 1);

			} else if (index + 1 > x && index + 1 < strlength) {
				x = 0;
			} else {
				tempLine += result.substr(0, x - 1);
				tempLine += '-';
				result = result.substr(x - 1, result.length - 1);
				x = 0;
			}
		}
		strTemp += tempLine + '<br>';
	}
	return strTemp + result;
}

function getSubString(objects, intLen) {
	objects.each(function (){
		strContent = $.trim($(this).text());
		if (strContent.length > intLen) {
			strContent = cutDescription(strContent, intLen);
			$(this).text(strContent);
		}
	});
}

function cutText(tagObj, intLen, id) {
	var obj = document.getElementsByTagName(tagObj);
	var strContent = "";
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].id == id) {
			strContent = obj[i].innerHTML;
			if (strContent.length > intLen) {
				strContent = cutDescription(strContent, intLen);
			}
			obj[i].innerHTML = strContent;
		}
	}
}

function cutTextAccordingPreviousElement(tagObj, intLen, id) {
	var obj = document.getElementsByTagName(tagObj);
	var strContent = "";
	for ( var i = 0; i < obj.length; i++) {
		if (obj[i].id == id) {
			strContent = obj[i].innerHTML;
			var previous = obj[i].previousSibling.innerHTML;
			if (strContent.length + previous.length > intLen) {
				strContent = strContent.substring(0, intLen - previous.length);
				strContent += "..."
			}
			obj[i].innerHTML = strContent;
		}
	}
}

function toBreakTipWord(tagObj, intLen, max, id) {

	var obj = document.getElementsByTagName(tagObj);
	var j = 0;
	var splitLines;
	for ( var i = 0; i < obj.length; i++) {

		if (obj[i].id == id) {
			var strContent = obj[i].innerHTML;
			var strTemp = breakWords(strContent, intLen);
			// obj[i].innerHTML = strTemp;
			splitLines = strTemp.split("<br/>");
			// alert(strTemp);
			if (splitLines.length > max) {
				strTemp = splitLines[0] + splitLines[1] + splitLines[2]
						+ splitLines[3] + "...";
				obj[i].innerHTML = strTemp;
			}
		}
	}
}

function cutDescription(desc, length) {
	var x = length;
	result = desc;
	var sign = [ " ", "?", "!", ",", ":", ";" ];
	var tempLine = '';
	var temp = 0;
	if (desc.length <= length) {
		return desc;
	}
	while (x > 0) {
		index = result.indexOf(sign[0]);
		if (index < 0)
			index = result.length;
		for (i = 1; i < sign.length; i++) {
			temp = result.indexOf(sign[i]);
			if (temp < 0)
				temp = result.length;
			if (index > temp)
				index = temp;
		}
		if (x == length && index > x) {
			tempLine = desc.substr(0, length);
			break;
		}
		if (index <= x) {
			tempLine += result.substr(0, index + 1);
			x = x - index - 1;
			result = result.substr(index + 1, result.length - 1);
		} else {
			x = 0;
		}
	}
	return tempLine + "...";
}

function breakWords(strContent, strlength) {
	var strTemp = '';
	var reg = new RegExp("<br>", "g");
	var result = strContent.replace(reg, " ");
	result = $.trim(result);
	var sign = [ " ", "?", "!", ",", ":", ";" ];
	while (result.length > strlength) {

		var x = strlength;
		var tempLine = '';
		var length = 0;
		while (x > 0) {
			index = result.indexOf(sign[0]);
			if (index < 0)
				index = result.length;
			for (i = 1; i < sign.length; i++) {
				length = result.indexOf(sign[i]);
				if (length < 0)
					length = result.length;
				if (index > length)
					index = length;
			}
			// */
			if (index + 1 <= x) {
				tempLine += result.substr(0, index + 1);
				x = x - index - 1;
				result = result.substr(index + 1, result.length - 1);

			} else if (index + 1 > x && index + 1 < strlength) {
				x = 0;
			} else {
				tempLine += result.substr(0, x - 1);
				tempLine += '-';
				result = result.substr(x - 1, result.length - 1);
				x = 0;
			}
		}
		strTemp += tempLine + '<br>';
	}
	return strTemp + result;
}

function splitWords(strContent, strlength) {
	var strTemp = '';
	if (strContent.length >= strlength) {
		strTemp = strContent.substr(0, strlength) + '...';
	} else {
		strTemp = strContent;
	}
	return strTemp;
}

function noscript(str) {
	var lt = /</g;
	var gt = />/g;
	var res = str.replace(lt, "&lt;").replace(gt, "&gt;");
	return res;
}

function noquot(str) {
	var squot = /'/g;
	var quot = /"/g;
	var res = str.replace(squot, "\\\'").replace(quot, "&quot;"); 
	//alert(res);
	return res;
}

function replaceScrChars(str) {
	var lt = /</g;
	var gt = />/g;
	var squot = /'/g;
	var quot = /"/g;
	var res = str.replace(lt, "&lt;").replace(gt, "&gt;").replace(squot,
			"&#39;").replace(quot, "&quot;");
	return res;
}

function filterExtraChar(str) {
	var newstr = str.replace(/[^\w]*/g, '');
	if ($.trim(newstr).length == 0) {
		newstr = '_';
	}
	return newstr;
}
function countInstances(mainStr, subStr) {
	var count = 0;
	var offset = 0;
	do {
		offset = mainStr.indexOf(subStr, offset);
		if (offset != -1) {
			count++;
			offset += subStr.length;
		}
	} while (offset != -1)
	return count;
}

function trim(s) {
	var i;
	var returnString = "";
	// Search through string's characters one by one.
	// If character is not a whitespace, append to returnString.
	for (i = 0; i < s.length; i++) {
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (c != " ")
			returnString += c;
	}
	return returnString;
}

function stripCharsInBag(s, bag) {
	var i;
	var returnString = "";
	// Search through string's characters one by one.
	// If character is not in bag, append to returnString.
	for (i = 0; i < s.length; i++) {
		// Check that current character isn't whitespace.
		var c = s.charAt(i);
		if (bag.indexOf(c) == -1)
			returnString += c;
	}
	return returnString;
}

function ReplaceAll(str) {
	while (str.indexOf(" ") >= 0) {
		str = str.replace(" ", "_");
	}
	return str;
}

function removeHTML(Str) {
	var S = Str;
	S = S.replace(/<a\s(href=\S+)(.+>)/gi, "[[[a $1");
	S = S.replace(/<a\s(.+\s)(href=.+s)(.+>)/gi, "[[[a $2 >");
	S = S.replace(/<\/a>/gi, "[[[/a>");
	S = S.replace(/<img\s(src=\S+)(.*?>)/gi, "[[[img $1>");
	S = S.replace(/<img\s(.+\s)(src=.*\s)(.*?>)/gi, "[[[img $2 ");
	S = S.replace(/<br?>/gi, "[[[br/>");
	S = S.replace(/<p(.*?>)/gi, "[[[p>");
	S = S.replace(/<\/p>/gi, "[[[/p>");
	S = S.replace(/<(table+\s)/gi, "[[[$1 ");
	S = S.replace(/<\/table?>/gi, "[[[/table>");
	S = S.replace(/<(tr.+>)/gi, "[[[tr>");
	S = S.replace(/<\/tr?>/gi, "[[[/tr>");
	S = S.replace(/<(td.*)(rowspan.\d.|colspan.\d.)(.*?)>/gi, "[[[td $2>");
	S = S.replace(/<(td.+?)>/gi, "[[[td>");
	S = S.replace(/<\/td?>/gi, "[[[/td>");
	S = S.replace(/<.+?>/gi, "");
	S = S.replace(/\[\[\[/gi, "<");
	S = S.replace(/&nbsp;/g, "").replace(/&middot;/g, "");
	return S
}

function startWith(orginalStr, subStr) {
	if ("string" != typeof (orginalStr) || "string" != typeof (subStr)) {
		return false;
	}
	return (orginalStr.toLowerCase().substring(0, subStr.length) == subStr);
}


function clearOfficeCode(text){
	var cstText = text;//'<div><p>First <p>First Paragraph</p> Paragraph</p><p>Second Paragraph</p></div> ';
	var reg = new RegExp("<!--[^>]*-->", "g");
	cstText = cstText.replace(reg,"");
	do{
		var first = cstText.indexOf("<![endif]--> &lt;!--");
		var last  = cstText.indexOf("--&gt;");
		if (first >=0 && last > 0) 
			cstText = cstText.substring(0,first+12) + cstText.substring(last+6, cstText.length);
	} while (cstText.indexOf("<![endif]--> &lt;!--") >=0 && cstText.indexOf("--&gt;") >0);
	do{
		first = cstText.indexOf("<!--[if");
		last  = cstText.indexOf("<![endif]-->");
		if (first >=0 && last > 0) 
			cstText = cstText.substring(0,first) + cstText.substring(last+12, cstText.length);
	} while (cstText.indexOf("<!--[if") >=0 && cstText.indexOf("<![endif]-->") >0);
	do{
		first = cstText.indexOf("<!--[if");
		last  = cstText.indexOf("<! [endif] >");
		if (first >=0 && last > 0) 
			cstText = cstText.substring(0,first) + cstText.substring(last+12, cstText.length);
	} while (cstText.indexOf("<!--[if") >=0 && cstText.indexOf("<! [endif] >") >0);
	return cstText;
}

function isNullOrEmpty(strVal) {
	if (strVal == '' || strVal == null || strVal == undefined) {
		return true;
	} else {
		return false;
	}
}