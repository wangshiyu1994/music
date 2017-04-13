/*
* @Author: Administrator
* @Date:   2017-04-11 14:16:16
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-11 14:18:01
*/

'use strict';

window.onload=function(){
	var designWidth =750;/*定义设计尺寸8*/

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size=CW/designWidth*100+"px";
		document.querySelector("html").style.fontSize=size;
}
	fontSize();/*函数运行*/
	window.onresize= fontSize;
}