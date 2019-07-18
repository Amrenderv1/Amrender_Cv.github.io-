 




$(document).ready(function()
	{

	//alert("hiiii");
	
	$("#gname").keyup(function(){
		var name=document.getElementById("gname").value;
		
		if(name.match(/^[0-9]+$/)){
			 document.getElementById("nm").innerHTML="Name must be in string format..";
			 $("#nm").show(1000);
		}
		else{
			 $("#nm").hide(1000);
		}
		
	});
		$("#fname").keyup(function(){
			var name=document.getElementById("fname").value;
			
			if(name.match(/^[0-9]+$/)){
				 document.getElementById("fnm").innerHTML="FatherName must be in string format..";
				 $("#fnm").show(1000);
			}
			else{
				 $("#fnm").hide(1000);
			}
			
		});
			$("#hname").keyup(function(){
				var name=document.getElementById("hname").value;
				
				if(name.match(/^[0-9]+$/)){
					 document.getElementById("hnm").innerHTML=" HusbandName must be in string format..";
					 $("#hnm").show(1000);
				}
				else{
					 $("#hnm").hide(1000);
				}
				
				
			});
				
	$("#contact").keyup(function(){
		
		var phone=document.getElementById("contact").value;
		
	 if(phone.match(/^[a-zA-Z() ]+$/)){
		 document.getElementById("cn").innerHTML="Please enter numaric value..";
		 $("#cn").show(1000);
	 }
	 else{
		 $("#cn").hide(1000);
	 }
	 });
$("#AcontactNo").keyup(function(){
		
		var phone=document.getElementById("AcontactNo").value;
		
	 if(phone.match(/^[a-zA-Z() ]+$/)){
		 document.getElementById("acn").innerHTML="Please enter numaric value..";
		 $("#acn").show(1000);
	 }
	 else{
		 $("#acn").hide(1000);
	 }
	 });
	
	
	$("#cname").keyup(function(){
		var name=document.getElementById("cname").value;
		
		if(name.match(/^[0-9]+$/)){
			 document.getElementById("cnm").innerHTML=" CompanyName must be in string format..";
			 $("#cnm").show(1000);
		}
		else{
			 $("#cnm").hide(1000);
		}
		
	});
	
	$("#clocation").keyup(function(){
		var name=document.getElementById("clocation").value;
		
		if(name.match(/^[0-9]+$/)){
			 document.getElementById("cloc").innerHTML="Name must be in string format..";
			 $("#cloc").show(1000);
		}
		else{
			 $("#cloc").hide(1000);
		}
		
	});
	
	
	
	$("#designation").keyup(function(){
		var desig=document.getElementById("designation").value;
		
		 if(desig.match(/^[0-9]+$/)){
			 document.getElementById("des").innerHTML="Designation must be in string format...!";
			 $("#des").show(1000);
		}
		 else{
		 $("#des").hide(1000);
		 }
	});

	$("#relationship").keyup(function(){
		var name=document.getElementById("relationship").value;
		
		if(name.match(/^[0-9]+$/)){
			 document.getElementById("rel").innerHTML="Name must be in string format..";
			 $("#rel").show(1000);
		}
		else{
			 $("#rel").hide(1000);
		}
		
	});
$("#officephoneno").keyup(function(){
		
		var phone=document.getElementById("officephoneno").value;
		
	 if(phone.match(/^[a-zA-Z() ]+$/)){
		 document.getElementById("oph").innerHTML="Please enter numaric value..";
		 $("#oph").show(1000);
	 }
	 else{
		 $("#oph").hide(1000);
	 }
	 });
$("#aincome").keyup(function(){
	
	var phone=document.getElementById("aincome").value;
	
 if(phone.match(/^[a-zA-Z() ]+$/)){
	 document.getElementById("aic").innerHTML="Please enter numaric value..";
	 $("#aic").show(1000);
 }
 else{
	 $("#aic").hide(1000);
 }
 });
$("#aexp").keyup(function(){
	
	var exp=document.getElementById("aexp").value;
	
 if(exp.match(/^[a-zA-Z() ]+$/)){
	 document.getElementById("aexpp").innerHTML="Please enter numaric value..";
	 $("#aexpp").show(1000);
 }
 else{
	$("#aexpp").hide(1000);
 }
 });
    
		     });

