var gulp = require('gulp'); // Load Gulp!
// Now that we've installed the uglify package we can require it:
var uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint');

    
    gulp.task('scripts', ['lint'], function(){ 
      gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./build/js'))
    });

    gulp.task('lint', function(){ 
        return gulp.src(['./js/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    });

    
      gulp.task('default', ['scripts']);
    
    gulp.task('watch', function() {
      gulp.watch('js/*.js', ['scripts']);
   });

   gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
          baseDir: "./"
      }
  }); 
  
  gulp.watch(['*.html','build/css/*.css','build/js/*.js']).on('change',browserSync.reload);
});
  gulp.task('default',['watch','browser-sync']);
  

   //lint
  //  gulp.task('default',['lint','browser-sync']);
  //   gulp.task('lint', function() {
  //   gulp.watch('js/*.js', ['scripts'])
  //  });
  
  
  
  
  
  
  //  var gulp        = require('gulp');
  //  var browserSync = require('browser-sync').create();
   
  //  // Static server
  //  gulp.task('browser-sync', function() {
  //      browserSync.init({
  //          server: {
  //              baseDir: "./"
  //          }
  //      });
  //  });

//   gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });





   // gulp.task('default', function(){
//   gulp.src('./js/*.js') // What files do we want gulp to consume?
//     .pipe(uglify()) // Call the uglify function on these files
//     .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
//     .pipe(gulp.dest('./build/js')) // Where do we put the result?
// });