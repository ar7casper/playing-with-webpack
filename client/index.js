import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component => (
	<Component/>
);

ReactDOM.render(render(App), document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}