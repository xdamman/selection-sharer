//add jquery to head
var jquery = document.createElement('script'); 
jquery.src = chrome.extension.getURL('jquery-2.1.4.min.js');
document.head.appendChild(jquery);



jquery.onload = function() {

	var css = document.createElement('link');
	css.rel = "stylesheet";
	css.href = chrome.extension.getURL('selection-sharer.css');
	document.head.appendChild(css);
   //add selection sharer to end of body
	var script = document.createElement('script'); 
	script.src = chrome.extension.getURL('selection-sharer.js');
	document.body.appendChild(script);

	script.onload = function() {
		s = document.createElement('script'); 
		s.innerHTML = "$('p').selectionSharer();";
		document.body.appendChild(s);
	};
};


