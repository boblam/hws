<%@page contentType="text/html; charset=UTF-8" isELIgnored="false"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<title>注册</title>
<head>
<style type='text/css'>
body {
	background-color: #CCC;
}
</style>
<link
	href="${ctx}/css/bootstrap/bootstrap-3.0.3-dist/dist/css/bootstrap.min.css"
	rel="stylesheet" type="text/css">
<link href="${ctx}/css/hwsCss/zuiniudaima.css" rel="stylesheet"
	type="text/css">
</head>

<body>

	<div class="header">
		<div class="container">
			<div class="row-fluid nav_wrap">
				<div class="span2 logo">
					<a href="http://www.zuidaima.com/" title="最代码网站"><img
						src="/resource/img/logo.png" alt="logo" />作业本</a>
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


	<div class="main container margin_top10">
		<div class="data_list user">
			<div class="data_list_title">欢迎加入作业本</div>
			<form method="post" id="user">
				<div class="margin_top10">
					<span class="error"></span>
				</div>
				<div class="margin_top10">
					用户名:<input type="text" name="name" id="name" data_name="用户名"
						placeholder="用户名" />
				</div>
				<div class="margin_top10">
					邮&nbsp;&nbsp;&nbsp;箱:<input type="text" name="email" id="email"
						data_name="邮箱" placeholder="邮箱" />
				</div>
				<div class="margin_top10">
					密&nbsp;&nbsp;&nbsp;码:<input type="password" name="password"
						id="password" data_name="密码" placeholder="密码" />
				</div>
				<div class="margin_top10 post" id="create">
					<a class="span2" href="javascript:void(0)">注册</a>
				</div>
			</form>
			<br clear="all" />
		</div>
	</div>

	<!--footer-->
	<div class="footer margin_top10">
		<div class="container">
			<a href="#">帮助</a> <span>|</span> <a href="#">联系我</a> <span>|</span>
			<a href="#">关于作业本团队</a> <span>|</span> <span class="pull-right">
				粤ICP备案111111111号 </span>
		</div>
	</div>
	<!-- end footer-->
</body>
</html>