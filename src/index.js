console.log('woohoo!');

import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
	<div>
		<h1>This is App!@</h1>
		<h3>It really is</h3>
	</div>
);

ReactDom.render(<App/>, document.getElementById('root'));
