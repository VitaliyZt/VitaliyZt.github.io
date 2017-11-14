$(function(){
	$("span[style='font-style: italic;']").replaceWith(function(index, oldHTML){
		return $("<i>").html(oldHTML);
	});

	$("p").each(function(){
		var p = $(this), spans = p.find("span"), sent = p.html().split(".");
		if(spans.length){
		var newP = "";
		for (var i = 0; i < sent.length; i++){
			var pStr = sent[i];
			if(pStr){
				var count = 0, pos, pos2, pos3;
				pos = pStr.indexOf("<span");
				while ( pos != -1 ) {							
					var beforeSpan = pStr.substring(pos, pos3 + 7);							
					if(count == 0)
						beforeSpan = pStr.substring(0, pos - 1);
					beforeSpan = beforeSpan.charAt(0).toLowerCase() + beforeSpan.substr(1);
					pos2 = pStr.indexOf(">", pos) + 1;
					pos3 = pStr.indexOf("</span>", pos);
					var span = pStr.substring(pos2+1, pos3-1);
					span = span.charAt(0).toUpperCase() + span.substr(1);		
					var newpStr = span + " <span style='color: green;'>(" + beforeSpan + ")</span><br>";
					newP += newpStr;	
					count++;
					pos = pStr.indexOf("<span",pos+1);
				}
			}		
		}
		if(pStr.indexOf("<br>") >=0 || pStr.indexOf("<br/>") >= 0){}
		else p.after("<p style='border:1px dashed red;'>"+newP+"</p>");
		}
	});
});