$(document).ready(function(){

	$.ajax({
		//crossOrigin:true,
		url : "http://localhost/mycol_Assignment/infection_data.php" ,
		type: "GET",
		crossDomain:true,
		datatype:'jsonp',
		success : function(data)
		{ 

				console.log(data);
				//console.log(data1);

				var count = {
					infection_name :[],
					infection :[]
				};

				var len1 = data.length;

				for(var i=0;i<len1;i++)
				{
					count.infection_name.push(data[i].infection);
					count.infection.push(data[i].num);
				}

				var infection_data = {
					labels : count.infection_name,

					datasets : [
							{

									label: "Infection Count",
									data :count.infection,

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
							}

							
					]

				};

				var options ={
					title: {

						display:true,
						position:"top",
						text : "Infection Chart",
						fontSize: 30,
						fontColor :"#111"
					}
				};

				var ctx2 = $("#canvas-for-infection");

				var chart1 = new Chart (ctx2, {
					type : 'pie',
					data: infection_data,
					options: options
				});

			 
		},
		error: function(data){

			console.log(data);
		}
	});
}) 