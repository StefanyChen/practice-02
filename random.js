(function(global){
	/*global.RandomGenerator=function(a){
		this.min=a.min;
		this.max=a.max;
		this.times=a.times;
		this.count=0;
	
		this.hasNext = function(){
			if(this.count<this.times){
				this.count++;
				return true;
			}else{
				return false;
			}
		}

		this.callback=function(a){
			var res=JSON.parse(this.responseText);
			console.log (res.result.random.data[0]);
		}

		this.get=function (callback){
			var sreq={
				"jsonrpc":"2.0",
				"method":"generateIntegers",
				"params":{
					"apiKey":"75722141-629d-4d1b-a32d-6b930e3570a4",
					"n":1,
					"min":this.min,
					"max":this.max,
					"replacement":true,
					"base":10
					},
				"id":12616
				}
			var req=new XMLHttpRequest();
			req.open("post","https://api.random.org/json-rpc/1/invoke");
			req.send(JSON.stringify(sreq));
			req.onload=callback;
		}
	}*/
	global.RandomGenerator=function(a){
		this.datas=a.datas;
		this.times=a.times;
		this.count=0;
	
		this.hasNext = function(){
			if(this.count<this.times){
				this.count++;
				return true;
			}else{
				return false;
			}
		}
	
		this.checkcheck=function(arr,w){
			for(var i=0;i<arr.length;i++){
				if(arr[i]==w)
					return false;
				else
					continue;
			}
			return true;
		}
		this.check=[];
		this.ran=function(){
			this.which= Math.floor(Math.random()*(this.datas.length-1));
		}
			this.get = function(){
				this.ran();
				while((this.checkcheck(this.check,this.which))==false){
					this.ran();
				}
				this.check.push(this.which);
				return (this.datas[this.which]);
			}
		}
//實作 RandomGenerator
//隨機的部分採用 https://www.random.org/clients/ 提供的API

}(window));

//1. 隨機產生5個數字介於10到100之間(上下皆包含)
/*var first_generator = new RandomGenerator({
*	min : 10,
*	max : 100,
*	times : 5
*});
*while(first_generator.hasNext()){
*	first_generator.get(first_generator.callback);
}*/

//2. 隨機從給予的資料中選取5個不重複的結果
var second_generator = new RandomGenerator({
	datas : ['a','b','c','d','e','f','g','h','i','j','k'],
	repeat : false,
	times : 5
});

while(second_generator.hasNext()){
	console.log(second_generator.get());
}
