/**
 * Created by hdumok on 2016/8/5.
 */

"use strict";

let controller = {}

controller.get = function *(next) {
	this.log("log")
	this.debug("debug")
	this.error("error")
	
	this.body = 'hello';
};

export default controller;