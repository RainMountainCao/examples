'use strict';

//抽象任务

/*
*	1. LESS编译、压缩、合并
* 2. JS合并、压缩、混淆
* 3. img复制
* 4. html压缩
*/

var gulp = require('gulp');

//1. LESS编译、压缩、合并
var less = require('gulp-less');          //less
var cssnano = require('gulp-cssnano');	  //css压缩

gulp.task('style', function() {
	//执行style任务时自动执行
	gulp.src(['./src/styles/*.less', '!src/styles/_*.less'])
	.pipe(less())      //编译
	.pipe(cssnano())	 //压缩
	.pipe(gulp.dest('dist/styles'))
	.pipe(browerSync.reload({
		stream: true
	}));
});

gulp.task('stylecss', function() {
	//执行style任务时自动执行
	gulp.src(['./src/styles/*.css'])
	.pipe(cssnano())	 //压缩
	.pipe(gulp.dest('dist/styles'))
	.pipe(browerSync.reload({
		stream: true
	}));
});

//2. JS合并、压缩、混淆
var concat = require('gulp-concat');		  //js合并
var uglify = require('gulp-uglify');      //js混淆 压缩

gulp.task('script', function() {
	gulp.src('./src/scripts/*.js')
	.pipe(concat('main.js'))               //合并
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browerSync.reload({
		stream: true
	}));
});

//3. img复制
gulp.task('img', function() {
	gulp.src('./src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browerSync.reload({
		stream: true
	}));
})

//4. html压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html', function() {
	gulp.src('./src/*.html')
	.pipe(htmlmin({collapseWhitespace: true,
								 removeComments: true}))
	.pipe(gulp.dest('dist'))
	.pipe(browerSync.reload({
		stream: true
	}));    //重新加载bowerSync
});

//测试服务器，  监视文件变化
var browerSync = require('browser-sync');
gulp.task('serve', function() {
	browerSync({
		server: { 
			baseDir: ['dist']
		}
	}, function(err, bs) {
			console.log(bs.options.getIn(["urls", "local"]));
	});

	gulp.watch('./src/styles/*.less', ['style']);
	gulp.watch('./src/styles/*.css', ['stylecss']);
	gulp.watch('./src/scripts/*.js', ['script']);
	gulp.watch('./src/images/*.*', ['img']);
	gulp.watch('./src/*.html', ['html']);
});