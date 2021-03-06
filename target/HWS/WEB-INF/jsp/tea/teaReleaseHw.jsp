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
      <div class="span2 logo"> <a href="http://www.zuidaima.com/" title="最代码网站"><img src="/resource/img/logo.png" alt="logo" />作业本</a> </div>
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
          <input type="text" id="search" placeholder="搜索您要的作业..." value="搜索您要的作业..." />
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
      <nav class='tabbable tabs-left hidden-phone' id='tabnav'>
        <ul class='nav nav-tabs'>
          <!--<li> <a href='/activity'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>活动</span> </div>
            </a> </li>
          <li> <a href='/activity'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>活动</span> </div>
            </a> </li>
          <li> <a href='/conversations'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>消息</span> </div>
            </a> </li>-->
          <li class='active'> <a href='/schoolworks'>
            <div class='iconnav'> <img alt='My Big Campus' src='./images/schoolwork.png'> <span>发布作业</span> </div>
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
    <!--right body-->
    <section class="span11 " id="main-content">
      <h6> 作业本>>作业管理 </h6>
      <div class='form-search form-topbar pull-right hidden-phone' id='search-bar'>
        <input class='search-query input-medium' placeholder='Search' type='text' value=''>
      </div>
      <div class='form-search form-topbar pull-right visible-phone'>
        <form accept-charset="UTF-8" action="/schoolworks/assigned" method="get">
          <div style="margin:0;padding:0;display:inline">
            <input name="utf8" type="hidden" value="&#x2713;" />
          </div>
          <input class="search-query input-small" id="assigned-search" name="s" placeholder="Search" type="text" />
        </form>
      </div>
      <h2 class='page-header hidden-phone'> 作业管理 </h2>
      <h4 class='page-header visible-phone'> 作业管理 </h4>
      <section class='span9'>
        <form class='form-inline span6' id='filter' method='get'>
          <label>提交情况:</label>
          <select name='filters' onchange='performSchoolworkSearch();'>
            <option selected value=''> 全部 </option>
            <option value='need_to_submit'> 需要提交</option>
            <option value='missed'> 已提交 </option>
            <option value='graded'> </option>
          </select>
        </form>
        <form class='form-inline span6' id='group-filter' method='get'>
          <label>科目:</label>
          <select name='filters' onchange='performSchoolworkSearch();'>
            <option value='all'>全部</option>
            <option value='5276'>英语组</option>
            <option value='353268'>高级写作</option>
            <option value='261080'>高级写作</option>
            <option value='297498'>高级写作 </option>
            <option value='559919'>高级写作</option>
          </select>
        </form>
      </section>
      <!--section span9--> 
      <!--table body-->
      <div class="span9">
        <div id="your-kids-schoolwork">
          <div class="list-tables">
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <th class="name">名称</th>
                  <th class="due">到期时间</th>
                  <th class="status">状态</th>
                  <th class="grade">年级</th>
                  <th class="type">类型</th>
                   <th class="type">操作</th>
                </tr>
                <tr>
                  <td><a href="/schoolworks/394199/schoolwork_allows/816279/submissions">计算机</a> <br>
                    <span style="color:#999"> 计算机网络 </span></td>
                  <td class="due">2012-10-10 (已过期)</td>
                  <td>已提交</td>
                  <td></td>
                  <td>电子版</td>
                  <td>发布作业</td>
                   <td>修改</td>
                </tr>
                <tr>
                  <td><a href="/schoolworks/394199/schoolwork_allows/816279/submissions">计算机</a> <br>
                    <span style="color:#999"> c语言 </span></td>
                  <td class="due">2012-10-10 (已过期)</td>
                  <td>已提交</td>
                  <td></td>
                  <td>电子版</td>
                </tr>
                <tr>
                  <td><a href="/schoolworks/394199/schoolwork_allows/816279/submissions">计算机</a> <br>
                    <span style="color:#999"> 操作系统</span></td>
                  <td class="due">2012-10-10 (已过期)</td>
                  <td>已提交</td>
                  <td></td>
                  <td>电子版</td>
                </tr>
               
                
              </tbody>
            </table>
          </div>
          <div class="pagination-centered">
            <div class="pagination">
              <ul>
                <li class="page active"> <a href="/schoolworks">1</a> </li>
                <li class="page"> <a href="/schoolworks?page=2" rel="next">2</a> </li>
                <li class="page"> <a href="/schoolworks?page=3">3</a> </li>
                <li class="page"> <a href="/schoolworks?page=4">4</a> </li>
                <li class="page"> <a href="/schoolworks?page=5">5</a> </li>
                <li class="next_page"> <a href="/schoolworks?page=2" rel="next">Next ›</a> </li>
                <li class="last next"> <a href="/schoolworks?page=5">Last »</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--作业提醒通知-->
      <aside class="span2">
        <h3 class="page-header">今天：</h3>
        <div class="alert-box alert-info"> 今天没有需要提交的作业 </div>
        <h3 class="page-header">本周：</h3>
        <div class="alert-box alert-info">本周没有需要提交的作业 </div>
      </aside>
    </section>
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