$.extend({
 //创建 iframe 元素,接受提交及响应
 createUploadIframe: function(id, uri) {
  //create frame
  var frameId = 'jUploadFrame' + id;


  if (window.ActiveXObject) {
   //fix ie9 and ie 10-------------
   if ($.browser.version == "9.0" || $.browser.version == "10.0") {
    var io = document.createElement('iframe');
    io.id = frameId;
    io.name = frameId;
   } else if ($.browser.version == "6.0" || $.browser.version == "7.0" || $.browser.version == "8.0") {
    var io = document.createElement('<iframe id="' + frameId + '" name="' + frameId + '" />');
    if (typeof uri == 'boolean') {
     io.src = 'javascript:false';
    } else if (typeof uri == 'string') {
     io.src = uri;
    }
   }
  } else {
   var io = document.createElement('iframe');
   io.id = frameId;
   io.name = frameId;
  }
  io.style.position = 'absolute';
  io.style.top = '-1000px';
  io.style.left = '-1000px';


  document.body.appendChild(io);


  return io;
 },
 //创建 from 元素，用于提交的表单
 createUploadForm: function(id, fileElementId, postData) {
  //create form<span style="white-space:pre">	</span>
  var formId = 'jUploadForm' + id;
  var fileId = 'jUploadFile' + id;
  var form = $('<form action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
  var oldElement = $('#' + fileElementId);
  var newElement = $(oldElement).clone();


  $(oldElement).attr('id', fileId);
  $(oldElement).before(newElement);
  $(oldElement).appendTo(form);
  //添加自定义参数
  if (postData) {
   //递归遍历JSON所有键值


   function recurJson(json) {
    for (var i in json) {
     //alert(i+"="+json[i])
     $("<input name='" + i + "' id='" + i + "' value='" + json[i] + "' />").appendTo(form);
     if (typeof json[i] == "object") {
      recurJson(json[i]);
     }
    }
   }


   recurJson(postData);
  }
  //set attributes
  $(form).css('position', 'absolute');
  $(form).css('top', '-1200px');
  $(form).css('left', '-1200px');
  $(form).appendTo('body');
  return form;
 },
 //上传文件
 //s 参数：json对象
 ajaxFileUpload: function(s) {
  s = $.extend({fileFilter:"",fileSize:0}, $.ajaxSettings, s);
  //文件筛选
  var fielName = $('#' + s.fileElementId).val();
  var extention = fielName.substring(fielName.lastIndexOf(".") + 1).toLowerCase();
  if (s.fileFilter && s.fileFilter.indexOf(extention) < 0) {
   alert("仅支持 (" + s.fileFilter + ") 为后缀名的文件!");
   return;
  }
  //文件大小限制
  if (s.fileSize > 0) {
   var fs = 0;
   try {
    if (window.ActiveXObject) {
     //IE浏览器
     var image = new Image();
     image.dynsrc = fielName;
     fs = image.fileSize;
    } else {
     fs = $('#' + s.fileElementId)[0].files[0].size;
    }
   } catch(e) {
   }
   if (fs > s.fileSize) {
    alert("当前文件大小 (" + fs + ") 超过允许的限制值 (" + s.fileSize +")！");
    return;
   }
  }
  var id = new Date().getTime();
  //创建 form 表单元素
  var form = $.createUploadForm(id, s.fileElementId, s.data);
  //创建 iframe 贞元素
  var io = $.createUploadIframe(id, s.secureuri);
  var frameId = 'jUploadFrame' + id;
  var formId = 'jUploadForm' + id;
  //监测是否有新的请求
  if (s.global && !$.active++) {
   $.event.trigger("ajaxStart"); //触发 AJAX 请求开始时执行函数。Ajax 事件。
  }
  var requestDone = false;
  //创建请求对象
  var xml = {};
  if (s.global)
   $.event.trigger("ajaxSend", [xml, s]); //触发 AJAX 请求发送前事件
  //上载完成的回调函数
  var uploadCallback = function(isTimeout) {
   var io = document.getElementById(frameId);
   try {
    //存在跨域脚本访问问题，如遇到‘无法访问’提示则需要在响应流中加一段脚块：<script ...>document.domain = 'xxx.com';</script>
    if (io.contentWindow) { //兼容各个浏览器，可取得子窗口的 window 对象
     xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
     xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document;


    } else if (io.contentDocument) { //contentDocument Firefox 支持，> ie8 的ie支持。可取得子窗口的 document 对象。
     xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
     xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document;
    }
   } catch(e) {
    $.handleErrorExt(s, xml, null, e);
   }
   if (xml || isTimeout == "timeout") {
    requestDone = true;
    var status;
    try {
     status = isTimeout != "timeout" ? "success" : "error";
     // Make sure that the request was successful or notmodified
     if (status != "error") {
      //处理数据（运行XML通过httpData不管回调）
      var data = $.uploadHttpData(xml, s.dataType);
      // If a local callback was specified, fire it and pass it the data
      if (s.success)
       s.success(data, status);


      // Fire the global callback
      if (s.global)
       $.event.trigger("ajaxSuccess", [xml, s]);
     } else
      $.handleErrorExt(s, xml, status);
    } catch(e) {
     status = "error";
     $.handleErrorExt(s, xml, status, e);
    }


    // The request was completed
    if (s.global)
     $.event.trigger("ajaxComplete", [xml, s]);


    // Handle the global AJAX counter
    if (s.global && !--$.active)
     $.event.trigger("ajaxStop");


    // Process result
    if (s.complete)
     s.complete(xml, status);


    $(io).unbind();


    setTimeout(function() {
     try {
      $(io).remove();
      $(form).remove();
     } catch(e) {
      $.handleErrorExt(s, xml, null, e);
     }


    }, 100);


    xml = null;


   }
  };
  //超时检查，s.timeout 毫秒后调用 uploadCallback 回调函数提示请求超时
  if (s.timeout > 0) {
   setTimeout(function() {
    // Check to see if the request is still happening
    if (!requestDone) uploadCallback("timeout");
   }, s.timeout);
  }
  try {
   //设置动态 form 表单的提交参数
   // var io = $('#' + frameId);
   var form = $('#' + formId);
   $(form).attr('action', s.url);
   $(form).attr('method', 'POST');
   $(form).attr('target', frameId);
   if (form.encoding) {
    form.encoding = 'multipart/form-data';
   } else {
    form.enctype = 'multipart/form-data';
   }
   $(form).submit();


  } catch(e) {
   $.handleErrorExt(s, xml, null, e);
  }
  //向动态表单的页面加载事件中注册回调函数
  if (window.attachEvent) {
   document.getElementById(frameId).attachEvent('onload', uploadCallback);
  } else {
   document.getElementById(frameId).addEventListener('load', uploadCallback, false);
  }
  return {
   abort: function() {
   }
  };


 },
 //上传文件
 uploadHttpData: function(r, type) {
  //alert("type=" + type + ";uploadHttpData" + JSON.stringify(r))
  var data = !type;
  data = type == "xml" || data ? r.responseXML : r.responseText;
  // If the type is "script", eval it in global context
  if (type == "script")
   $.globalEval(data);
  // Get the JavaScript object, if JSON is used.
  if (type == "json"){
      data = r.responseText;   
      var start = data.indexOf(">");   
      if(start != -1) {   
        var end = data.indexOf("<", start + 1);   
        if(end != -1) {   
          data = data.substring(start + 1, end);   
         }   
      }   
      eval( "data = " + data);   
  }
  // eval("data = " + data);
  // evaluate scripts within html
  if (type == "html")
   $("<div>").html(data).evalScripts();
  //alert($('param', data).each(function(){alert($(this).attr('value'));}));
  return data;
 },
 handleErrorExt: function(s, xhr, status, e) {
  // If a local callback was specified, fire it
  if (s.error) {
   s.error.call(s.context || s, xhr, status, e);
  }


  // Fire the global callback
  if (s.global) {
   (s.context ? $(s.context) : $.event).trigger("ajaxError", [xhr, s, e]);
  }
 }
});

