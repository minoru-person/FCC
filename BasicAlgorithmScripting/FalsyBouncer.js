 /* Ugly Code. version 0.
 
 function bouncer1(arr){
      for(var i=0;i<arr.length;i++){
      
		     var x = arr[i];

	     if(Number.isNaN(x)){
		        arr.splice(i,1);
		     }
		     
		  }

	    for(var i=0;i<arr.length;i++){

		   var x = arr[i];

	     if(x == null){
		        arr.splice(i,1);
		     }
		     
			 }

			     
	      for(var i=0;i<arr.length;i++){

		   		     var x = arr[i];

	        if(x == false){
		           arr.splice(i,1);
		       }
		     
			   }

			  for(var i=0;i<arr.length;i++){

		    		   var x = arr[i];

	     if(x == 0){
		           arr.splice(i,1);
		     }
		     
		     }	   
			     

       console.log(arr);
     }
