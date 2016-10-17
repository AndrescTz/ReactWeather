var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
	return (
		<div>
			<h2>Navigation Bar</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink><span>|</span>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get About</Link><span>|</span>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Examples</Link>
		</div>
	);
}

module.exports = Nav;