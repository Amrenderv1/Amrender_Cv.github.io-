$(document).ready(function()
	{
	var s;
	var interest_rate;
	var loantypeid;
	/*$.ajax({
		url:"../CustomerAction",
		type:"GET",
		async:true,
		success:function(data){
		var a="<option>Select Customer Name </option>";
		$.each(data,function(k,v){
			a+="<option value="+k+">"+v+"</option>";
		});
		$("#customer").append(a);
		}
		
	});*/
	
	
	$.ajax({
		url:"../GetLoanTypeAction",
		type:"GET",
		async:true,
		success:function(data){
			var b="<option> Select LoanType </option>"
				$.each(data,function(k,v){
	
			b+="<option value="+v.interestRate+">"+v.loanName+"</option>";		
		});
			

		$("#loantype").append(b);
		}
	});
	

	$.ajax({
		url:"..//BankDetails",
		type:"GET",
		async:true,
		success:function(data){
			var option = "<option>Select Bank Name</option>";
				$.each(data,function(k,v){
					
				
	
					option += "<option value="+v.bankId+">"
					+ v.bankName + "</option>";
					
		});
				$("#bankdetails").append(option);
		}
	});
	

	$("#loantype").on("change",function() {
		 interest_rate=$("#loantype").val();
		$("#loaninterest").val(interest_rate);		
		principal=$("#loanamount").val();
		   rate=$("#loaninterest").val();
			
	
			   var x=100*12;
			   rate=rate/x;
			   period=$( "#period" ).val();
			   rate1=Math.pow((1+rate),period);
			  
			   
			   emi=Math.round(((principal*rate)*rate1)/(rate1-1));
		   
		   $("#emi").val(emi); 
		   
		   
		   
			totalLoanAmaount=(period*emi);
			$("#totalamount").val(totalLoanAmaount);
	
	});




	 var result=$("#hidden").val();
	 var b="<input type='hidden' value=''>";
	 
	 if(result=="1")
   		$("#result").html("The Loan Applied Successfully");
 	else
		$("#result").html(b);
 

	 $("#aaa").click(function() {

		$("#loantype").keyup(function()
				{
					var val=$("#loantype").val();
					//alert(val);
					if(val==0)
					{
						alert("please select loantype");
						
					}
					
				});

	     if ($("#loaninterest").val() == "") 
	     { 
	    	 alert("Please select Loan Type"); 
	     $("#loaninterest").focus();
	     return false; 
	     }


	     if ($("#purpose").val() == "") 
	     { 
	    	 alert("Please enter purpose of loan"); 
	     $("#purpose").focus();
	     return false; 
	     }


	     if ($("#rdate").val() == "") 
	     { 
	    	 alert("Please enter Require of Date"); 
	     $("#rdate").focus();
	     return false; 
	     }



	

	});
	

		$("#purpose").keyup(function(){
			var name=document.getElementById("purpose").value;
			
			if(name.match(/^[0-9]+$/)){
				 document.getElementById("purpose1").innerHTML="Name must be in string format..";
				 $("#purpose1").show(1000);
			}
			else{
				 $("#purpose1").hide(1000);
			}
			
		});
	
	 
	
	}); 
	
	 
	



