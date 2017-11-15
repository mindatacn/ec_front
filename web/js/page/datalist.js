function getVocationList(){var e=[];return $.get("temp/json/vacation-map.json",{},function(a){for(var t=0;t<a.length;t++)1==a[t].vocationGrade&&e.push({vocationCode:a[t].vocationCode,vocationName:a[t].vocationName})}),e}function getProvinceList(){var e=[];return $.get("temp/json/area-map.json",{},function(a){for(var t=0;t<a.length;t++)"1"==a[t].grade&&e.push({id:a[t].id,name:a[t].name})}),e}function getCityList(e){var a=[];return $.get("temp/json/area-map.json",{},function(t){if("110000"==e||"120000"==e||"310000"==e||"500000"==e)for(n=0;n<t.length;n++)t[n].id.substring(0,2)==e.substring(0,2)&&"3"==t[n].grade&&a.push({id:t[n].id,name:t[n].name});else for(var n=0;n<t.length;n++)t[n].id.substring(0,2)==e.substring(0,2)&&"2"==t[n].grade&&a.push({id:t[n].id,name:t[n].name})}),a}function getPushData(e,a){var t={pushedCount:"0",pushTotal:"0",percent:"0"};return $.ajax({type:"GET",async:!1,url:e+"/user/pushCount",headers:{token:a},dataType:"json",success:function(e){"200"==e.code?(t.pushedCount=e.data.pushedCount,t.pushTotal=e.data.threshold,t.percent=Math.round(100*t.pushedCount/t.pushTotal)+"%"):console.log(e.code)},error:function(e){console.log(e)}}),t}function getTableData(e,a,t){var n={totalPage:0,totalCount:0,list:null};return $.ajax({type:"POST",async:!1,url:e+"/contact",headers:{"Content-Type":"application/json",token:a},data:JSON.stringify(t),dataType:"json",success:function(e){if("200"==e.code)if(n.totalPage=e.data.totalPage,n.totalCount=e.data.totalCount,e.data.list.length>0){n.list=e.data.list;for(var a=0;a<n.list.length;a++)n.list[a].mobile=n.list[a].mobile.substring(0,n.list[a].mobile.length-4)+"****"}else n.list=null;else console.log(e.code)},error:function(e){console.log(e)}}),n}function getDetails(e,a,t){var n={};return $.ajax({type:"GET",async:!1,url:e+"/contact/"+t,headers:{"Content-Type":"application/x-www-form-urlencoded",token:a},dataType:"json",success:function(e){"200"==e.code?(null!=(n=e.data).phone&&""!=n.phone&&(n.phone=n.phone.substring(0,n.phone.length-4)+"****"),null!=n.mobile&&""!=n.mobile&&(n.mobile=n.mobile.substring(0,n.mobile.length-4)+"****")):console.log(e.code)},error:function(e){console.log(e)}}),n}function setSearchInfo(e,a,t){var n=e;if(n.page=0,"extra"==a&&(n.extra=t,n.companyName=null,n.address=null,n.jobName=null,n.comintro=null),"companyName"==a&&(n.extra=null,n.companyName=t,n.address=null,n.jobName=null,n.comintro=null),"address"==a&&(n.extra=null,n.companyName=null,n.address=t,n.jobName=null,n.comintro=null),"jobName"==a&&(n.extra=null,n.companyName=null,n.address=null,n.jobName=t,n.comintro=null),"comintro"==a&&(n.extra=null,n.companyName=null,n.address=null,n.jobName=null,n.comintro=t),"province"==a&&(n.provinces=[],parseInt(t)>0))for(var o=$("#province > span a.current"),s=0;s<o.length;s++)(i=parseInt(o.eq(s).attr("data-id")))>0&&n.provinces.push(i.toString());if("city"==a&&(n.cities=[],parseInt(t)>0))for(var o=$("#city li span a.current"),s=0;s<o.length;s++)(i=parseInt(o.eq(s).attr("data-id")))>0&&n.cities.push(i.toString());if("vocation"==a&&(n.vocations=[],parseInt(t)>0))for(var o=$("#vocation > span a.current"),s=0;s<o.length;s++)(i=parseInt(o.eq(s).attr("data-id")))>0&&n.vocations.push(i);if("size"==a&&(n.memberSizeTags=[],parseInt(t)>0))for(var o=$("#size > span a.current"),s=0;s<o.length;s++)(i=parseInt(o.eq(s).attr("data-id")))>0&&n.memberSizeTags.push(i);if("website"==a&&(n.websiteIds=[],parseInt(t)>0))for(var o=$("#website > span a.current"),s=0;s<o.length;s++){var i=parseInt(o.eq(s).attr("data-id"));i>0&&n.websiteIds.push(i)}return"hasMobile"==a&&(n.hasMobile=t),"needSale"==a&&(n.needSale=t),n}function getPagerData(e,a){var t={};t.index=e+1,1==t.index?t.hasPrev=!1:t.hasPrev=!0,t.index==a?t.hasNext=!1:t.hasNext=!0,t.pagerlist=[];var n=5*Math.ceil(t.index/5),o=a<n?a:n,s=o-4;for(s<=0&&(s=1),s;s<=o;s++)t.pagerlist.push(s);return t}function getProvinceMap(){return{110000:"北京市",120000:"天津市",130000:"河北省",140000:"山西省",150000:"内蒙古自治区",210000:"辽宁省",220000:"吉林省",230000:"黑龙江省",310000:"上海市",320000:"江苏省",330000:"浙江省",340000:"安徽省",350000:"福建省",360000:"江西省",370000:"山东省",410000:"河南省",420000:"湖北省",430000:"湖南省",440000:"广东省",450000:"广西壮族自治区",460000:"海南省",500000:"重庆市",510000:"四川省",520000:"贵州省",530000:"云南省",540000:"西藏自治区",610000:"陕西省",620000:"甘肃省",630000:"青海省",640000:"宁夏回族自治区",650000:"新疆维吾尔自治区",710000:"台湾省",810000:"香港特别行政区",820000:"澳门特别行政区"}}function getVocationMap(){return{1:"IT/通信/电子/互联网",2:"金融业",3:"房地产/建筑业",4:"法律",5:"商业服务",6:"医疗/健康",7:"贸易/批发/零售/租赁业",8:"生产/加工/制造",9:"交通/运输/物流/仓储",10:"服务业",11:"体育/休闲/旅游/娱乐",12:"能源/矿产/环保",13:"政府/非盈利机构",14:"媒体",15:"教育",16:"农/林/牧/渔",17:"跨领域经营",18:"其他",19:"互联网/电子商务",20:"IT服务（系统/数据/维护）",21:"计算机硬件",22:"信息技术与服务",23:"计算机软件",24:"电子技术/半导体/集成电路",25:"网络设备",26:"计算机游戏",27:"空间科技",28:"网络安全",29:"纳米技术",30:"电信/通讯",32:"财经服务",33:"证券",34:"期货",35:"会计",36:"投资",37:"保险",38:"银行",39:"信托",40:"担保",41:"拍卖",42:"典当",43:"房地产",44:"建筑/建筑建材/建材",45:"工程",46:"家居",47:"建筑/室内设计",48:"装饰装潢",49:"物业管理",50:"商业中心",51:"土木工程",52:"法律援助",53:"法律服务",54:"专业咨询/服务（财会/法律人力资源等）",55:"管理咨询",56:"招聘/猎头",57:"人力资源",58:"市场推广/广告",59:"市场调研/市场研究",60:"翻译服务",61:"公关",62:"会务/活动服务/展会",63:"中介服务",64:"检验/检测/认证",65:"外包服务",66:"生物工程",67:"生物信息",68:"医院/医疗",69:"医药品",70:"医疗设备",71:"兽医",72:"健身",73:"心理健康",74:"中医",75:"快速消费品（饮料/烟酒）",76:"食品",77:"化妆品",78:"服装",79:"纺织",80:"皮革",81:"家具",82:"数码家电",83:"贸易/进出口",84:"零售/批发",85:"租赁服务",86:"奢侈品/珠宝",87:"航空/航天研究与制造",88:"仪器仪表及工业自动化",89:"加工制造（模具）",90:"加工制造（原料加工）",91:"纺织/皮革",92:"玻璃/陶瓷/混凝土",93:"造纸/木材",94:"包装/集装箱",95:"铁路",96:"大型设备/机电设备/重工业",97:"化工",98:"汽车/摩托车",99:"飞行航空/宇航",100:"收藏品/奢侈品",101:"礼品/玩具",102:"工艺美术",103:"水电煤供应",104:"交通/运输",105:"物流/快递/仓储",106:"医疗/医疗服务护理/美容/保健卫生服务",107:"宗教协会",108:"家政服务",109:"环保服务",110:"保安服务",111:"图书馆及博物馆",112:"信息服务",113:"旅游/度假",114:"酒店/餐饮",115:"娱乐业",116:"休闲度假/旅游",117:"餐饮业",118:"住宿业",119:"体育运动",120:"娱乐设备与服务",121:"矿产/采掘/冶炼",122:"能源",123:"石油",124:"石化",126:"电气",127:"电力",128:"水利",129:"环保",130:"政府机关",131:"公共事业（社会福利/社会保障等）",132:"地质勘查/勘探",133:"公共安全",134:"公益基金",135:"智囊团",136:"非盈利机构",137:"学术/科研",138:"慈善",139:"印刷",140:"文化艺术",141:"写作/编辑",142:"出版",143:"杂志",144:"报纸",145:"电影",146:"电视",147:"广播",148:"媒体设计制作",149:"互联网媒体",150:"义务教育",151:"高等教育",152:"教育管理",153:"教育研究",154:"林业",155:"农业",156:"牧业",157:"渔业"}}function getSizeMap(){return{1:"0-50人",2:"51-150人",3:"151-500人",4:"501-2000人",5:"2000人以上"}}function getToken(){var e=(new Cookies).getChild("md_user","token");if(null!=e&&""!=e)return e;window.location.href="login.html"}$(function(){url="http://47.92.107.76/server",new Vue({el:"#datalist",data:{username:"",token:"",isHiddenDataMenu:!1,isHiddenStatisticsMenu:!0,provinceMap:getProvinceList(),cityMap:[],vocationMap:getVocationList(),isHavePhone:!1,isRecruitment:!1,pushData:{},Detail:{},tableData:{},searchInfo:{page:0,size:10},pagers:{index:1,hasPrev:!1,hasNext:!0,pagerlist:[1,2,3,4,5]},dataMapProvice:getProvinceMap(),dataMapVocation:getVocationMap(),dataMapSize:getSizeMap()},methods:{searchByKeywords:function(){var e=this;e.token=getToken();var a=$("#keywords .input-drop ul li:first-child").attr("data-code"),t=$("#keywords .txt-com").val(),n=setSearchInfo(e.searchInfo,a,t);e.tableData=getTableData(url,e.token,n),e.pagers=getPagerData(e.searchInfo.page,e.tableData.totalPage)},searchCheck:function(e){var a=this;if(a.token=getToken(),1==e){a.isHavePhone=!a.isHavePhone;t=setSearchInfo(a.searchInfo,"hasMobile",a.isHavePhone);a.tableData=getTableData(url,a.token,t),a.pagers=getPagerData(a.searchInfo.page,a.tableData.totalPage)}else if(2==e){a.isRecruitment=!a.isRecruitment;var t=setSearchInfo(a.searchInfo,"needSale",a.isRecruitment);a.tableData=getTableData(url,a.token,t),a.pagers=getPagerData(a.searchInfo.page,a.tableData.totalPage)}},searchSelect:function(e,a,t){var n=this;if(n.token=getToken(),"0"!=e){var o=$("#"+a+" span a[data-id="+e+"]");if(o.hasClass("current")){if(o.removeClass("current"),$("#"+a+" > span a.current").length<=0)$("#"+a+" > span a[name=all]").addClass("current"),"province"==a&&(n.cityMap=[],$("#province .opts-a").hide(),$("#province .list-children").hide());else if("province"==a)for(var s=0;s<n.cityMap.length;s++)n.cityMap[s].code==e&&n.cityMap.splice(s,1)}else $("#"+a+" > span a[name=all]").removeClass("current"),o.addClass("current"),"province"==a&&(n.cityMap.push({code:e,name:$("#"+a+" span a[data-id="+e+"]").html(),list:getCityList(e)}),$("#province .opts-a").show(),$("#province .list-children").show())}else $("#"+a+" span a").removeClass("current"),$("#"+a+" a[name=all]").addClass("current"),"province"==a&&(n.cityMap=[],$("#province .opts-a").hide(),$("#province .list-children").hide());null!=t&&(a=t);var i=setSearchInfo(n.searchInfo,a,e);n.tableData=getTableData(url,n.token,i),n.pagers=getPagerData(n.searchInfo.page,n.tableData.totalPage)},showDetails:function(e){var a=this;a.token=getToken(),a.Detail=getDetails(url,a.token,e),$("#com-layer1").modal("show")},prev:function(){var e=this;e.token=getToken(),e.searchInfo.page--,e.pagers=getPagerData(e.searchInfo.page,e.tableData.totalPage),e.tableData=getTableData(url,e.token,e.searchInfo)},next:function(){var e=this;e.token=getToken(),e.searchInfo.page++,e.pagers=getPagerData(e.searchInfo.page,e.tableData.totalPage),e.tableData=getTableData(url,e.token,e.searchInfo)},goto:function(e){var a=this;a.token=getToken(),null==e&&((e=parseInt($("#go-page").val()))>a.tableData.totalPage&&(e=a.tableData.totalPage),e<1&&(e=1),$("#go-page").val(e)),a.searchInfo.page=e-1,a.pagers=getPagerData(a.searchInfo.page,a.tableData.totalPage),a.tableData=getTableData(url,a.token,a.searchInfo)},push:function(e){var a=this;a.token=getToken(),$.ajax({type:"POST",url:url+"/push",headers:{"Content-Type":"application/json",token:a.token},data:JSON.stringify({ids:[e]}),dataType:"json",success:function(e){"200"==e.code?(a.pushData=getPushData(url,a.token),a.tableData=getTableData(url,a.token,a.searchInfo),a.pagers=getPagerData(a.searchInfo.page,a.tableData.totalPage),$("#com-alert1 .modal-body h2").html("线索数据推送成功"),$("#com-alert1").modal("show")):(console.log(e.code),$("#com-alert1 .modal-body h2").html("线索数据推送失败，请稍后重试"),$("#com-alert1").modal("show"))},error:function(e){console.log(e)}})},pushAll:function(){var e=this;e.token=getToken();for(var a=$(".data-table .check-item[name='list-item']"),t=[],n=0;n<a.length;n++)a.eq(n).find(".icon span").hasClass("checked")&&t.push(parseInt(a.eq(n).attr("data-id")));t.length>0?t.length<=e.pushData.pushTotal-e.pushData.pushedCount?$.ajax({type:"POST",url:url+"/push",headers:{"Content-Type":"application/json",token:e.token},data:JSON.stringify({ids:t}),dataType:"json",success:function(a){"200"==a.code?(e.pushData=getPushData(url,e.token),e.tableData=getTableData(url,e.token,e.searchInfo),e.pagers=getPagerData(e.searchInfo.page,e.tableData.totalPage),$(".data-table .check-item .icon span").removeClass("checked"),$("#com-alert1 .modal-body h2").html("成功推送"+a.data.successCount+"条线索数据"),$("#com-alert1").modal("show")):(console.log(a.code),$("#com-alert1 .modal-body h2").html("线索数据推送失败，请稍后重试"),$("#com-alert1").modal("show"))},error:function(e){console.log(e)}}):($("#com-alert1 .modal-body h2").html("今天您最多还能推送"+(e.pushData.pushTotal-e.pushData.pushedCount)+"条线索数据"),$("#com-alert1").modal("show")):($("#com-alert1 .modal-body h2").html("请选择要推送的线索数据"),$("#com-alert1").modal("show"))}},created:function(){var e=new Cookies,a=e.getChild("md_user","username");if(null!=a&&""!=a){this.username=a,this.token=e.getChild("md_user","token");var t=e.getChild("md_user","role");"manager"!=t&&"leader"!=t||(this.isHiddenStatisticsMenu=!1),"manager"==t&&(this.isHiddenDataMenu=!0)}else window.location.href="login.html";this.pushData=getPushData(url,this.token),this.tableData=getTableData(url,this.token,this.searchInfo),this.pagers=getPagerData(this.searchInfo.page,this.tableData.totalPage)}}),$("#keywords .input-drop ul li").click(function(){var e=$(this).find("p:first-child"),a=$("#keywords .input-drop ul li:first-child").find("p:first-child"),t=$("#keywords .input-drop span:first-child"),n=e.html(),o=a.html();if(n!=o){t.html(n),e.html(o),a.html(n);var s=$(this).attr("data-code"),i=$("#keywords .input-drop ul li:first-child").attr("data-code");$(this).attr("data-code",i),$("#keywords .input-drop ul li:first-child").attr("data-code",s)}$("#keywords .input-drop ul").hide()}),$("#keywords .input-drop").mouseover(function(){$(this).find("ul").show()}),$("#keywords .input-drop").mouseout(function(){$(this).find("ul").hide()}),$(".containers .content .search-bottom .more span").click(function(){if($(this).hasClass("up"))$(this).attr("class","down"),$(".containers .content .search-bottom .search-bottom-main").animate({height:"113px"});else{$(this).attr("class","up");var e=$(".containers .content .search-bottom .search-bottom-main ul").height()+20;$(".containers .content .search-bottom .search-bottom-main").animate({height:e})}}),$("#province .list-children .opts .btn-com").click(function(){$("#province .list-children").hide()}),$("#province .opts-a").click(function(){$("#province .list-children").show()}),$(".data-table .check-item[name='list-all']").click(function(){$(this).find(".icon span").hasClass("checked")?($(".data-table .check-item[name='list-all'] .icon span").removeClass("checked"),$(".data-table table tr td .check-item .icon span").removeClass("checked")):($(".data-table .check-item[name='list-all'] .icon span").addClass("checked"),$(".data-table table tr td .check-item .icon span").addClass("checked"))}),$(".data-table").delegate(".check-item[name='list-item']","click",function(){$(this).find(".icon span").hasClass("checked")?($(this).find(".icon span").removeClass("checked"),$(".data-table .check-item[name='list-all'] .icon span").removeClass("checked")):($(this).find(".icon span").addClass("checked"),$(".data-table .check-item[name='list-item'] .icon .checked").length==$(".data-table .check-item[name='list-item']").length&&$(".data-table .check-item[name='list-all'] .icon span").addClass("checked"))})});