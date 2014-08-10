function dateCompare(startdate, enddate) {
	var starttimes = startdate.split("-");
	var start = new Date();
	start.setFullYear(starttimes[0], parseInt(starttimes[1],10)-1, starttimes[2]);
	var endtimes = enddate.split("-");
	var end = new Date();
	
	end.setFullYear(endtimes[0], parseInt(endtimes[1],10)-1, endtimes[2]);
	
	return Date.parse(start) > Date.parse(end);
}

function compareDate(startdate, enddate) {
	var startTime = startdate.replace(/-/g, "/");
	var endTime = enddate.replace(/-/g, "/");
	startTime = new Date(startTime);
	endTime = new Date(endTime);
	if (Date.parse(startTime) > Date.parse(endTime)) {
		alertMessageWarning("The end date must be after the start date.", '');
		return false;
	} else {
		return true;
	}
}

function initcalendar() {
	$('#reportstartDate').datepicker( {
		showOn :'button',
		dateFormat :'M d,yy',
		changeFirstDay :false,
		buttonText :'',
		buttonImageOnly :true,
		buttonImage :'images/common/calendar.png'
	});
	$('#reportendDate').datepicker( {
		showOn :'button',
		dateFormat :'M d,yy',
		changeFirstDay :false,
		buttonText :'',
		buttonImageOnly :true,
		buttonImage :'images/common/calendar.png'
	});
}


function getDate(dstring, pattern) {
	// mapping pattern 'M d yy', for example Jan 14,2009
	if (pattern == 'M d,yy') {
		var mon = dstring.substring(0, 3);
		switch (mon) {
		case 'Jan':
			mon = 0;
			break;
		case 'Feb':
			mon = 1;
			break;
		case 'Mar':
			mon = 2;
			break;
		case 'Apr':
			mon = 3;
			break;
		case 'May':
			mon = 4;
			break;
		case 'Jun':
			mon = 5;
			break;
		case 'Jul':
			mon = 6;
			break;
		case 'Aug':
			mon = 7;
			break;
		case 'Sep':
			mon = 8;
			break;
		case 'Oct':
			mon = 9;
			break;
		case 'Nov':
			mon = 10;
			break;
		case 'Dec':
			mon = 11;
			break;
		default:
			mon = 0;
		}
		var day = dstring.substring(dstring.indexOf(' '), dstring.indexOf(','));
		var year = dstring.substring(dstring.indexOf(',') + 1, dstring.length);
		var date = new Date();
		date.setFullYear(year, mon, day);
		return date;
	}
	return null;
}

function formatTime(second) {
	/*
	 * String strTime = DateTimeUtils.formatDate(
	 * DateTimeUtils.strToDateLong(Long.toString(second), "ss"), "HH:mm:ss");
	 * return strTime;
	 */
	var hours = parseInt(second / 3600);
	var minutes = parseInt(second % 3600 / 60);
	var seconds = parseInt(second % 3600 % 60);

	if (hours < 10) {
		hours = "0" + hours;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return hours + ":" + minutes + ":" + seconds;

}