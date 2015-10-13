var chokidar = require('chokidar');

chokidar.watch('src/**/*.css').on('change', function (path) {
	var time = process.hrtime();
	console.log('[' + Math.round(1000 * time[0] + time[1] / 1000000) + 'ms]: ' + path);
});
