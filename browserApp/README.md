
# Release Process

From inside bower directory run

bower install

From grunt run

npm install

grunt

[Grunt tasks]
'clean:pre'
Description: erase temp and build dirs
 
'copy:pre'
Description: copy files from public/app to the temp
 
'turnOffPotatoDeclaration'
Description: switch directive/controller/factory files from lazy-loading to regular angular declarations (is required for annotation)
 
'ngAnnotate:tmp'
Description: without this step minification is impossible
 
'turnOnPotatoDeclaration'
Description: switch back to lazy-loading
 
'adjustTemplateUrls', 
Description: adjust templateUrl values: from 'app/modules/misc/lockscreen.html' to 'build/modules/misc/lockscreen.html'
 
'html2js'
Description: concatenate all *.tpl.html template to one angular module 
 
'addIncludes'
 Description: additional includes for build (templates from prev step)
 
'uglify',
Description: minification
 
'requirejs',  
Description: r.js on temp/main.js to build/main.js dir. requirejs-compile-skip.json is used to exclude files from build (useful for cdn and reduce compiled file. If not used, all required in main.js plugin files will be included to build file)
 
'copy:post'
Description: copy lazy minified files to build dir
 
'clean:post'
Description: erase temp



The correct way to define controllers and servers

Create a file somewhere
Define it in includes.js (path/to/component/componentName')
componentName.js should look like something like this:
define(['app'], function(app) {
    "use strict";
 
     return app.controller("ActivitiesCtrl", ActivitiesCtrl);
 
   
    function ActivitiesCtrl($scope) {
 
    }
 
});
 
The new created component should refer to 'app' and you should define controller as app.controller
 
 
