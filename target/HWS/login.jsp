<%@page contentType="text/html; charset=UTF-8" isELIgnored="false"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<html>
<head>
<title>作业本</title>
<meta charset="utf-8">
<script type="text/javascript">
var ctx = "${ctx}"; 
</script>

<style type='text/css'>
body {
	background-color: #CCC;
}
</style>

<link
	href="${ctx}/css/bootstrap/bootstrap-3.0.3-dist/dist/css/bootstrap.min.css"
	rel="stylesheet" type="text/css" />
<link href="${ctx}/css/hwsCss/zuiniudaima.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript" src="${ctx}/js/jquery-1.7.min.js"></script>
<script type="text/javascript" src="${ctx}/js/main.js"></script>

</head>

<body>

	<div class="header">
		<div class="container">
			<div class="row-fluid nav_wrap">
				<div class="span2 logo">
					<a href="#" title="作业本"><img src="/resource/img/logo.png"
						alt="logo" />作业本</a>
				</div>
				<div class="span4 nav_link row-fluid">
					<div id="nav_index" class="span2">
						<a href="/">首页</a>
					</div>
					<div id="nav_share" class="span2">
						<a href="/share.htm">分享</a>
					</div>
					<div id="nav_topic" class="span2">
						<a href="/topic.htm">话题</a>
					</div>
					<div id="nav_event" class="span2">
						<a href="/event.htm">动态</a>
					</div>
					<div id="nav_blog" class="span2">
						<a href="/blog.htm"></a>
					</div>
					<!--<div id="nav_jar" class="span2"><a href="/jar.htm">jar包</a></div>-->
				</div>
				<div class="span4 nav_search row-fluid">
					<div class="span9">
						<input type="text" id="search" placeholder="搜索您要的作业..."
							value="搜索您要的作业..." /> <i class="icon-search"></i>
					</div>
					<div class="span3">
						<div class="share">
							<a href="/share/create.htm" rel="nofollow">我要分享</a>
						</div>
					</div>
				</div>
				<div class="span2 user">
					<a href="javascript:login()" rel="nofollow">登录</a>&nbsp;&nbsp; <a
						href="javascript:create()" rel="nofollow">注册</a>
				</div>
			</div>
		</div>
	</div>

	<!--login form-->
	<div class="main container margin_top10">
		<div class="data_list user">
			<div class="data_list_title">欢迎登录作业本</div>
			 <form method="post" id="user" action="login.do">
				<div class="margin_top10">
					<span class="error"></span>
				</div>
				<div class="margin_top10">
					邮&nbsp;&nbsp;&nbsp;箱:<input type="text" name="account" id="account"
						data_name="邮箱" placeholder="邮箱" value="" />
				</div>
				<div class="margin_top10">
					密&nbsp;&nbsp;&nbsp;码:<input type="password" name="password"
						id="password" data_name="密码" placeholder="密码" value=""
						id="password" />
				</div>
				<div class="margin_top10">
					角&nbsp;&nbsp;&nbsp;色: <span class="input-group-addon"> 老师 <input
						type="radio" value="teacher" name="identity">
					</span> <span class="input-group-addon"> 学生 <input type="radio"
						value="student" name="identity">
					</span>
				</div>
				<div class="margin_top10">
					<input type="checkbox" id="rememberme" name="rememberme"
						checked="checked" /> <label for="rememberme">记住我</label>
				</div>
				<div class="margin_top10 post" id="login">
					<input class="span2" type = "submit" id = "loginBut">登录</input>
				</div>
				<a class="span2" href="#">忘记密码？</a>
				</form> 
			<br clear="all" />
		</div>
	</div>
	<!--end login form-->

	<!--footer-->
	<div class="footer margin_top10">
		<div class="container">
			<a href="#">帮助</a> <span>|</span> <a href="#">联系我</a> <span>|</span>
			<a href="#">关于作业本团队</a> <span>|</span> <span class="pull-center">
				粤ICP备案111111111号 </span>
		</div>
	</div>
	<!-- end footer-->




</body>
</html>
