function dragJQ(dragControl, dragContent){
	var _drag = false, _x, _y, cw, ch, sw, sh;
	var dragContent = typeof dragContent == "undefined" ? dragControl : dragContent;
	
	$(dragControl).mousedown(function(e){
		_drag = true;
		
		_x = e.pageX - parseInt($(dragContent).css("left"));
		_y = e.pageY - parseInt($(dragContent).css("top"));
		//cw = $(window).width();
		//ch = $(window).height();
		var wh=getWindowSize();
		cw = wh[1]
		ch = wh[0];
		sw = parseInt($(dragContent).outerWidth());
		sh = parseInt($(dragContent).outerHeight());
		
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //禁止拖放对象文本被选择的方法
		document.body.setCapture && $(dragContent)[0].setCapture(); // IE下鼠标超出视口仍可被监听
		
		$(document).mousemove(function(e){
			if (_drag) {
				var x = e.pageX - _x;
				var y = e.pageY - _y;
				x = x < 0 ? x = 0 : x < (cw-sw) ? x :(cw-sw);
				y = y < 0 ? y = 0 : y < (ch-sh) ? y :(ch-sh);
				
				$(dragContent).css({
					top: y,
					left: x
				});
			}
		}).mouseup(function(){
			_drag = false;
			document.body.releaseCapture && $(dragContent)[0].releaseCapture();
		});
	});
}

function getWindowSize() {
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