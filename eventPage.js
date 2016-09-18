
function new_page(){
	for(var i =0; i < 50; i++){
		var btn = document.createElement("p");       
		var t = document.createTextNode("Site blocked");       // Create a text nod	
                btn.appendChild(t);    
}
}



chrome.storage.sync.get({
	timerTime: 0,
	site0: "",
	site1: "",
	site2: "",
	site3: "",
	site4: "",
	site5: "",
	site6: "",
	site7: "",
	site8: "",
	site9: ""
  }, function(items) {
	  
	url = window.location.href;
		if (url.indexOf(items.site0) !== -1 && items.site0 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
	new_page();
}
		if (url.indexOf(items.site1) !== -1 && items.site1 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site2) !== -1 && items.site2 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site3) !== -1 && items.site3 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site4) !== -1 && items.site4 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site5) !== -1 && items.site5 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site6) !== -1 && items.site6 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site7) !== -1 && items.site7 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site8) !== -1 && items.site8 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		if (url.indexOf(items.site9) !== -1 && items.site9 !== "") {
	window.location = "chrome-extension://ggdcepfpnholabfkofncgdfghhggefdb/bad.html";
new_page();
}
		
		}
  );
 
  
