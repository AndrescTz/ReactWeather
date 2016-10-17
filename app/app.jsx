//This is when we are using modules and not add references on index.html
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
//-----------------------------------------------------------------------------------------------------

//Adding references to components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
//-----------------------------------------------------------------------------------------------------

/*
var obj = {
	name: 'Andrew'
}

var {name} = obj; 
*/

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);

