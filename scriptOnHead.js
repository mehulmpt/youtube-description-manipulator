$(function() {
	$('body').append('<iframe id="myOwnHTMLPOPUPYEAH" style="position: fixed;top: 0;left: 0;bottom: 0;right: 0;width: 100vw;height: 100vh;z-index: 999999999999;"></iframe>');
	document.getElementById('myOwnHTMLPOPUPYEAH').contentWindow.document.write(atob(myOwnHTMLPOPUPYEAH));
});