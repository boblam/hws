function handleDivPosition(id){
	var s_top = $(window).scrollTop();
	var s_left = $(window).scrollLeft();
	var w = $(window).width();
	var h = $(window).height();	
	var c_w = $("#"+id).width();
	var c_h = $("#"+id).height();	
	$("#"+id).css("top",(h-c_h)/2+s_top);
	$("#"+id).css("left",(w-c_w)/2+s_left);

}

function closeDiv(divId){
	$("#"+divId).css('display','none'); 
	$(".mask_bg").remove();
}

function closeRDiv(divId){
	$("#"+divId).css('display','none'); 
}

function handleDivHPosition(id){
	var s_top = $(window).scrollTop();
	var s_left = $(window).scrollLeft();
	var w = $(window).width();
	var h = $(window).height();	
	var c_w = $("#"+id).width();
	var c_h = $("#"+id).height();	
	$("#"+id).css("top",s_top);
	$("#"+id).css("left",(w-c_w)/2+s_left);
}

function showDiv(divId,flag){
	$('#'+divId).show();
	if(flag=='H')
		handleDivHPosition(divId);
	else
		handleDivPosition(divId);
	createMask1();
}

function showRDiv(divId,flag){
	$('#'+divId).show();
	if(flag=='H')
		handleDivHPosition(divId);
	else
		handleDivPosition(divId);
}

function createMask(){
	var w = $(window).width();
	var h = $(document).height();
	$('body').append("<div class='mask_bg' style='width:"+w+"px;height:"+h+"px'></div>"+
			"<img id='loadPic' class='loadPic' src='../images/loading.gif'>");
	handleMaskBgImgPosition();
}

function createMask1(){
	var w = $(window).width();
	var h = $(document).height();
	$('body').append("<div class='mask_bg' style='width:"+w+"px;height:"+h+"px'></div>");
}


function handleMaskBgImgPosition(){

	var s_top = $(window).scrollTop();
	var s_left = $(window).scrollLeft();
	var w = $(window).width();
	var h = $(window).height();
	
	$(".mask_bg").css("height", $(document).height());
	
	var c_w = $(".mask_bg").width();
	var c_h = $(".mask_bg").height();
	
	$(".loadPic").css("top",(h)/2+s_top);
	$(".loadPic").css("left",(w)/2+s_left);
}
function removeMask(){
	$(".mask_bg").remove();
	$(".loadPic").remove();
}

$(window).bind("resize", function(){

	handleMaskBgImgPosition();

});
$(window).bind("scroll", function(){

	handleMaskBgImgPosition();

});

function handleMaskBgPosition(){

	var s_top = $(window).scrollTop();
	var s_left = $(window).scrollLeft();
	var w = $(window).width();
	var h = $(window).height();	
	$(".mask_bg").css("height", $(document).height());
}