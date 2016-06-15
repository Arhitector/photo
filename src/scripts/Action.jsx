'use strict';

import Dispatcher from 'Dispatcher';

export function sendMessage(objData) {
	//send data to server and get response
	var response = 201;
	var actionType = '';
	if (response === 200) {
		actionType = 'messageSended';
	} else {
		actionType = 'messageFailed';
	}
	Dispatcher.dispatch({
		type: actionType
	});
}