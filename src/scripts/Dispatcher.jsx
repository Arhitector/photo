'use strict';

import { Dispatcher } from 'flux';
export default new Dispatcher;

// const LISTENERSes = {};
//
// export default {
// 	listen(action, fn) {
// 		LISTENERSes[action] = LISTENERSes[action] || [];
// 		LISTENERSes[action].push(fn);
// 	},
// 	handleViewAction(action, ...data) {
// 		const FNS = LISTENERSes[action];
// 		if (FNS) {
// 			FNS.forEach((fn) => fn(...data));
// 		}
// 	},
// 	dispatch() {
//
// 	}
// }