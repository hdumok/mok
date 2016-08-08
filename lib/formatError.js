/**
 * Created by hdumok on 2016/8/5.
 */


"use strict";

export default function (errors) {
	let body;
	for (let e in errors[0]) {
		body = {msg: errors[0][e]};
	}

	return body;
};