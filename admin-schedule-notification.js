        
/*
 * @Author Amit JAVA BATCH30
 * 
 * This file is related to notification for approve weekly schedule at admin side
 */
		
		
		 function getBatchDetails(ele){
		
			 //if any week schedule alredy open then close that one
			 $('#notification-div').remove();
			 
			  $.ajax({
				    url: 'ApproveBatchNotificationAction?action=getBatchDetails&batchDetailsId='+$(ele).attr("id"), 
				    type: 'POST',
				    success: function(data) {
				    	
				    	var maindiv = $("<div id='notification-div' class='col-xs-12 col-sm-10 widget-box' style='z-index:1040 !important;top:10%;left:auto;max-width:90%;overflow:hidden;position:absolute;height:auto !important';background:#F1F1F1 >");
				    	
				    	var firstdiv = $("<div class='widget-header ui-sortable-handle' style='cursor:move;background:black'>");
				    	
				    
				    	
				    	var h5 = $("<h5 class='widget-title smaller' >");
				    	$(h5).html("<b style='color:white;font-size:100%'>"+$(ele).children("b").html()+"</b>");
				        var firstInnerdiv = $("<div class='widget-toolbar'>");
				        
				        var anchor = $("<a href='#'' data-action='close'>");
				        
				        var iconforanchor = $("<i class='ace-icon fa fa-times'>");
				        
				        $(anchor).append(iconforanchor);
				        $(firstInnerdiv).append(anchor);
				        $(firstdiv).append(h5);
				        $(firstdiv).append(firstInnerdiv);
				    	$(maindiv).append(firstdiv);
				    	
				    	var table = $("<table class='table table-striped table-condensed' position:absolute>");
				    	var tableHead = $("<thead ><tr style='color:#6a1b9a'><th>WEEKNO</th><th>FROM DATE</th><th>TO DATE</th><th>SUBJECT</th></tr></thead>");
				    	$(table).append(tableHead);
				    	var tableBody = $("<tbody >");
				    	
				    	//For checking that data is there or not
				    	
				    	var flag = false;
				    	
				    	$.each(data.weekList,function(index , week){
				    		
				    		flag = true;
				    		var tr;
				    		if(index%2 == 0)
				    		   tr = $("<tr style='background:#e1bee7;color:#d32f2f'>");
				    		else
				    		   tr = $("<tr style='background:#ffffff;color:#2962ff'>");
				    		
				    		var weekNameTD = $("<td>");
				    		var fromDateTD = $("<td>");
				    		var toDateTD = $("<td>");
				    		var subjectTD = $("<td>");
				    		
				    		var sub="";
				    		//Itrating through subject array
				    		var counter = 1;
				    		$.each(week.subjectList,function(ind , subject){
				    			sub = sub+subject.subjectName;
				    			if(counter != week.subjectList.length){
				    				sub = sub+", ";
				    			}
				    			counter++;
				    		});
				    		$(weekNameTD).html(week.weekName);
				    		$(fromDateTD).html(week.fromDate);
				    		$(toDateTD).html(week.toDate);
				    		$(subjectTD).html(sub);
				    		
				    		$(tr).append(weekNameTD);
				    		$(tr).append(fromDateTD);
				    		$(tr).append(toDateTD);
				    		$(tr).append(subjectTD);
				    		
				    		$(tableBody).append(tr);
				    	});
				    		
				    		
				    	if(flag==false){
				    		
				    		var msg = "<b style='color:red'>RECORD NOT AVAILABLE</b>"
				    		var tr = $("<tr>");
				    		var td = $("<td colspan='4'>");
				    		$(td).append(msg);
				    		$(tr).append(td);
				    		$(tableBody).append(tr);
				    	}
				    	$(table).append(tableBody);
				    	
				    	var approvalButton = $("<button class='btn btn-sm btn-success btn-white btn-round' onclick='approveSchedule(this)'>");
			    		var approvalIcon = $("<i class='ace-icon fa fa-check bigger-110 green'>");
			    		$(approvalButton).append(approvalIcon);
			    		$(approvalButton).append("Approve");
			    		
			    		var rejectButton = $("<button class='btn btn-sm btn-danger btn-white btn-round' style='float:right' onclick='rejectSchedule(this)'>");
			    		var rejectIcon = $("<i class='ace-icon fa fa-times bigger-110 red2'>");
			    		
			    		$(rejectButton).append(rejectIcon);
			    		$(rejectButton).append("Reject");
			    		
			    		$(approvalButton).attr("id",$(ele).attr("id"));
			    		$(rejectButton).attr("id",$(ele).attr("id"));
			    		
			    		
			    		var tfoot = $("<tfoot style='background:black'>");
			    		
			    		var tr = $("<tr>"); 
			    		var td = $("<td colspan='4'>");
			    		
			    		
			    		$(td).append(approvalButton);
			    		$(td).append(rejectButton);
	                    
			    		//this is use to get batchDetailsId when user will click on reject button
			    		var hiddenSpan = $("<input type='hidden' id='hidden-span' value=''>");
			    		$(hiddenSpan).val($(ele).attr("id"));
			    		$(td).append(hiddenSpan);
			    		
			    		$(tr).append(td);
			    		$(tfoot).append(tr);
			    		
			    		$(table).append(tfoot);
				    	
				    	
				    	$(maindiv).append(table);
				    	
				    	//hidden box to get reason message when any one reject that schedule
				    	var hidbox = $("<input type='hidden' value='' id='hidden-reason'></input>");
				    	$(maindiv).append(hidbox);
				    	$('#page-content').prepend(maindiv);
				    	
				    	//It will make div as draggable and scrollable
				        $(function() {
					        $( "#notification-div" ).draggable().resizable();
					      });
				    },
				    
				    error : function(jqXHR, textStatus, errorThrown) {
			           
			            alert("Text Status :"+textStatus); // this comes back as "error"
			            
			        }
				  });//ajax call
			 
		 }//getBatchDetails
		 
		 //This method is for approveSchedule 
		 
		 function approveSchedule(ele){
			 
			 $.ajax({
				    url: 'ApproveBatchNotificationAction?action=approveSchedule&batchDetailsId='+$(ele).attr("id"),
				    type: 'POST',
				    cache: 'false',
				    beforeSend: function(){
				           $("#loading").dialog('open').html("<p style='color:blue'>Please Wait...</p>");
				        },
				    success: function(data) {
				    
					      $('#notification-div').remove();
					      //get updated notification messages
					    	 getNotification();
					    	 $("#dialog-message-area").html("");
					    	if(data.error != null){
					    		$("#loading").html(data.error);
					    	}else{
					    		$("#loading").html(data.result);
					    	}
					    	
				    },
				    error : function(jqXHR, textStatus, errorThrown) {
			           
			            alert("Text Status :"+textStatus); // this comes back as "error"
			            
			        }
				  });//ajax call
		 }//approveSchedule
		 
		 
		 //This method is for rejectSchedule
		 
		 function rejectSchedule(ele){
			 
			 $("#hidden-reason").val("");
			 $("#reason-text").val("");
             $(".reason-dialog").dialog("open");
			 
			 
		 }//rejectSchedule
		 
		 
		 
		 
		 
		 // Call back function to get notification message in regular interval 
		 
			 function getNotification() {
				       
					  $.ajax({
					    url: 'ApproveBatchNotificationAction?action=getNotification', 
					    cache: 'false',
					    async:false,
					    type:'POST',
					    success: function(data) {
					    
					    	var ul = $("#notification-inner");
					    	$(ul).empty();
					        var counter=0;
					    	  $.each(data.batchList, function(index, notif) {
					    		  counter++;
					    		  var liele=$("<li>");
					    		  var aele=$("<a style='color:blue !important;'>");
					    		  var iele=$("<i>");
					    		
					    		  $(iele).attr("class","btn btn-xs btn-primary fa fa-clock-o");
					    		  $(aele).attr({"id":notif.batchDetailsId,"style":"cursor:pointer","onclick":"getBatchDetails(this)"});
					    		  $(aele).append(iele);
					    		  $(aele).append("PLEASE VERIFY <b style='color:maroon'>"+notif.technologyName+" "+notif.batchName+"</b> WEEK SCHEDULE");
					    		  $(liele).append(aele);
					    		  $(ul).append(liele);
					    		
					    	});
					    	
					    	  $("#notification-outer").html("");
					    	  $("#notification-outer").html(counter);
					    	  
					    	  $("#notification-header").html("");
					    	  var headerpar = $("<i class='ace-icon fa fa-exclamation-triangle'>");
					    	  $("#notification-header").append(headerpar);
					    	  $("#notification-header").append(counter+" Notifications");
					    },
					    complete: function() {
					      // Schedule the next request when the current one's complete
					     ion.sound.play("door-bell");
					      setTimeout(getNotification, 600000);//milli second 1sec=1000 millisecond   10 minutes
					    },
					    error : function(jqXHR, textStatus, errorThrown) {
				           
				            alert("Text Status :"+textStatus); // this comes back as "error"
				           
				        }
					  });//ajax call
					};//getNotification
		 
	    
					$(document).ready(function(){
						
						 ion.sound({
				             sounds: [
				                 {name: "door-bell"}
				             ],
				             path: "swf/",
				             preload: true,
				             volume: 1.0
				         });
						 
						 
						//for loading dialog-message
						 $("#loading").dialog({
							    hide: 'slide',
								show: 'slide',
								autoOpen: false
							});
						
						
						$(".reason-dialog").dialog({
						    autoOpen: false,
						    buttons: { 
						        Ok: function() {
						            $("#hidden-reason").val($("#reason-text").val());
						           
						        },
						        Cancel: function () {
						        	$("#reason-text").val("");
						            $(this).dialog("close");
						        }
						    }
						}).parent().find(".ui-dialog-buttonset button:first").click(function() {
						    
							//This will execute when user will enter OK button of reject dialog box
							
							//This is for validation that whether user has enterd some reason or not for rejection
							if($("#hidden-reason").val() != '' ){
								
								var reasonval = $('#hidden-reason').val();
								
								 $(".reason-dialog").dialog("close");
								 
								 $.ajax({
									    url: 'ApproveBatchNotificationAction',
									    data: {action:"rejectSchedule",
									    	   batchDetailsId:$("#hidden-span").val(),
									    	   reason:reasonval},
									    type: 'POST',
									    cache: 'false',
									    beforeSend: function(){
									           $("#loading").dialog('open').html("<p style='color:blue'>Please Wait...</p>");
									        },
									    success: function(data) {
									    
						
									    	$('#notification-div').remove();
									    	 getNotification();
									    	 if(data.error!=null)
									    	     $('#loading').html("<p style='color:red'>"+data.error+"</p>");
									    	 else
									    		 $('#loading').html("<p style='color:green'>"+data.result+"</p>");
									    	 /*$("#dialog-message-area").html("");
									    	if(data.error != null){
									    		$("#dialog-message-area").html(data.error);
									    	}else{
									    		$("#dialog-message-area").html(data.result);
									    	}
									    	$(".dialog-message-approval").dialog("open");*/
									    },
									    
									    error : function(jqXHR, textStatus, errorThrown) {
								           
								            alert("Text Status :"+textStatus); // this comes back as "error"
								            
								        }
									  });//ajax call 
								 
							}else{
								
							alert("Sorry!!! enter some reason");
						
							}
						  
						    
						});//this is for when user click on OK of reject dialog box
						
						//To call method for getting all notification for first time when page is load
						getNotification();

					});//document.ready()