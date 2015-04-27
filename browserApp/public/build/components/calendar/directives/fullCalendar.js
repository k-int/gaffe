define(["components/calendar/module","fullcalendar"],function(a){"use strict";a.registerDirective("fullCalendar",["CalendarEvent","$log","$timeout",function(a,b,c){return{restrict:"E",replace:!0,templateUrl:"build/components/calendar/directives/full-calendar.tpl.html",scope:{events:"=events"},link:function(a,b){function c(){e=d.fullCalendar({editable:!0,draggable:!0,selectable:!1,selectHelper:!0,unselectAuto:!1,disableResizing:!1,droppable:!0,header:{left:"title",center:"prev, next, today",right:"month, agendaWeek, agendaDay"},drop:function(a,b){var c=$(this).data("eventObject"),d=$.extend({},c);if(d.start=a,d.allDay=b,$("#calendar").fullCalendar("renderEvent",d,!0),$("#drop-remove").is(":checked")){var e=$(this).scope().$index;$("#external-events").scope().eventsExternal.splice(e,1),$(this).remove()}},select:function(a,b,c){var d=prompt("Event Title:");d&&e.fullCalendar("renderEvent",{title:d,start:a,end:b,allDay:c},!0),e.fullCalendar("unselect")},events:function(b,c,d,e){e(a.events)},eventRender:function(a,b,c){""==!a.description&&b.find(".fc-event-title").append("<br/><span class='ultra-light'>"+a.description+"</span>"),""==!a.icon&&b.find(".fc-event-title").append("<i class='air air-top-right fa "+a.icon+" '></i>")}}),$(".fc-header-right, .fc-header-center",d).hide()}var d=$("#calendar"),e=null;c(),a.$watch("events",function(a,b){d.fullCalendar("refetchEvents")},!0),a.next=function(){$(".fc-button-next",d).click()},a.prev=function(){$(".fc-button-prev",d).click()},a.today=function(){$(".fc-button-today",d).click()},a.changeView=function(a){d.fullCalendar("changeView",a)}}}}])});