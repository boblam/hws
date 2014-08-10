/**
   * jpage for  jQuery
   *
   * @author Leo
   * @version 1.0 beta 4
   * @date 2008-04-23
   * @param config
   */
jQuery.fn.jpage = function(config){
  init("#"+this.attr("id"),config);
}

/**
   * init
   * @param t
   * @param config
   */
function init(t,config){
  //public prarm
  var dataStore = config.dataStore;	//data
  var totalRecord = config.totalRecord > 0 ? config.totalRecord : 0;	//total record
  var module = config.module == null? 'default':config.module;

  jQuery(t).css("line-height","20px");
  if(totalRecord == 0 && module != 'FEATURELESSON' && module != 'GROUPDETAILS'){
    var alertMsg = getAlertMessage(module);
    jQuery(t).css("text-align","center");
    jQuery(t).css("line-height","50px");
    jQuery(t).css("color","#DA0000");
    //jQuery(t).css("font","Arial");
    jQuery(t).css("font-size","12");
    jQuery(t).html(alertMsg);
    return;
  }else{
	  jQuery(t).css("color","#000");	  
  }
  var configPage = config.perPage > 0 ? config.perPage : 6;
  //var perPage = jQuery.cookie(t+"_perPage") == null ? configPage : parseInt(jQuery.cookie(t+"_perPage"));	//perpage record
  var perPage = config.perPage == null? 6 : config.perPage;
  var proxyUrl = config.proxyUrl == null ? 'error.url': config.proxyUrl ;	//data proxy url
  var groupSize = config.groupSize;	//group size
  var barPosition = config.barPosition == null ? 'bottom' : config.barPosition;	//bar position
  var ajaxParam = config.ajaxParam == null ? '' : config.ajaxParam;	//ajax param
  var showMode = config.showMode == null ? 'full' : config.showMode;	//show mode

  //private param
  var totalPage = Math.ceil(totalRecord/perPage);		//total page
  var currentPage = jQuery.cookie(t+"_currentPage") == null ? 1 : parseInt(jQuery.cookie(t+"_currentPage"));	//current page
    currentPage = jQuery.cookie(t+"_module") == module? currentPage : 1;
  currentPage = currentPage>=totalPage?totalPage:currentPage;
  currentPage = currentPage == 0? 1: currentPage;
  totalPage = totalPage == 0? 1: totalPage;
  var startRecord;	//start record
  var endRecord;	 	//end record
  var gpStartPage;	//group start page
  var gpEndPage;		//group end page
  var gpStartRecord = 1;	//group start record
  var gpEndRecord;	//group end record

  //data container
  var container = '<div class="pgContainer"></div>'
  //add toolbar
  var	toolbar = '';
  if(module == 'GROUPDETAILS'){
    toolbar += '<div style="margin-top:40px; margin-left:10px; width:680px; height:40px; ">';
    toolbar += '<div style="width:40px;float:left;">&nbsp;</div>';
    toolbar += '<div style="text-align:center;float:left;">';
    if(document.getElementById('isOwner').value != 'true'){
      toolbar += '<div style="width:10px;float:left;">&nbsp;</div>';
      toolbar += '<a class="bluelink" href="#" onclick="goQuitGroup(\''+document.getElementById('groupIdtt').value+'\')">opt out of this group</a>';
    }else{
      toolbar += '<div style="width:10px;float:left;">&nbsp;</div>';
      toolbar += '<div style="margin-left:110px;float:left;">&nbsp;</div>';
    }
    toolbar += '</div>';
    if(document.getElementById('showButton').value == 'true'){
      toolbar += '<div style="float:left;width:110px; margin-left:150px;">';
      toolbar += '<div class="buttonleft"></div>';
      toolbar += '<div class="buttonright"></div>';
      toolbar += '<div class="buttonmiddle"><a href="###" onclick="goPostToicPage(\''+document.getElementById('groupIdtt').value+'\')">Post a topic</a></div>';
    }else{
      toolbar += '<div style="float:left;width:100px;">';
    }
    toolbar += '</div>';
    
    toolbar += '<div style="width:25px;float:right;">&nbsp;</div>';
  }else if(module == 'TOPICVIEW'){
    container = '<div class="pgTopicContainer"></div>';
    toolbar += '<div style="margin-top:10px;">';
    toolbar += '<div style="width:14px;float:right;">&nbsp;</div>';
    toolbar += '<div style="float:right;width:150px;">';
    toolbar += '<div><img style="cursor: pointer;" align="absmiddle" src="'+ctx+'/images/module/group/comment_list_post_comment.png" onclick = "goInputComment(\''+ document.getElementById('groupIdtt').value +'\',\''+ document.getElementById('topicIdtt').value +'\')"></div>';
    toolbar += '</div>';
    toolbar += '<div style="width:25px;float:right;">&nbsp;</div>';
  }

  if(module == 'TOPICVIEW')
    toolbar += '<div id="pgToolbar" class="pgTopicToolbar">';
  else if( module == 'GROUPFEATUREDLESSONS' || module=='GROUPSEARCH' || module== 'LESSONSINGROUP' ){
	toolbar += '<div id="pgToolbar" class="pgGroupToolbar">';
  }else
    toolbar += '<div id="pgToolbar" class="pgToolbar">';
  
  toolbar += refreshToolbar();
  toolbar += '</div>';
  toolbar += '<div style="clear:both;"></div>';
  toolbar += '<div style="height:10px;"></div>';
  if(perPage<totalRecord)
    switch(barPosition){
      case 'top':
        jQuery(t).html(toolbar+container);
        break;
      case 'bottom':
        jQuery(t).html(container+toolbar);
        break;
      default:
        jQuery(t).html(toolbar+container+toolbar);
    }
  else
    jQuery(t).html(container+toolbar);

  if(module == 'FEATURELESSON'){
    //data container
    container = '<div class="pgTopContainer"></div>';

    var toolbartop = '<div align="left" style="width:100%;">';

    toolbartop += '<div style=" height:132px; width:100%; background: url('+ctx+'/images/module/group/body_8.gif)">';
      //toolbartop += '<div style="margin-left:20px; margin-right:50px;height:132px;">';
      toolbartop += '<div style="margin-left:20px;height:132px;">';
      toolbartop += '<div class="pgBtn pgPrev" style="float:left;margin-top:34px;margin-right:10px;"><img align="absmiddle" src="'+ctx+'/images/module/group/arrow_left.gif"></div>';
      toolbartop += '<div style="float:right;width:20px;">&nbsp;</div>'
      toolbartop += '<div class="pgBtn pgNext" style="float:right;margin-top:34px;"><img align="absmiddle" src="'+ctx+'/images/module/group/arrow_right.gif"></div>';

      toolbartop += container;

      toolbartop += '<div style="clear:both;"></div>';
      toolbartop += '</div>';
      toolbartop += '</div>';

    //add toolbar
    toolbar = toolbartop;
    jQuery(t).html(toolbar);
  }

  var btnRefresh = jQuery(t+" .pgRefresh");	//refresh button
  var btnNext =jQuery(t+" .pgNext");			//next button
  var btnPrev = jQuery(t+" .pgPrev");			//previous button
  var btnFirst = jQuery(t+" .pgFirst");		//first button
  var btnLast = jQuery(t+" .pgLast");			//last button
  var btnGo = jQuery(t+" .pgNext,"+t+" .pgLast");
  var btnBack = jQuery(t+" .pgPrev,"+t+" .pgFirst");
  var btn = jQuery(t+" .pgFirst,"+t+" .pgPrev,"+t+" .pgNext,"+t+" .pgLast");
  var mask;

  var valCurrentPage = jQuery(t+" .pgCurrentPage");
  var valStartRecord = jQuery(t+" .pgStartRecord");
  var valEndRecord =jQuery(t+" .pgEndRecord");
  var valContainer = jQuery(t+" .pgContainer");
  if(module == 'FEATURELESSON')
    valContainer = jQuery(t+" .pgTopContainer");
  else if(module == 'TOPICVIEW')
    valContainer = jQuery(t+" .pgTopicContainer");
  var valPerPage = jQuery(t+" .pgPerPage");
  var valTotalPage = jQuery(t+" .pgTotalPage");

  jQuery(t+" .pgPerPage").attr("value",perPage);
  getGroupStartEnd();
  getStartEnd();
  if(dataStore==null)
    getRemoteData();
  else{
    getStartEnd();
    loadData();
    refreshpage();
  }

  //refresh button listioner
  btnRefresh.bind("mousedown",pressHandler).bind("mouseup",unpressHandler).bind("mouseout",unpressHandler);

  //refresh toolbar
  refreshpage();

  //button listioner
  btnNext.click(
    function(){
      if(currentPage < totalPage){
        if(!dataStore || currentPage == gpEndPage){
          currentPage += 1;
          getGroupStartEnd();
          getStartEnd();
          getRemoteData();

          refreshpage();
          init(t,config);
        }else{
          currentPage += 1;
          getStartEnd();
          loadData();
          refreshpage();
          init(t,config);
        }
      }
    }
  );
  btnPrev.click(
    function(){
      if(currentPage > 1){
        if(!dataStore || currentPage == gpStartPage){
          currentPage -= 1;
          getGroupStartEnd();
          getStartEnd();
          getRemoteData();

          refreshpage();
          init(t,config);
        }else{
          currentPage -= 1;
          getStartEnd();
          loadData();
          refreshpage();
          init(t,config);
        }
      }
    }
  );
  btnFirst.click(
    function(){
      if(!dataStore || currentPage > 1){
        if(gpStartPage > 1){
          currentPage = 1;
          getGroupStartEnd();
          getStartEnd();
          getRemoteData();

          refreshpage();
          init(t,config);
        }else{
          currentPage = 1;
          getStartEnd();
          loadData();
          refreshpage();
          init(t,config);
        }
      }
    }
  );
  btnLast.click(
    function(){
      if(!dataStore || currentPage < totalPage){
        if(gpEndPage > 0 && gpEndPage < totalPage){
          currentPage = totalPage;
          getGroupStartEnd();
          getStartEnd();
          getRemoteData();

          refreshpage();
          init(t,config);
        }else{
          currentPage = totalPage;
          getStartEnd();
          loadData();
          refreshpage();
          init(t,config);
        }
      }
    }
  );
  btnRefresh.click(
    function(){
      getGroupStartEnd();
      getStartEnd();
      getRemoteData();
    }
  );

  //input box listioner
  valCurrentPage.keydown(
    function(){
      var targetPage = parseInt(jQuery(this).val());
      if(event.keyCode==13 && targetPage>=1 && targetPage<=totalPage){
        if(!dataStore || gpStartPage > targetPage || (gpEndPage > 0 && gpEndPage < targetPage)){
          currentPage = targetPage;
          getGroupStartEnd();
          getStartEnd();
          getRemoteData();
        }else{
          currentPage = targetPage;
          getStartEnd();
          loadData();
          refreshpage();
        }
      }
    }
  );

  valPerPage.change(
    function(){
      perPage = parseInt(jQuery(this).val());
      currentPage = 1;
      totalPage = Math.ceil(totalRecord/perPage);
      if(groupSize){
        getGroupStartEnd();
        getStartEnd();
        getRemoteData();
      }else{
        getStartEnd();
        loadData();
        refreshpage();
      }
    }
  );

  /*********************************init private method***************************************************/
  /**
    * set searching
    */
  function startLoad(){
    jQuery(t).addClass("container");
    mask = document.createElement('div');
    jQuery(mask).addClass("mask");
    jQuery(mask).css("height",jQuery(t).height());
    jQuery(t).append(mask);
    jQuery(t+" .pgRefresh").addClass("pgLoad");
    jQuery(t+" .pgSearchInfo").html("searching, please wait...");
  }

  /**
    * set end search
    */
  function overLoad(){
    jQuery(t+" .pgRefresh").removeClass("pgLoad");
    jQuery(t+" .pgSearchInfo").html('');
    jQuery(mask).remove();
    //jQuery(mask).fadeOut("slow");
  }

  /**
    * get remote data
    */
  function getRemoteData(){
    startLoad();
    jQuery.ajax(
      {
        type: "POST",
        url: proxyUrl+"&currentPage="+currentPage+"&perPage="+perPage,
        cache: false,
        data: ajaxParam,
        dataType: "script",
        timeout: 30000,
        success: function(msg){
          eval(msg);
          getStartEnd();
          loadData();
          refreshpage();
          overLoad();
        },
        error: function(XMLHttpRequest, textStatus, thrownError){
//          alert(XMLHttpRequest.status);
//          alert(XMLHttpRequest.statusText);
//          alert("error, please try again later.responseText:["+XMLHttpRequest.responseText+"]  url:["+url+"]");
          overLoad();
          return;
        }
      }
    );
  }

  function loginFail(transport) {
      alert(transport.responseText);
    }


  /**
    * get current page start and end record
    */
  function getStartEnd(){
    if(groupSize){
      startRecord = (currentPage-1)*perPage+1 - gpStartRecord + 1;
      endRecord = Math.min(currentPage*perPage,totalRecord) - gpStartRecord + 1;
    }else{
      startRecord = (currentPage-1)*perPage+1;
      endRecord = Math.min(currentPage*perPage,totalRecord);
    }
  }

  /**
    * get current group start and end record
    */
  function getGroupStartEnd(){
    if(groupSize==null)
      return;
    var groupId = Math.ceil(currentPage/groupSize);
    gpStartPage = (groupId-1)*groupSize+1;
    gpEndPage = Math.min(groupId*groupSize,totalPage);
    gpStartRecord = (gpStartPage-1)*perPage+1;
    gpEndRecord = Math.min(gpEndPage*perPage,totalRecord);
  }

  /**
    * refresh data container
    */
  function loadData(){
    var view;
    if(module == 'default')
      view = '';
    else if(module == 'TOPICVIEW')
      view = loadCommentList();
    else if(module == 'GROUPDETAILS')
      view = loadTopicList();
    else if(module == 'SEARCHLESSON')
      view = loadSearchedLessons(startRecord,endRecord,currentPage,perPage);
    else if(module == 'GROUPSEARCH'){
        view = loadGroupSearchResult(startRecord,endRecord);
    }
    else if (module == 'GROUPFEATUREDLESSONS')
      view = LoadGroupFeaturedLessons( startRecord, endRecord);
    else if (module == 'LESSONSINGROUP')
      view = LoadAllLessonsInGroup(startRecord,endRecord);
    else if(module == 'PENDINGMEMBER')
      view = loadPendingMember(proxyUrl,totalRecord,startRecord,endRecord);
    else if(module == 'JOINEDMEMBER')
      view = loadJoinedMember(proxyUrl,totalRecord,startRecord,endRecord);
    else if(module == 'UNSUBSCRIBEDMEMBER')
      view = loadUnsubscribedMember(proxyUrl,totalRecord,startRecord,endRecord);
    else if(module == 'EXPIREDMEMBER')
        view = loadExpiredMember(proxyUrl,totalRecord,startRecord,endRecord);
    else if(module == 'FEATURELESSON')
      view = loadFeatureLesson(startRecord,endRecord);
    valContainer.html(view);
  }

  /**
    * refresh toolbar status
    */
  function refreshpage(){
    //set current page into cookie
    jQuery.cookie(t+'_currentPage', currentPage);
//    jQuery.cookie(t+'_perPage', perPage);
    jQuery.cookie(t+'_module', module);

    valCurrentPage.val(currentPage);
    valStartRecord.html(startRecord);
    valEndRecord.html(endRecord);
    valTotalPage.html(totalPage);

    btn.unbind("mousedown",pressHandler);
    btn.bind("mouseup",unpressHandler);
    btn.bind("mouseout",unpressHandler);
    if(currentPage == totalPage && currentPage == 1){                
        btnNext.addClass("pgNextDisabled");
        btnLast.addClass("pgLastDisabled");
        btnPrev.addClass("pgPrevDisabled");
        btnFirst.addClass("pgFirstDisabled");
      }else if(currentPage == totalPage){
      enablecss();
      btnBack.bind("mousedown",pressHandler);
      btnNext.addClass("pgNextDisabled");
      btnLast.addClass("pgLastDisabled");

    }else if(currentPage == 1){ 
      enablecss();
      btnGo.bind("mousedown",pressHandler);
      btnPrev.addClass("pgPrevDisabled");
      btnFirst.addClass("pgFirstDisabled");
    }else{
      enablecss();
      btnBack.bind("mousedown",pressHandler);
      btnGo.bind("mousedown",pressHandler);
      btnNext.addClass("pgNext");
      btnPrev.addClass("pgPrev");
      btnFirst.addClass("pgFirst");
      btnLast.addClass("pgLast");
    }
  }

  /**
    * remove disabled status
    */
  function enablecss(){
      btnNext.removeClass("pgNextDisabled");
      btnPrev.removeClass("pgPrevDisabled");
      btnFirst.removeClass("pgFirstDisabled");
      btnLast.removeClass("pgLastDisabled");

  }

  /**
    * add button pressed status
    */
  function pressHandler(){
    jQuery(this).addClass("pgPress");
  }

  /**
    * remove button pressed status
    */
  function unpressHandler(){
    jQuery(this).removeClass("pgPress");
  }

  function refreshToolbar(){
    var retText='';
    retText += '<div class="pgPanel">';


    if(currentPage == 1)
      retText += '<div class="pgBtn pgPrevDisabled" style="text-decoration:underline;">Previous</div>';
    else
      retText += '<div class="pgBtn pgPrev" style="text-decoration:underline;">Previous</div>';

    retText += '<div class="separator"></div>';
    if(totalPage < 0){
    }else{
      if(currentPage == 1)
        retText += '<div class="pgCurrentPage">&nbsp;<span class="linkborder">1</span>&nbsp;</div>';
      else
        retText += '<div class="pgBtn pgFirst">&nbsp;1&nbsp;</div>';

      if(currentPage - 1 == 2){
        retText += '<div class="pgBtn pgPrev">&nbsp;' + (currentPage - 1) + '&nbsp;</div>';
      }else if(currentPage - 1 > 2){
        retText += '<div>...</div>';
        retText += '<div class="pgBtn pgPrev">&nbsp;' + (currentPage - 1) + '&nbsp;</div>';
      }

      if(currentPage > 1 && currentPage < totalPage)
        retText += '<div class="pgCurrentPage">&nbsp;<span class="linkborder">' + currentPage + '</span>&nbsp;</div>';

      if(currentPage + 1 == totalPage - 1){
        retText += '<div class="pgBtn pgNext">&nbsp;' + (currentPage + 1) + '&nbsp;</div>';
      }else if(currentPage + 1 < totalPage - 1){
        retText += '<div class="pgBtn pgNext">&nbsp;' + (currentPage + 1) + '&nbsp;</div>';
        retText += '<div>...</div>';
      }
      if(totalPage != 1){
        if(currentPage == totalPage)
          retText += '<div class="pgCurrentPage">&nbsp;<span class="linkborder">' + totalPage + '</span>&nbsp;</div>';
        else
          retText += '<div class="pgBtn pgLast">&nbsp;' + totalPage + '&nbsp;</div>';
        }
      }

    retText += '<div class="separator"></div>';
    retText += '<div class="pgBtn pgNext" style="text-decoration:underline;">Next</div>';
    retText += '<hr class="cleanFloat" /></div>';
    return retText;
  }

  function loadCommentList(){  
  }


  function loadTopicList(){
    document.getElementById('pageStatus').innerHTML = currentPage + ' of ' + totalPage;
    var recordCount=1;
    var vTopic = '';
    view = '';
    if(totalRecord == 0)
      return '<div>&nbsp;</div><div class="topiclistdiva"> <span>No topics available.</span></div>';

    view += '<div class="topiclistdivb">';
    for(var i=startRecord-1;i<=endRecord-1;i++){
    var field_ = dataStore[i];
    view += '<div class="topiclistdivc">';
    view += '<div class="topicdescriptiondivb" >'+recordCount+'.&nbsp;&nbsp;</div>';
    view += '<div class="topiclistblackwordsa" >';
    //view += '<span>'+recordCount+'.&nbsp;&nbsp;</span>';
    vTopic = field_[0];
    if(field_[0].length>50){
      vTopic = splitWords(field_[0],50)+"...";
    }
    view += '<span><a class="bluelink" title="'+field_[0]+'" href="###" onclick="gotoViewTopicPage(\''+field_[6]+'\',\''+field_[2]+'\')">'+vTopic + '</a>';
    view += '</span>';
    view += '</div>';
    if(field_[8]==field_[9]){
      view += '<div class="topiclistdivd" >';
      view += '<a class="bluelink" href="###" onclick="goEditTopicPage(\''+field_[6]+'\',\''+field_[2]+'\')">Edit</a>';
      view += '</div>';
    }
    else{
      view += '<div class="topiclistdivd" >';
      view += '&nbsp;';
      view += '</div>';
    }

    if(field_[4]=="Y"){
      view += '<div class="topiclistdive" >';
      view += '<a class="bluelink" href="###" onclick="goDeleteTopicPage(\''+field_[6]+'\',\''+field_[2]+'\')">Delete</a>';
      view += '</div>';
    }
    else{
      view += '<div class="topiclistdive" >';
      view += '&nbsp;';
      view += '</div>';
    }

    if(field_[4]!="Y" && field_[8]!=field_[9]){
      view += '<div class="topiclistblackwordsbtime"  >';
    }
    else if(field_[4]!="Y" || field_[8]!=field_[9]){
      view += '<div class="topiclistblackwordsbtime" >';
    }else{
      view += '<div class="topiclistblackwordsbtime">';
    }

    view += field_[1];

    view += '</div>';
    view += '<div class="topiclistdivf" >';

    
    view += '</div>';
    view += '<div class="topicdescriptiondivc"></div>';
    view += '</div>';
    view += '<div class="topiclistdivg">';
    view += '<img align="absmiddle" width="100%" src="'+ctx+'/images/module/group/grid_line.gif">';
    view += '</div>';
    recordCount++
    }
    view += '</div>';

    return view;

  }

  function loadFeatureLesson(startRecord,endRecord){
    document.getElementById('topPageStatus').innerHTML = currentPage + ' of ' + totalPage;
    view = '';
    if(totalRecord == 0)
      return '<div style="color:#DA0000; font:Arial; font-size:12; text-align:center;height:100px;line-height:100px">There are no Lessons available in this group.</div>';
    for(var i=startRecord-1;i<=endRecord-1;i++){
    	//alert(field_[1]);
      var field_ = dataStore[i];
      view += '<div style="width:18%;float:left;*margin-left:4px;">';
      view += '<div style="height:75px;padding-top:10px;margin-left:-5px">';
     // view += '<div style="float:left;width:5px;">&nbsp;</div>';
      view += '<div class="box_noBorder"><div><span><img onload="ShowImage(this,115,75);" style="height:75px;cursor:pointer;width:115px" src="'+field_[0]+'" onClick="viewLesson(\''+ field_[8] +'\')"></span></div></div>';
      //view += '<div style="clear:both;"></div>';
      view += '</div>';
      view += '<div title="'+field_[1]+'" style="height:25px;text-align:left;margin-left:12px;margin-top:5px;*margin-top:9px;*line-height:90%;">'; 
      view += '<a class="smallbluelink" style="line-height:120%;"  onClick="viewLesson(\''+ field_[8] +'\')">'+noscript(splitWords(field_[1],20))+'</a>'; 
      view += '</div>';
      view += '</div>';
      view += '<div style="width:5px;float:left;"></div>'
    }
    view += '<div style="clear:both;"></div>';
    return view;
  }
  
  function getAlertMessage(module){
	  
    if(module == "" || module == null){
      return "No records to display.";
    }
    if(module=='GROUPFEATUREDLESSONS'){
      return "There are no Featured Lessons posted in this Group.";
    }
    if(module=='GROUPSEARCH'){
      return "No records to display.";
    }
    if(module=='LESSONSINGROUP'){
      return "There are no Lessons posted in this Group.";
    }
    if(module=='JOINEDMEMBER'){
      return "There are no members at the moment.";
    }
    if(module=='PENDINGMEMBER'){
      return "There are no pending members at the moment.";
    }
    if(module=='UNSUBSCRIBEDMEMBER'){
      return "There are no unsubscribed members at the moment.";
    }
    if(module=='TOPICVIEW'){
      return "No comments available.";
    }
    
    if(module=='EXPIREDMEMBER'){
    	return "There are no expired members at the moment.";
    }

    return "No records to display.";
  }
}