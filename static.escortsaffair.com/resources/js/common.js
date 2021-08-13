var photoSize=12;var videoCount=1;var gMkey="*******";function eraseCookie(name){createCookie(name,"",-1);}
function pickRegion(homelink){eraseCookie('a_region');eraseCookie('a_pathname');}
function createCookie(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else{expires="";}
var hostname=window.location.hostname.slice(window.location.hostname.indexOf('.')+1);document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+expires+";domain="+hostname+"; path=/";}