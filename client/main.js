const React = require('react');
const ReactDom = require('react-dom');

const Main = React.createClass({
	render: function() {
		return (
			<div>
				Hello World
			</div>
		)
	}
})

ReactDom.render(<Main />, document.getElementById('app'))