module.exports = new function () {
    var autowatch = require('gulp-autowatch');
    reload = require('browser-sync').reload;

    return function () {
        var htmlCompiler = cfg.htmlCompiler;
        // Watch styles files
        gulp.watch([cfg.src.styles + '/**/*.' + cfg.cssBuilder, cfg.src.markups + '/**/**/*.' + cfg.cssBuilder], ['style', reload]);
        // Watch html compiler files
        gulp.watch([cfg.src.markups + '/*.' + htmlCompiler, cfg.src.markups + '/**/*.' + htmlCompiler], [htmlCompiler, reload]);
        // js
		// gulp.watch([cfg.src.scripts + '/*.' + JS_FORMATS, cfg.src.markups + '/**/**/*.' + JS_FORMATS], [cfg.jsCompiler, reload]);
    };
};