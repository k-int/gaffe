define(["modules/widgets/module","lodash"],function(a,b){"use strict";a.registerDirective("widgetGrid",["$rootScope","$compile","$q","$state","$timeout",function(a,c,d,e,f){var g,h,i,j={grid:"article",widgets:".jarviswidget",localStorage:!0,deleteSettingsKey:"#deletesettingskey-options",settingsKeyLabel:"Reset settings?",deletePositionKey:"#deletepositionkey-options",positionKeyLabel:"Reset position?",sortable:!0,buttonsHidden:!1,toggleButton:!0,toggleClass:"fa fa-minus | fa fa-plus",toggleSpeed:200,onToggle:function(){},deleteButton:!0,deleteMsg:"Warning: This action cannot be undone!",deleteClass:"fa fa-times",deleteSpeed:200,onDelete:function(){},editButton:!0,editPlaceholder:".jarviswidget-editbox",editClass:"fa fa-cog | fa fa-save",editSpeed:200,onEdit:function(){},colorButton:!0,fullscreenButton:!0,fullscreenClass:"fa fa-expand | fa fa-compress",fullscreenDiff:3,onFullscreen:function(){},customButton:!1,customClass:"folder-10 | next-10",customStart:function(){alert("Hello you, this is a custom button...")},customEnd:function(){alert("bye, till next time...")},buttonOrder:"%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",opacity:1,dragHandle:"> header",placeholderClass:"jarviswidget-placeholder",indicator:!0,indicatorTime:600,ajax:!0,timestampPlaceholder:".jarviswidget-timestamp",timestampFormat:"Last update: %m%/%d%/%y% %h%:%i%:%s%",refreshButton:!0,refreshButtonClass:"fa fa-refresh",labelError:"Sorry but there was a error:",labelUpdated:"Last Update:",labelRefresh:"Refresh",labelDelete:"Delete widget:",afterLoad:function(){},rtl:!1,onChange:function(){},onSave:function(){},ajaxnav:!0},k=[],l=!1,m=function(a,c){l?l||(l=!0,f(function(){l=!1,m(a,c)},200)):b.intersection(c,k).length!=c.length&&(k=b.union(c,k),a.data("jarvisWidgets")&&a.data("jarvisWidgets").destroy(),a.jarvisWidgets(j),o(c))},n=function(a,c){a.data("jarvisWidgets")&&a.data("jarvisWidgets").destroy(),k=b.xor(k,c)},o=function(a){angular.forEach(a,function(a){$("#"+a+' [data-toggle="dropdown"]').each(function(){var a=$(this).parent();if($(this).removeAttr("data-toggle"),!a.attr("dropdown")){$(this).removeAttr("href"),a.attr("dropdown","");var b=c(a)(a.scope());a.replaceWith(b)}})})};return{restrict:"A",compile:function(b){b.removeAttr("widget-grid data-widget-grid");var c=[];h=a.$on("$viewContentLoaded",function(a,d){f(function(){m(b,c)},100)}),i=a.$on("$stateChangeStart",function(a,d,e,f,j){g(),h(),i(),n(b,c)}),g=a.$on("jarvisWidgetAdded",function(a,d){-1==c.indexOf(d.attr("id"))&&(c.push(d.attr("id")),f(function(){m(b,c)},100))})}}}])});