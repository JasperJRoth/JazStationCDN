var triggerError=attachErrorHandler("runtimeViewer",!0),decoder=decodeURIComponent||unescape;$(document).ready(function(){var t=null,a=!0,o=!1,s={},n=($("#runtime-wrap"),$("#runtime-header")),l=$("#runtime-list"),c=$("#runtime-details");window.refreshRuntimes=function(e){var r;e?(a=!0,function(n){try{t=$.parseJSON(n)}catch(e){return triggerError("JSON parse error: "+e+". For runtime data: "+n)}}(decoder(e)),r=0,s={},l.empty(),$.each(t,function(e,n){var t=null;n.invalid?t=$("<li>",{class:"runtime runtime-invalid well"}).append($("<span>",{class:"seen",text:"["+n.seen+"]"})," Invalid exception in error handler: ",$("<span>",{class:"name",text:n.name})):(t=$("<li>",{class:"runtime well"}).append($("<span>",{class:"seen",text:"["+n.seen+"]"})," In ",$("<span>",{class:"file",text:n.file}),", line ",$("<span>",{class:"line",text:n.line}),": ",$("<span>",{class:"name",text:n.name})),n.desc&&t.append($("<span>",{class:"desc",html:n.desc})),n=n.file+n.line+n.name,void 0!==s[n]?s[n]++:s[n]=1),l.prepend(t),r++}),n.find(".total-runtimes").text(r),$("#content").nanoScroller(),a=!1):triggerError("Got no json in refreshRuntimes")},n.on("click",".refresh",function(){a||(o&&(c.hide(),l.show(),o=!1),l.html($("<li>",{class:"loading well",text:"Loading..."})),window.location="?action=getRuntimeData")}),l.on("click",".runtime:not(.runtime-invalid)",function(){var e,n,t,r,i;a||o||(o=!0,n=(e=$(this)).find(".file").text(),t=e.find(".line").text(),r=e.find(".name").text(),i='<h2><i class="icon-pencil"></i> Summary</h2>',i+="This runtime has occurred <strong>"+s[n+t+r]+"</strong> times.<br><br>",i+="<table><tbody>",i+="<tr><td><strong>File</strong></td><td>"+n+"</td></tr>",i+="<tr><td><strong>Line</strong></td><td>"+t+"</td></tr>",i+="<tr><td><strong>Error</strong></td><td>"+r+"</td></tr>",i+="</tbody></table>",i+='<h2><i class="icon-code"></i> Description</h2>',i+="<pre>"+e.find(".desc").html()+"</pre>",c.find(".details").html(i),l.hide(),c.show(),$("#content").nanoScroller())}),c.on("click",".back",function(){c.hide(),l.show(),$("#content").nanoScroller(),o=!1}),window.location="?action=getRuntimeData"});