var React = require('react');

//var About = React.createClass({
//	render: function(){
//		return (
//			<h3>About Component</h3>
//		);	
//	}
//});


var About = (props) => {
	return (
		<div>
			<h3>About Component</h3>
			<p>Welcome to About page</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			   Laboriosam impedit, assumenda fugit harum dolor fuga corporis 
			   similique. Ut est blanditiis aut vero ipsa, quisquam 
			   voluptatum doloremque aperiam, veritatis consequatur, maiores.</p>
		</div>
	);
};

module.exports = About;