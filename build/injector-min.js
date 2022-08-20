!function(){"use strict";
// put blackout into the head !
// add a button to popup !
var e;chrome.runtime.onInstalled.addListener("DOMContentLoaded",function(){var e=document.createElement("script");e.src=chrome.extension.getURL("blackout-min.js"),(document.head||document.documentElement).appendChild(e),e.onload=function(){e.parentNode.removeChild(e)}}),document.getElementById("blackout").addEventListener("click",function(){chrome.tabs.getSelected(null,function(e){alert("blackout created")})},!1),chrome.runtime.onMessage.addListener(function(e,t){"runContentScript"==e&&chrome.tabs.executeScript({file:"contentScript.js"})}),
// are we listening ?
chrome.runtime.onInstalled.addListener(function(){chrome.storage.sync.set({color:"#3aa757"},function(){console.log("The color is green.")})})}();
//# sourceMappingURL=injector-min.js.map