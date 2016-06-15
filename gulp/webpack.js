
var webpack 			= require('webpack'),
	named				= require('vinyl-named'),
	gulpUtil 			= require('gulp-util'),
	reload 				= require('browser-sync').reload;

var options = {
	// context: "./src/markups",
	entry: {
		common: './' + cfg.src.scripts + '/common',
		index: './' + cfg.src.markups + '/index'
	},
	output: {
		path: "./" + cfg.dest.scripts,
		filename: "[name].js",
		// publickPath: '/js/',
		library: "[name]"
	},
	devtool: cfg.isDev ? 'cheap-inline-module-sourcemap' : null,
	resolve: {
		modulesDirectories: ['node_modules', cfg.src.scripts],
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
				test: /\.jsx$/,
				include: [
					/(src\/markups)/,
					/(src\/scripts)/
				],
				loader: 'babel-loader',
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
gulp.task('webpack', function (callback) {
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
});