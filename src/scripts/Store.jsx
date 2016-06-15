'use strict';

import { EventEmitter } from 'events';
import Dispatcher from "Dispatcher";

class Store extends EventEmitter {
	constructor() {
		super();
		this.state = require('./data.js');
	}
	getAll() {
		return this.state;
	}
	getLevelData(level) {
		return this.state[level];
	}
	updateContactState(key, value) {
		this.state.content.contact[key] = value;
		this.emit("change");
	}
	messageSended() {
		this.state.content.contact['success'] = 'Thank you for you message';
		this.emit("change");
	}
	messageFailed() {
		this.state.content.contact['error'] = 'There are some problems';
		this.emit("change");
	}

	handleAction(action) {
		switch(action.type) {
			case 'changeTitle':
				this.changeTitle(action.key, action.value);
				break;
			case 'messageSended':
				this.messageSended();
				break;
			case 'messageFailed':
				this.messageFailed();
				break;
			default:
				console.log('There is no action');
		}
		// console.log(action);
	}
}

const store = new Store;
Dispatcher.register(store.handleAction.bind(store));
window.Dispatcher = Dispatcher;
export default store;



//
//
// import Dispatcher from './Dispatcher.jsx';
//
// const GLOBAL_DATA = require('./data.js');
// export var bioData = GLOBAL_DATA;
// const STATE = {
// 	title: 'Contacts',
// 	statement: false
// };
//
// const LISTENERS = [];
//
// export function getState() {
// 	return STATE;
// }
//
// export function addChangeListener(fn) {
// 	LISTENERS.push(fn);
// }
//
// function notify() {
// 	LISTENERS.forEach((fn) => fn());
// }
//
// Dispatcher.listen("new_title", () => {
// 	STATE.title = "NEW contacts";
// 	STATE.statement = true;
// 	notify();
// });