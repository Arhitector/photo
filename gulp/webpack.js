module.exports = function (callback) {
	var webpack 			= require('webpack'),
		named				= require('vinyl-named'),
		gulpUtil 			= require('gulp-util'),
		reload 				= require('browser-sync').reload;

	var options = {
		// context: __dirname + "/src/markups",
		// entry: glob.sync('./src/*.js'),
		entry: './src/markups/index.jsx',
		output: {
			// path: __dirname + "/www/js",
			filename: "index.js",
			// publickPath: '/js/',
			library: "[name]"
		},
		devtool: cfg.isDev ? 'cheap-inline-module-sourcemap' : null,
		resolve: {
			root: cfg.src.markups,
			extensions: JS_FORMATS_ARRAY
		},
		resolveLoader: {
			modulesDirectories: ['node_modules'],
			moduleTemplates: ['*-loader', '*'],
			extensions: JS_FORMATS_ARRAY
		},
		module: {
			loaders: [
				{
					test: /\.jsx/,
					include: [
						/(src\/markups)/,
						/(src\/scripts)/
					],
					loader: 'babel',
					query: {
						presets: ['es2015', 'stage-0', 'react'],
						plugins: [
							'transform-runtime',
							'transform-decorators-legacy'
						]
					}
				}
			]
		},
		plugins: [
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				name: "common",
				minChunks: 2
			})
		]
	};
	return function () {
		return webpack(options, function(err, stats) {
		if (err) throw new gulpUtil.PluginError('webpack', err);
			callback();
		})
		.watch({
			aggregateTimeout: 100
		}, function(err, stats) {
			if (err) throw new gulpUtil.PluginError('webpack', err);

			gulpUtil.log('[webpack]', stats.toString());

			reload();
		});
	};
};