// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: 'lib/jquery-3.1.0.min.js',
        underscore: 'lib/underscore-min.js'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main', 'app/messages'], function (main) {
    main.a();
    console.log('loaded');
});
