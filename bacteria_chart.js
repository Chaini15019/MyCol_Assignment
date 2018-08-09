$(document).ready(function(){

	$.ajax({
		//crossOrigin:true,
		url : "http://localhost/mycol_Assignment/bacteria_data.php" ,
		type: "GET",
		success : function(data)
		{

				console.log(data);
				//console.log(data1);

				var count = {

					bacteria_name :[],
					bacteria:[]
				};

				var len1 = data.length;

				for(var i=0;i<len1;i++)
				{
					count.bacteria_name.push(data[i].bacteria);
					count.bacteria.push(data[i].num);
				}

				
				var bacteria_data = {
					labels : count.bacteria_name,

					datasets : [
							{

									label: "Bacteria Count",
									data :count.bacteria,

									backgroundColor :[
									"#FF0000",
									"#FFB6C1",
									"#FFA500",
									"#FFFF00",
									"#FFDAB9",
									"#BDB76B",
									"#708090"
									],
									borderWidth :[1,1,1,1,1,1,1],
									hoverBorderColor :[
									"#000000",
									"#000000",
									"#000000",
									"#000000",
									"#000000",
									"#000000",
									"#000000",
									]
							}]
					};
				var options ={
					title: {

						display:true,
						position:"top",
						text : "Bacteria Chart",
						fontSize: 30,
						fontColor :"#111"
					}
				};
				
				var ctx1 = $("#canvas-for-bacteria");

				var chart1 = new Chart (ctx1, {
					type : 'doughnut',
					data: bacteria_data ,
					options: options
				});

			 
		},
		error: function(data){

			console.log(data);
		}
	});

}) 