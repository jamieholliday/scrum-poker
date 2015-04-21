'use strict';
import React from 'react';
import Cards from './Cards';
import Observer from './Observer';

require('../styles/app.css');

export default class App extends React.Component {
	constructor() {
		super();
	}

	toggleObserver() {
		//set this user to be an observer
		console.log('toggle observer');
	}
	cardSelected(name) {
		console.log('cards selected ' + name);
	}
	render() {
		return (
			<div>
				<div className="col-left">

				</div>
				<div className="vol-right">
					<Cards cardSelected={this.cardSelected}/>
					<Observer toggleObserver={this.toggleObserver}/>
				</div>
			</div>
		);
	}
}
