var React = require('react');
var {Route, Router, indexRoute, hashHistory} = require('react-router');
//-----------------------------------
var Nav = require('Nav');
//-----------------------------------

var Main = (props) => {
	return(
		<div>
			<Nav></Nav>
			{props.children}
		</div>
	);
}

module.exports= Main;