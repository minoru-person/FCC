 /* Rewrote Code. version 0.1
 
function bouncer1(arr){
    var arr1 = [];
    for(var i=0;i<arr.length; i++){
	var x = Boolean(arr[i]);
				
	if(x){
          arr1.push(arr[i]);
	}
     }
     
     console.log(arr1);
}

     bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]
     bouncer(["a","b","c"]);            // ["a","b", "c"]
     bouncer([false, null, 0, NaN, undefined, ""]); // []
     bouncer([1,null,NaN,2,undefined]);   // [1,2]
