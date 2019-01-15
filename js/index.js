var d=1;
var newlyaddedrows=[];
$(document).ready(function(){


	$("#addr1").click(function(){
		
		if(d==1)
		{
			$("tfoot").append('<tr><td colspan="4"></td><td><input type="button" type="button" class="btn btn-success form-control pull-right" onclick="pushchange()" value="PUSH CHANGES"/></td></tr>');
			d=0;
		}
		
		var b=$("tbody").children().index();
		console.log(b);
		$("tbody").append("<tr id='r"+(b+2)+"'><td>"+(b+2)+"</td><td><span></span><span hidden><input type='text' value=''  /></span></td><td><span></span><span hidden><input type='text' value=''  /></span></td><td><span></span><span hidden><input type='text' value=''  /></span></td><td><input type='button'  class='btn btn-danger form-control extra' value='REMOVE' onclick='remrow("+(b+2)+")'></td></tr>");
		
		newlyaddedrows.push((b+2));
		
	});

	
	$(document).hammer().on("dblclick tap doubletap","td",function(){ 
	
		
		var t=$(this).index();
		//console.log(t);
		
		var parid=$(this).parent().attr('id');		
			$("#"+parid).find("td:eq("+t+") span:nth-child(1)").hide();
			$("#"+parid).find("td:eq("+t+") span:nth-child(2)").show();
			$("#"+parid).find("td:eq("+t+") span:nth-child(2)").find("input").focus();
		
		
	});
	
	
	
	$(document).hammer().on("focusout","td span input",function(){ 
	
	
			//console.log($(this));
			var th=$(this).parent().parent().index();
			//console.log(th);
			var th2=$(this).parent().parent().parent().attr('id');
	
			//console.log(th2);
		
		
			var innerval=$("#"+th2).find("td:eq("+th+") span:nth-child(2)").find("input[type='text']").val();
			$("#"+th2).find("td:eq("+th+") span:nth-child(1)").html(innerval);
			$("#"+th2).find("td:eq("+th+") span:nth-child(1)").show();
			$("#"+th2).find("td:eq("+th+") span:nth-child(2)").hide();	
	
			var dbid=$("#"+th2).find("td:eq(4)").find("input[type='button']").attr('data-delid');
			//console.log(dbid);
	
	
			var data1=$("#"+th2).find("td:eq(1) span:nth-child(2)").find("input[type='text']").val();
			var data2=$("#"+th2).find("td:eq(2) span:nth-child(2)").find("input[type='text']").val();
			var data3=$("#"+th2).find("td:eq(3) span:nth-child(2)").find("input[type='text']").val();
	
			
			 $.ajax({
				  type:"POST",
				  data:"u1="+dbid+"&data1="+data1+"&data2="+data2+"&data3="+data3+"&task=up",
				  url:"updateedittable.php",  
				  success:function(data) {
					 
				  }
			   });
	
	
	
	});

	
	
	document.querySelector('body').addEventListener('click', function(event) {
		
		if(event.target.className=="btn btn-danger form-control")
		{
			//console.log($("."+event.target.className).attr('data-delid'));	
			var f=confirm("Are you sure to delete this entry?");
			//console.log(f);
			var gh2=event.target.getAttribute('data-delid');
			var gh3=event.target.getAttribute('id');
			
			if(f)
			{
				$("#r"+gh3).remove();	
				$.ajax({
				  type:"POST",
				  data:"u1="+gh2+"&task=del",
				  url:"updateedittable.php",  
				  success:function(data) {
					 
				  }
			   });
				
			}
			
			
		}
			
	});
	
	
	
});

function remrow(z)
{
	//alert(z);
	$("#r"+z).remove();
	var a = newlyaddedrows.indexOf(z);
	if(a!=-1)
	{
		newlyaddedrows[a]='';
	}
	else
	{
		newlyaddedrows[a]='';
	}
}

function pushchange()
{
	var majorarraycounter=0;
	var majorarray=new Array();
	//console.log(newlyaddedrows);
	
	
			//console.log(f);
			
			var tmparay=[];
			for(var n=0;n<newlyaddedrows.length;n++)
			{
				if(newlyaddedrows[n]!="")
				{
					var dataa1=$("#r"+newlyaddedrows[n]).find("td:eq(1) span:nth-child(2)").find("input[type='text']").val();
					var dataa2=$("#r"+newlyaddedrows[n]).find("td:eq(2) span:nth-child(2)").find("input[type='text']").val();
					var dataa3=$("#r"+newlyaddedrows[n]).find("td:eq(3) span:nth-child(2)").find("input[type='text']").val();
					if(dataa1=="" && dataa2=="" && dataa3=="")
					{
						alert("Some values are left blank");
						return;
					}
					tmparay.push(dataa1,dataa2,dataa3);
					majorarray[majorarraycounter]=tmparay;
					tmparay=[];
					majorarraycounter++;
				}
				
			}
			
			//console.log(majorarray);
			var f2=confirm("Are you sure you want to reflect added rows into the database?");
			if(f2)
			{
				
				var jsd=JSON.stringify(majorarray);
				console.log(jsd);
				$.ajax({
				  type:"POST",
				  data:"tis="+jsd,
				  url:"updateedittable.php",  
				  success:function(data) {
					 //console.log(data);
					 alert("Changes are added to the database");
					 location.reload();
				  }
			   });
			}
	
}