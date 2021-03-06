// main.js

(function(){
	require.config({
		baseUrl: 'js/', //基本路径， 出发点在根目录下
		paths: {
			alerter: './modules/alerter',  //此处不能写成alerter.js,会报错
			dataService: './modules/dataService'
		}
	})

	require(['alerter'], function(alerter){
		alerter.showMsg();
	})
})()