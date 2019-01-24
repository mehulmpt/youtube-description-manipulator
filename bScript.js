chrome.browserAction.onClicked.addListener(function(tab) {

  $.get(chrome.extension.getURL('myPopup.html'), function(data) {
  	console.log(data);

  	chrome.tabs.executeScript(null, {file: "jQuery.js"}, function(){
    chrome.tabs.executeScript(null, {code: "var myOwnHTMLPOPUPYEAH = '"+btoa(data)+"'" }, function(){
        chrome.tabs.executeScript(null, {file: "scriptOnHead.js"}, function(){
	            // lol, nothing to do here!
	        });
	    });
	});
  });
});