/**
 * Created by hdumok on 2016/8/5.
 */


"use strict";

export default function (obj, key) {
	if (obj.hasOwnProperty(key)) {
		let value = obj[key];
		delete obj[key];
		return value;
	}

	return null;
};