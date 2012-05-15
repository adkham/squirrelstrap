/**
 * Main JS file with component initialization template for Grunt
 */

exports.description = 'Create main JS file.';

// The actual init template.
exports.template = function(grunt, init, done) {

	grunt.helper('prompt', {}, [
		grunt.helper('prompt_for', 'name', 'main'),
		{
			name: 'amd',
			message: 'Use AMD? (yes|no)',
			default: 'yes'
		},
	], function(err, props) {
		grunt.utils._.defaults(props, init.defaults);

		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// All done!
		done();
	});

};