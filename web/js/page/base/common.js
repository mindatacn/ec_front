var common=function(t){var e=function(){return new e.fn.init};return e.fn=e.prototype={init:function(){this.getDate=function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},this.getBeforeDate=function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return o<=t&&(r>1?r-=1:(n-=1,r=12)),e.setDate(o-t),n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),n+"-"+(r<10?"0"+r:r)+"-"+(o<10?"0"+o:o)},this.getFormateDate=function(t){var e=new Date(1e3*parseInt(t.toString().substring(0,t.toString().length-3)));return"下午"==e.toLocaleTimeString().substr(0,2)?e.toLocaleDateString()+" "+(parseInt(e.toLocaleTimeString().substr(2,2))+12)+e.toLocaleTimeString().substr(3,10):e.toLocaleDateString()+" "+e.toLocaleTimeString().substr(2,10)}}},e.fn.init.prototype=e.fn,e}();