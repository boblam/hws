<%@page contentType="text/html; charset=UTF-8" isELIgnored="false"%>
<%@ taglib uri="/WEB-INF/tld/c.tld" prefix="c"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
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
      <div class="span2 logo"> <a href="#" title="最代码网站"><img src="/resource/img/logo.png" alt="logo">作业本</a> </div>
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
      <div class="span2 user"> <a href="login.html" rel="nofollow">登录</a>&nbsp;&nbsp; <a href="javascript:create()" rel="nofollow">注册</a> </div>
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
          <!--<li> <a href='/activity'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>活动</span> </div>
            </a> </li>
          <li> <a href='/activity'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>活动</span> </div>
            </a> </li>
          <li> <a href='/conversations'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>消息</span> </div>
            </a> </li>-->
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
      <form accept-charset="UTF-8" action="/users/2082241" class="form-horizontal" enctype="multipart/form-data" id="edit_user_2082241" method="post">
        <div style="margin:0;padding:0;display:inline">
          <input name="utf8" type="hidden" value="✓">
          <input name="_method" type="hidden" value="put">
          <input name="authenticity_token" type="hidden" value="CTYowTDfcJnPSS1IznTxmVZBm/AIoSU4z1yc2fuq+Xg=">
        </div>
        <div class="control-group">
          <label class="control-label" for="user_first_name">班级名称</label>
          <div class="controls">
            <input class="short" disabled="disabled" id="user_first_name" name="user[first_name]" size="30" type="text" value="09信管2班">
          </div>
        </div>
        <!--课程名称-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">课程名称</label>
          <div class="controls">
            <input class="short" disabled="disabled" id="user_last_name" name="user[last_name]" size="30" type="text" value="计算机网络">
          </div>
        </div>
        <!--end-课程名称-->
         <!--作业名称-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">作业名称</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-作业名称-->
         <!--作业描述-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">作业描述</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-作业描述-->
         <!--布置日期-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">布置日期</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-布置日期-->
         <!--到期日期-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">到期日期</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-到期日期-->
         <!--是否开启-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">是否开启</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-是否开启-->
         <!--上传附件-->
        <div class="control-group">
          <label class="control-label" for="user_last_name">上传附件</label>
          <div class="controls">
            <input class="short"  id="user_last_name" name="user[last_name]" size="30" type="text" value="">
          </div>
        </div>
        <!--end-上传附件-->
       
       
        <div class="form-actions">
          <input class="btn btn-primary" data-disable-with="Saving" disabled="disabled" name="commit" type="submit" value="保存发布">
        </div>
      </form>
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