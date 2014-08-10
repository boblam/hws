/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) { 
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc';
	config.skin = 'moono';
    config.language = 'en';
	config.height=330; 
	/*
	var toolsAll=$.i18n.prop("config.document");
	toolsAll+=$.i18n.prop("config.clipboard");
	toolsAll+=$.i18n.prop("config.editing");
    toolsAll+=$.i18n.prop("config.forms");
	toolsAll+=$.i18n.prop("config.basicstyles");
	toolsAll+=$.i18n.prop("config.insert");
	toolsAll+=$.i18n.prop("config.tools");
	config.toolbar  =eval('([' + toolsAll + '])');
	*/
	config.toolbarCanCollapse = true;
	config.toolbar = 'Full';
	config.toolbar_Full =
		[
		    ['Source','Bold','Italic','Underline','Outdent','Indent','Blockquote',
		     'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','Format','Font','FontSize','TextColor','BGColor','Image'],
		    
		    '/',
		    ['Strike','-', 
		     'NumberedList','BulletedList','-',
		      
		     'Link','Unlink','Anchor',
		      'Flash','Table','HorizontalRule','SpecialChar','PageBreak',
		     'Maximize', 'ShowBlocks'],
		    
		];

	
	config.allowedContent =true; 
	//config.contentsCss = 'contents.css';
	//config.contentsCss = ['/css/mysitestyles.css', '/css/anotherfile.css'];
	//config.forcePasteAsPlainText =true;
	config.toolbar = 'Full';
	
/*	//config.filebrowserUploadUrl="fileupload";
	var pathName = window.document.location.pathname;
	    //获取带"/"的项目名，如：/uimcardprj
	    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	    config.filebrowserImageUploadUrl = projectName+'/fileupload.do'; //固定路径
*/};
