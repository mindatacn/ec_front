function setDatas(t,e,a){var n=getTimes(a),o=n.begin,s=n.end,c=getData1(t,e);if(null!=c){if($("#clue-totalcount").html(c.totalCount),c.list.length>0){for(var r=[],d=[],i=[],l=9;l>=0;l--)r.push(c.list[l].name.substring(0,3)),d.push(c.list[l].count),i.push(c.list[0].count-c.list[l].count);chart_1.setOption({yAxis:[{data:r}],series:[{data:d},{data:i}]});for(var h=[],u=0;u<c.list.length;u++){var m=c.list[u].name.substring(0,2);"内蒙"==m?m="内蒙古":"黑龙"==m&&(m="黑龙江");var p={name:m,value:c.list[u].count};h.push(p)}chart_map.setOption({series:[{data:h}]})}var g=getData1_1(t,e,o,s);null!=g&&$("#clue-addcount").html(g.totalCount)}var v=getData2(t,e,o,s);null!=v&&chart_2.setOption({series:[{data:v}]});var f=getData3(t,e,o,s);if(null!=f){var w=Math.round(100*f.connectedContactPercent[0])+"%";$("#connect-jishu h3").html(w),$("#connect-jishu .progressing").css("height",w);var y=Math.round(100*f.connectedContactPercent[2])+"%";$("#connect-shichang h3").html(y),$("#connect-shichang .progressing").css("height",y);var C=Math.round(100*f.connectedContactPercent[1])+"%";$("#connect-qita h3").html(C),$("#connect-qita .progressing").css("height",C),$("#connect-totalcount").html(f.connectedContact[3]),$("#connect-rate").html(Math.round(f.totalConnectedContact[3]/f.totalContact[3]*100)+"%");var b=Math.round(100*f.intentedContactPercent[0])+"%";$("#intented-jishu h3").html(b),$("#intented-jishu .progressing").css("height",b);var x=Math.round(100*f.intentedContactPercent[2])+"%";$("#intented-shichang h3").html(x),$("#intented-shichang .progressing").css("height",x);var _=Math.round(100*f.intentedContactPercent[1])+"%";$("#intented-qita h3").html(_),$("#intented-qita .progressing").css("height",_),$("#intented-totalcount").html(f.intentedContact[3]),$("#intented-rate").html(Math.round(f.intentedContact[3]/f.totalContact[3]*100)+"%"),$("#clue-jishu .progress-c1").css("width",Math.round(60*f.totalContactPercent[0])+"%"),$("#clue-jishu .progress-c2").css("width",Math.round(60*f.addedContactPercent[0])+"%"),$("#clue-shichang .progress-c1").css("width",Math.round(60*f.totalContactPercent[2])+"%"),$("#clue-shichang .progress-c2").css("width",Math.round(60*f.addedContactPercent[2])+"%"),$("#clue-qita .progress-c1").css("width",Math.round(60*f.totalContactPercent[1])+"%"),$("#clue-qita .progress-c2").css("width",Math.round(60*f.addedContactPercent[1])+"%"),$("#clue-total").html(f.totalContact[3]),$("#clue-add").html(f.addedContact[3]);var D="<tr><td><span>1</span></td><td>有效沟通量（>30s）</td><td>"+f.connected30Contact[0]+"</td><td>"+f.connected30Contact[1]+"</td><td>"+f.connected30Contact[2]+"</td><td>"+f.connected30Contact[3]+"</td></tr><tr><td><span>2</span></td><td>有效沟通量（>60s）</td><td>"+f.connected60Contact[0]+"</td><td>"+f.connected60Contact[1]+"</td><td>"+f.connected60Contact[2]+"</td><td>"+f.connected60Contact[3]+"</td></tr><tr><td><span>3</span></td><td>有效沟通量（>120s）</td><td>"+f.connected120Contact[0]+"</td><td>"+f.connected120Contact[1]+"</td><td>"+f.connected120Contact[2]+"</td><td>"+f.connected120Contact[3]+"</td></tr><tr><td><span>4</span></td><td>有效沟通量（>240s）</td><td>"+f.connected240Contact[0]+"</td><td>"+f.connected240Contact[1]+"</td><td>"+f.connected240Contact[2]+"</td><td>"+f.connected240Contact[3]+"</td></tr>";$(".box-7 table tbody").html(D)}}function getData1(t,e){var a=null;return $.ajax({type:"GET",async:!1,url:t+"/contact/province",headers:{token:e},dataType:"json",success:function(t){"200"==t.code?a=t.data:console.log(t.code)},error:function(t){console.log(t)}}),a}function getData1_1(t,e,a,n){var o=null;return $.ajax({type:"GET",async:!1,url:t+"/contact/province",headers:{token:e},data:{begin:a,end:n},dataType:"json",success:function(t){"200"==t.code?o=t.data:console.log(t.code)},error:function(t){console.log(t)}}),o}function getData2(t,e,a,n){var o=null;return $.ajax({type:"GET",async:!1,url:t+"/contact/score",headers:{token:e},data:{begin:a,end:n},dataType:"json",success:function(t){"200"==t.code?null!=t.data&&(o=t.data):console.log(t.code)},error:function(t){console.log(t)}}),o}function getData3(t,e,a,n){var o=null;return $.ajax({type:"GET",async:!1,url:t+"/customer/saleState",headers:{token:e},data:{begin:a,end:n},dataType:"json",success:function(t){"200"==t.code?null!=t.data&&(o=t.data):console.log(t.code)},error:function(t){console.log(t)}}),o}function getDate(t,e){var a=1,n=new Date,o=n.getFullYear(),s=n.getMonth()+1;return t=parseInt(t),e=parseInt(e),t==o&&e==s?a=n.getDate():1==e||3==e||5==e||7==e||8==e||10==e||12==e?a=31:4==e||6==e||9==e||11==e?a=30:2==e&&(a=t%4==0&&t%100!=0||t%400==0?29:28),a}function getTimes(t){var e={begin:t+"-1",end:t+"-31"},a=t.substring(0,4),n=t.substring(5,t.length),o=new Date,s=o.getFullYear(),c=o.getMonth()+1,r=o.getDate();return a==s&&n==c?r>1?e.end=t+"-"+(r-1):n>1?(n-=1,e.begin=a+"-"+n+"-1",e.end=a+"-"+n+"-"+getDate(a,n)):(a-=1,n=12,e.begin=a+"-"+n+"-1",e.end=a+"-"+n+"-"+getDate(a,n)):e.end=t+"-"+getDate(a,n),e}var option_1={calculable:!0,grid:{borderWidth:0},xAxis:[{type:"value",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],yAxis:[{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#008ff0"}},data:["北京市","北京市","北京市","北京市","北京市","北京市","北京市","北京市","北京市","北京市"]}],series:[{type:"bar",stack:"chart",z:3,barWidth:"15",barMaxWidth:"15",label:{normal:{show:!1}},itemStyle:{normal:{color:"#2c85d5"}},data:[1814,1814,1814,1814,1814,1814,1814,1814,1814,1814]},{type:"bar",stack:"chart",itemStyle:{normal:{color:"rgba(255,255,255,.1)"},emphasis:{color:"rgba(255,255,255,.1)"}},data:[0,0,0,0,0,0,0,0,0,0]}]},chart_1=new echarts.init(document.getElementById("chart-bar-1"));chart_1.setOption(option_1);var option_2={grid:{borderWidth:0},xAxis:[{type:"category",splitLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#008ff0"}},data:["10","20","30","40","50","60","70","80","90","100"]}],yAxis:[{type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#008ff0"}}}],series:[{type:"line",smooth:!0,symbolSize:0,showSymbol:!1,itemStyle:{normal:{color:"#2c85d5",areaStyle:{type:"default",color:"rgba(44,133,213,.3)"}}},data:[0,0,0,0,0,0,0,0,0,0]}]},chart_2=new echarts.init(document.getElementById("chart-bar-2"));chart_2.setOption(option_2);var option_map={color:["#ffff00"],legend:{orient:"vertical",x:"left",itemWidth:0,textStyle:{color:"transparent"},data:["clue"]},dataRange:{min:0,max:2500,x:"left",y:"bottom",text:["高","低"],calculable:!0,color:["#2e2e58","#024cfd","#4fd4f8"],show:!1},series:[{name:"clue",type:"map",mapType:"china",hoverable:!1,roam:!1,itemStyle:{normal:{label:{textStyle:{color:"#ffffff",fontSize:16},show:!0}}},data:[{name:"北京",value:25500}],geoCoord:{110000:[116.46,39.92],120000:[117.2,39.13],130000:[114.48,38.03],140000:[112.53,37.87],150000:[111.65,40.82],210000:[123.38,41.8],220000:[125.35,43.88],230000:[126.63,45.75],310000:[121.48,31.22],320000:[118.78,32.04],330000:[120.19,30.26],340000:[117.27,31.86],350000:[119.3,26.08],360000:[115.89,28.68],370000:[117,36.65],410000:[113.65,34.76],420000:[114.31,30.52],430000:[113,28.21],440000:[113.23,23.16],450000:[108.33,22.84],460000:[110.35,20.02],500000:[106.54,29.59],510000:[104.06,30.67],520000:[106.71,26.57],530000:[102.73,25.04],540000:[91.11,29.97],610000:[108.95,34.27],620000:[103.73,36.03],630000:[101.74,36.56],640000:[106.27,38.47],650000:[87.68,43.77]}},{type:"map",mapType:"china",data:[],markLine:{smooth:!0,effect:{show:!0,scaleSize:1,period:20,color:"#fff",shadowBlur:10},itemStyle:{normal:{borderWidth:1,lineStyle:{type:"solid",shadowBlur:10}}},data:[[{name:"110000"},{name:"120000",value:0}],[{name:"110000"},{name:"310000",value:0}],[{name:"110000"},{name:"440000",value:0}],[{name:"110000"},{name:"320000",value:0}],[{name:"110000"},{name:"370000",value:0}],[{name:"110000"},{name:"230000",value:0}],[{name:"110000"},{name:"150000",value:0}],[{name:"110000"},{name:"530000",value:0}],[{name:"110000"},{name:"540000",value:0}],[{name:"110000"},{name:"650000",value:0}]]},markPoint:{symbol:"emptyCircle",symbolSize:6,effect:{show:!1,shadowBlur:0},itemStyle:{normal:{label:{show:!1}},emphasis:{label:{show:!1}}},data:[{name:"120000",value:0},{name:"310000",value:0},{name:"440000",value:0},{name:"320000",value:0},{name:"370000",value:0},{name:"230000",value:0},{name:"150000",value:0},{name:"530000",value:0},{name:"540000",value:0},{name:"650000",value:0}]}}]},chart_map=new echarts.init(document.getElementById("chart-map-1"));chart_map.setOption(option_map),$(function(){$("#modal-shade").show(),url="http://47.92.68.88:88/server";var t=$(window).width(),e=$(window).height(),a=(t/1920).toFixed(6),n=(e/1080).toFixed(6);$(document.body).css("transform","scale("+a+","+n+")");var o=new Cookies,s=o.getChild("md_user","username");if(null!=s&&""!=s){var c=parseInt(o.getChild("md_user","userid")),r=o.getChild("md_user","token"),d=o.getChild("md_user","role");4==c&&"4"==c&&$(".icon-menu ul li:eq(0)").show(),"user"!=d&&$(".icon-menu ul li:eq(1)").show();var i=new Date,l=i.getFullYear(),h=i.getMonth()+1;$(".top-times .month-pre").show(),$(".top-times .month-next").hide(),$(".top-times p").html(l+"年"+h+"月").attr("data-value",l+"-"+h),setDatas(url,r,l+"-"+h),$("#modal-shade").hide()}else window.location.href="login.html";$(".top-times .month-pre").click(function(){var t=(new Cookies).getChild("md_user","token"),e=base_year=2017,a=base_month=9,n=$(".top-times p").attr("data-value"),o=parseInt(n.substr(0,4)),s=parseInt(n.substr(5,n.length));s>1?(a=s-1,e=o):(a=12,e=o-1),e==base_year&&a==base_month?$(".top-times .month-pre").hide():$(".top-times .month-pre").show(),$(".top-times .month-next").show(),$(".top-times p").html(e+"年"+a+"月").attr("data-value",e+"-"+a),setDatas(url,t,e+"-"+a)}),$(".top-times .month-next").click(function(){var t=(new Cookies).getChild("md_user","token"),e=2017,a=9,n=$(".top-times p").attr("data-value"),o=parseInt(n.substr(0,4)),s=parseInt(n.substr(5,n.length)),c=new Date,r=c.getFullYear(),d=c.getMonth()+1;s<12?(a=s+1,e=o):(a=1,e=o+1),e==r&&a==d?$(".top-times .month-next").hide():$(".top-times .month-next").show(),$(".top-times .month-pre").show(),$(".top-times p").html(e+"年"+a+"月").attr("data-value",e+"-"+a),setDatas(url,t,e+"-"+a)}),$(".data-view .icon-menu").css("left","-80px").find(".menu-icon").addClass("out"),$(".data-view .icon-menu .menu-icon").click(function(){$(this).hasClass("out")?($(".data-view .icon-menu").animate({left:"0px"}),$(this).removeClass("out").addClass("off")):($(".data-view .icon-menu").animate({left:"-80px"}),$(this).removeClass("off").addClass("out"))}),$(window).resize(function(){var t=$(window).width(),e=$(window).height(),a=(t/1920).toFixed(6),n=(e/1080).toFixed(6);$(document.body).css("transform","scale("+a+","+n+")")})});