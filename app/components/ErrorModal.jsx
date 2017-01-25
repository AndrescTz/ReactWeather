var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title:'Error',
    }
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
                Okay
            </button>
          </p>
      </div>
    );

    //Transfor jsx to jquery elemnt
    //ReactDOMServer.renderToString to pass jsx to string
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    //Error appears when if we handle modal on render, Foundation manipulates
    //DOM and React drops error. To solve this issue we pass all component
    //inside 'componentDidMount' and insert JSXModal using jquery
    return(
      <div>
      </div>
    );
  }

});

module.exports = ErrorModal;
