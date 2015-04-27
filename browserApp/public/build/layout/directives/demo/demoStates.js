define(["layout/module","lodash","notification"],function(a,b){"use strict";a.registerDirective("demoStates",["$rootScope",function(a){return{restrict:"E",replace:!0,templateUrl:"build/layout/directives/demo/demo-states.tpl.html",scope:!0,link:function(a,b,c){b.parent().css({position:"relative"}),b.on("click","#demo-setting",function(){b.toggleClass("activate")})},controller:["$scope",function(c){var d=$("body");c.$watch("fixedHeader",function(a){localStorage.setItem("sm-fixed-header",a),d.toggleClass("fixed-header",a),0==a&&(c.fixedRibbon=!1,c.fixedNavigation=!1)}),c.$watch("fixedNavigation",function(a){localStorage.setItem("sm-fixed-navigation",a),d.toggleClass("fixed-navigation",a),a?(c.insideContainer=!1,c.fixedHeader=!0):c.fixedRibbon=!1}),c.$watch("fixedRibbon",function(a){localStorage.setItem("sm-fixed-ribbon",a),d.toggleClass("fixed-ribbon",a),a&&(c.fixedHeader=!0,c.fixedNavigation=!0,c.insideContainer=!1)}),c.$watch("fixedPageFooter",function(a){localStorage.setItem("sm-fixed-page-footer",a),d.toggleClass("fixed-page-footer",a)}),c.$watch("insideContainer",function(a){localStorage.setItem("sm-inside-container",a),d.toggleClass("container",a),a&&(c.fixedRibbon=!1,c.fixedNavigation=!1)}),c.$watch("rtl",function(a){localStorage.setItem("sm-rtl",a),d.toggleClass("smart-rtl",a)}),c.$watch("menuOnTop",function(b){a.$broadcast("$smartLayoutMenuOnTop",b),localStorage.setItem("sm-menu-on-top",b),d.toggleClass("menu-on-top",b),b&&d.removeClass("minified")}),c.$watch("colorblindFriendly",function(a){localStorage.setItem("sm-colorblind-friendly",a),d.toggleClass("colorblind-friendly",a)}),c.fixedHeader="true"==localStorage.getItem("sm-fixed-header"),c.fixedNavigation="true"==localStorage.getItem("sm-fixed-navigation"),c.fixedRibbon="true"==localStorage.getItem("sm-fixed-ribbon"),c.fixedPageFooter="true"==localStorage.getItem("sm-fixed-page-footer"),c.insideContainer="true"==localStorage.getItem("sm-inside-container"),c.rtl="true"==localStorage.getItem("sm-rtl"),c.menuOnTop="true"==localStorage.getItem("sm-menu-on-top")||d.hasClass("menu-on-top"),c.colorblindFriendly="true"==localStorage.getItem("sm-colorblind-friendly"),c.skins=appConfig.skins,c.smartSkin=localStorage.getItem("sm-skin")||appConfig.smartSkin,c.setSkin=function(a){c.smartSkin=a.name,d.removeClass(b.pluck(c.skins,"name").join(" ")),d.addClass(a.name),localStorage.setItem("sm-skin",a.name),$("#logo img").attr("src",a.logo)},"smart-style-0"!=c.smartSkin&&c.setSkin(b.find(c.skins,{name:c.smartSkin})),c.factoryReset=function(){$.SmartMessageBox({title:"<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",content:"Would you like to RESET all your saved widgets and clear LocalStorage?1",buttons:"[No][Yes]"},function(a){"Yes"==a&&localStorage&&(localStorage.clear(),location.reload())})}}]}}])});