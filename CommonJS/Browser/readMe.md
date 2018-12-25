注意：index.html文件要运行在浏览器上，需要借助browserify将app.js文件打包编译，如果直接在index.html引入app.js就会报错！

打包处理js
根目录下运行browserify js/src/app.js -o js/dist/bundle.js

页面使用引入
在index.html文件中引入
<script type="text/javascript" src="js/dist/bundle.js"></script>

