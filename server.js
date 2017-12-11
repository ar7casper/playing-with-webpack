const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 4200;

const env = process.env.NODE_ENV;
console.log('env', env);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


if (env === 'development') {

	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config');
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath // Same as `output.publicPath` in most cases.
	}));
	app.use(webpackHotMiddleware(compiler));
}



app.use('/', (req, res) => {
	console.log("I'm in");
	res.render('index');
});


app.listen(port, (err) => {
	if (err) {
		console.log('err', err);
	}

	console.log(`App listening on port - ${port}`);
});