(function() {

    "use strict";
	// put blackout into the head !
    chrome.runtime.onInstalled.addListener('DOMContentLoaded',function() {
        var s = document.createElement('script');
        s.src = chrome.extension.getURL('blackout-min.js');
        (document.head || document.documentElement).appendChild(s);
        s.onload = function() {
            s.parentNode.removeChild(s);
        };
    });

    // add a button to popup !

    var checkPageButton = document.getElementById('blackout');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("blackout created");
        });

    }, false);


    chrome.runtime.onMessage.addListener(
        function(message, callback) {
            if (message == 'runContentScript'){
                chrome.tabs.executeScript({
                    file: 'contentScript.js'
                });
            }
        });


    // are we listening ? no its broken

    chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.set({
            color: '#222'
        }, function() {
            console.log("Black");
        });

    });



})();