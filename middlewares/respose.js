/**
 * Created by hdumok on 2016/8/5.
 */

"use strict"

export default function *(next) {

	yield next;
	

	if(typeof this.body === "number" || typeof this.body === "string"){
		this.body = {msg : this.body}
	}
}