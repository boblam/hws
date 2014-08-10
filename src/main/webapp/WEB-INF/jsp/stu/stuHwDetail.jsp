<%@page contentType="text/html; charset=UTF-8" isELIgnored="false"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>作业详细信息</title>
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

<!--
<div class="container header">
	<div class='container'>
     	 <div class='navbar-inner' style="height: auto;">
    		<ul class="nav">
              <li class="active"><a href="#">首页</a></li>
              <li><a href="#">分享</a></li>
              <li><a href="#">动态</a></li>
        	</ul>
           
               <div class="span3 user pull-right">
                    <a href="#" class="#">登陆</a>
                    <a href="#" class="#">注册</a>
                </div>
  		</div>
    </div>
</div>
--> 
<!--navbar-fixed-top 可以使头部的导航条固定在顶部-->
<div class="header navbar-fixed-top">
  <div class="container">
    <div class="row-fluid nav_wrap">
      <div class="span2 logo"> <a href="http://www.zuidaima.com/" title="最代码网站"><img src="/resource/img/logo.png" alt="logo">作业本</a> </div>
      <div class="span4 nav_link row-fluid">
        <div id="nav_index" class="span2"><a href="/">首页</a></div>
        <div id="nav_share" class="span2"><a href="/share.htm">分享</a></div>
        <div id="nav_topic" class="span2"><a href="/topic.htm">话题</a></div>
        <div id="nav_event" class="span2"><a href="/event.htm">动态</a></div>
        <div id="nav_blog" class="span2"><a href="/blog.htm"></a></div>
        <!--<div id="nav_jar" class="span2"><a href="/jar.htm">jar包</a></div>--> 
      </div>
      <div class="span4 nav_search row-fluid">
        <div class="span9">
          <input type="text" id="search" placeholder="搜索您要的作业..." value="搜索您要的作业...">
          <i class="icon-search"></i> </div>
        <div class="span3">
          <div class="share"><a href="/share/create.htm" rel="nofollow">我要分享</a></div>
        </div>
      </div>
      <div class="span2 user"> <a href="javascript:login()" rel="nofollow">登录</a>&nbsp;&nbsp; <a href="javascript:create()" rel="nofollow">注册</a> </div>
    </div>
  </div>
</div>

<!--body container-->
<div class="container-fluid margin_top15">
  <div class="row-fluid"> 
    <!--left nav bar-->
    <nav class="span1" id="#secondary-navbar">
      <nav class="tabbable tabs-left hidden-phone" id="tabnav">
        <ul class="nav nav-tabs">
          <li> <a href="/activity">
            <div class="iconnav"> <img alt="My Big Campus" src="./images/schoolwork.png"> <span>活动</span> </div>
            </a> </li>
          <li> <a href="/activity">
            <div class="iconnav"> <img alt="My Big Campus" src="./images/schoolwork.png"> <span>活动</span> </div>
            </a> </li>
          <li> <a href="/conversations">
            <div class="iconnav"> <img alt="My Big Campus" src="./images/schoolwork.png"> <span>消息</span> </div>
            </a> </li>
          <li class="active"> <a href="/schoolworks">
            <div class="iconnav"> <img alt="My Big Campus" src="./images/schoolwork.png"> <span>作业本</span> </div>
            </a> </li>
        </ul>
      </nav>
      <nav class="tabbable visible-phone" id="tabtopnav">
        <ul class="nav nav-tabs">
          <li> <a href="/activity">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/activity.png"> <span>Activity</span> </div>
            </a> </li>
          <li> <a href="/conversations">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/conversations.png"> <span>Messages</span> </div>
            </a> </li>
          <li class="active"> <a href="/schoolworks">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/schoolwork.png"> <span>Schoolwork</span> </div>
            </a> </li>
          <li> <a href="/your_stuff">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/yourstuff.png"> <span>Kids Stuff</span> </div>
            </a> </li>
          <li> <a href="/users/2082241/events">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/calendar.png"> <span>Calendar</span> </div>
            </a> </li>
          <li> <a href="/groups">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/groups.png"> <span>Groups</span> </div>
            </a> </li>
          <li> <a href="/schools/my-big-campus-sample-school">
            <div class="iconnav"> <img alt="My Big Campus" src="/assets/application/school.png"> <span>School</span> </div>
            </a> </li>
        </ul>
      </nav>
    </nav>
    <section class="span11" id="main-content">
      <h2 class="page-header hidden-phone">计算机网络作业</h2>
      <h4 class="page-header visible-phone">计算机网络作</h4>
      <section class="span7">
        <p>计算机网络作</p>
        <hr>
        <p> <strong>开始时间:</strong> 2014-02-12 5:36 AM </p>
        <p> <strong>到期时间:</strong> 2014-02-12  5:36 AM </p>
        <p> <strong>版本:</strong> 0 / 1 </p>
        <hr>
        <h4>附件:</h4>
        <p class="attachments"> </p>
        <div class="attach">
          <p> <i class="icon-file"></i> 文档: </p>
          <p> <a href="/schoolworks/415987/schoolwork_allows/867906/submissions" target="_blank">计算机网络路由</a> </p>
        </div>
        <p></p>
      </section>
      <aside class="span4">
        <h3 class="page-header"> Comments </h3>
        <form accept-charset="UTF-8" action="/schoolworks/415987/schoolwork_allows/867906/schoolwork_comments" class="new_schoolwork_comment" data-remote="true" id="new_schoolwork_comment" method="post">
          <div style="margin:0;padding:0;display:inline">
            <input name="utf8" type="hidden" value="✓">
            <input name="authenticity_token" type="hidden" value="gkqHOJ2fiAl9BWHnXKMAQyOyiufzIH41YSU2IwM8QSs=">
          </div>
          <div class="grading-submitcomment">
            <input name="assigned_user_id" type="hidden" value="2082114">
            <textarea maxlength="255" name="schoolwork_comment[comment]" placeholder="Type a comment…" style="width:100%;"></textarea>
            <p class="remainingCharacterNumber" style="color: #aaa; float: right;">255 characters remaining</p>
            <button class="btn btn-warning" disabled="">Comment</button>
          </div>
          <br>
          <div class="grading-comments">
            <ul class="posts unstyled">
            </ul>
          </div>
        </form>
      </aside>
    </section>
    <!--right body--> 
    
  </div>
</div>
<!--
</div>
	<div class="data_list">
  	<div class="data_list_title">
    	<span>友情链接</span>
    </div>
     <div class="margin_top10">
        <a href="#">玩转校园</a>  
        <a href="#"> 校园二手买卖</a> 
        <a href="#"> 校园达人</a> 
        <a href="#"> 华商街</a> 
        <a href="#"> 自游</a> 
        <a href="#"> 玩转校园</a>           	
     </div>
</div>
<!--footer--> 
<!--<div class="footer margin_top10">
	<div class="container">
    	<a href="#">帮助</a>
        <span>|</span>
        <a href="#">联系我</a>
        <span>|</span>
        <a href="#">关于作业本团队</a>
        <span>|</span>
        <span class="pull-right">
        	粤ICP备案111111111号
        </span>
    </div>
</div>
<!-- end footer-->

</body>
</html>