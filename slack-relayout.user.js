// ==UserScript==
// @name Slack Relayout
// @description Fix Slack layout to work
// @match https://*.slack.com/messages/*
// ==/UserScript==

function log(msg) {
  console.log(`Slack relayout: ${msg}`);
}

document.body.style.minWidth = 0;
log("removed body minWidth");
