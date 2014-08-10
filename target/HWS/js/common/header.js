/**
 * This file contains the functions which used by header.jsp.
 * @return
 */

/**
 * This function initializes page, called every knoodle jsp page.
 */
function initPage() {
	
	// Button
	$(".button").hover( function() {
		$(this).addClass('hoverButton');
		$(".button_special_preview").removeClass('hoverButton'); // in iteration 2.2, enhancement 988
	}, function() {
		$(this).removeClass('hoverButton');
		$(".button_special_preview").addClass('hoverButton'); // in iteration 2.2, enhancement 988
	});
	// set default value. // in iteration 2.2, enhancement 988
	$(".button_special_preview").addClass('hoverButton');
	// Button special preview for lesson and course. // in iteration 2.2, enhancement 988
	$(".button_special_preview").hover( 
		function() {
			// over
			$(this).removeClass('hoverButton');
			$(this).addClass('hoverButton_special_preview');
		}, 
		function() {
			// out
			$(this).removeClass('hoverButton_special_preview');
			$(this).addClass('hoverButton');
		}
	);
	// List Table
	zebraRows();

	// Field Text
	$(".text_default").each( function() {
		createTextDefault($(this));
	});
	// Field Select
	$("body").mousedown( function() {
		selectDefaultField();
	});
	$(".select_default").each( function() {
		createSelectDefault($(this));
	});
	// Input in Field Text and Field Select.
	$(".text_default_input_field").each( function() {
		$(this).blur( function() {
			blurTextDefaultField($(this));
		});
	});
	$(".text_default_input_field").each( function() {
		$(this).focus( function() {
			focusTextDefaultField($(this));
		});
	});

	$(".select_default_input").each( function() {
		$(this).click( function() {
			clickSelectDefaultField($(this));
		})
	});
	$(".select_default_right").each( function() {
		$(this).click( function() {
			clickSelectDefaultField($(this).next("div").children("input"));
		})
	});
	
	$(".timeago").timeago();
	
	
	initHeader();
	
	//Disable cache for all ajax requests.
	$.ajaxSetup({
		   cache: false
	});
}


/**
 * This function initializes the header of each page.
 */
function initHeader() {	
	initMenu();
}

function initMenu() {
	$(".menuBar .menu li:last").css("border-bottom", "none");
	//loadTree('categoryWidget');
	// Menu hover and menu list show/hide
	$("#menu .pulldown").hover(
		function() {
			//$(this).children(".menuName").addClass('hoverMenu');
			$(this).children(".menuList").show();
			if ($.browser.msie) {
				$(this).find(".fadeBackgroundImage").height(
						$(this).find(".fadeBackgroundImage").parent()
								.height());
			}
		}, function() {
			//$(this).children(".menuName").removeClass('hoverMenu');
			//$('#categoryWidget').hide();
			$(this).children(".menuList").hide();
		});

	// Toggle background of item in menu list.
	$(".menuList li").hover( function() {
		$(".hoveredMenuItem").removeClass('hoveredMenuItem');
		$(this).addClass('hoveredMenuItem');
	}, function() {
		$(this).removeClass('hoveredMenuItem');
	});
	
	/*
	$("#tourMenu").click( function() {
		goHelpPage('header','Tour');
	});
	*/
}

/** Removed By James
function validateLogin(id) {
	var url = ctx + '/signIn.u';
	$.ajax( {
		type :"POST",
		url :url,
		data :{userId:$('#loginUserId').val(),password:$('#loginPassword').val()},
		success : function(msg) {
			if (msg == 'true') {
				window.name = "LOGIN";
				window.location.href = ctx + "/?login=true";
			} else if (msg == 'false') {
				alertLoginError('The User ID or Password is not correct.',
						function() {
							// $('#loginUserId').focus();
					});
				return false;
			} else {
				window.location.href = ctx + "/" + msg;
			}
			return;
		},
		error : function() {
			return;
		}
	});
}**/

function signout() {
	 chkLeavePage(function(){
		chatChangePage( function() {
			var url = ctx + '/signOut.u';
			$.ajax( {
				type :"POST",
				url :url,
				data :"",
				success : function(msg) {
					window.location.href = ctx + "/";
					return;
				},
				error : function(XMLHttpRequest, textStatus, thrownError) {
					return;
				}
			});
		});
	 });
}

function isLogin() {
	var name = GetCookie('com_skta_ulearn_username');
	return (name != "" && name != '""');
}

function needLogin(url) {
	if (!isLogin()) {
		WriteCookie("com_skta_ulearn_jit_url", url, 60);
		window.location.href = ctx + "/jit.u";
	}
}

function initNavigator(currentPage) {	
	if (currentPage == "") {
		return;
	}
	$("body").addClass(currentPage);	
}


function changeServicPlan(promo,acountId,systemUrl){
	if (typeof(promo) == "undefined") {
		promo='';
	}	
	//window.location.href=@@pricing.upgrade.url@@
	window.location.href=ctx+"/paymentTestForm.u?PROMO=" + promo + "&accountId="+acountId;
	//$("#servicePlanForm").submit();
}