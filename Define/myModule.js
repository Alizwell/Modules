var myModule = (function(){
	var modules = {};

	function define( name, deps, impl ){
		for( var i = 0 ; i < deps.length; i++ ){
			deps[i] = modules[ deps[i] ];
		}
		modules[ name ] =  impl.apply(impl, deps );
	}

	function get(name){
		return modules[name];
	}

	return {
		get: get,
		define: define
	}
})();


myModule.define('foo',[],function(){
	function add(x,y){
		return x+y;
	}
	function say(){
		console.log("I am module foo");
	}
	return {
		add: add,
		say: say
	}
})


myModule.define('bar',['foo'],function(foo){
	function say(word) {
		foo.say();
		console.log(word);	
	}
	return {
		say: say
	}
})

myModule.get('bar').say('123');