define(["modules/graphs/module","modules/graphs/directives/flot/FlotConfig","flot","flot-resize","flot-fillbetween","flot-orderBar","flot-pie","flot-time","flot-tooltip"],function(a,b){"use strict";return a.registerDirective("flotFillChart",function(){return{restrict:"E",replace:!0,template:'<div class="chart"></div>',scope:{data:"="},link:function(a,b){$.plot(b,a.data,{xaxis:{tickDecimals:0},yaxis:{tickFormatter:function(a){return a+" cm"}}})}}})});