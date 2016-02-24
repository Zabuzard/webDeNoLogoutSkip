// ==UserScript==
// @name        webDeNoLogoutSkip
// @namespace   Zabuza
// @description Skips the remind logout window of web.de if user not logged out
// @include    *navigator.web.de/remindlogout*
// @version     1
// ==/UserScript==

function doIt() {
	var spanButton = document.getElementById("button");
	var anker = spanButton.getElementsByTagName("a")[0];
	eventFire(anker, "click");
}

function eventFire(el, etype) {
	if (el.fireEvent) {
		(el.fireEvent('on' + etype));
	} else {
		var evObj = document.createEvent('Events');
		evObj.initEvent(etype, true, false);
		el.dispatchEvent(evObj);
	}
}

//window.onload = doIt;
doIt();