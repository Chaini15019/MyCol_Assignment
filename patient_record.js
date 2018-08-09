$(document).ready(function(){

	$.ajax({
		//crossOrigin:true,
		url : "http://localhost/mycol_Assignment/patient_data.php" ,
		type: "GET",
		success : function(data)
		{

				console.log(data);
				//console.log(data1);

				var count = {

					date_data:[],
					patient_num:[]
				};

				var len1 = data.length;

				for(var i=0;i<len1;i++)
				{
					count.date_data.push(data[i].reg_date);
					count.patient_num.push(data[i].num);
				}

				
				var ctx3 = $("#canvas-for-patient");

				var chartData = {
					labels : count.date_data,

					datasets : [
							{

									label: "Patient Registered",
									fill: false,
									lineTension: 0.1,
									backgroundColor:"rgba(59,89,152,0.75)",
									borderColor:"rgba(59,89,152,1)",
									data: count.patient_num
							}

							
					]

				};

				var options ={
					title: {

						display:true,
						position:"top",
						text : " Patient Registered",
						fontSize: 30,
						fontColor :"#111"
					}
				};
				
				var chart1 = new Chart (ctx3, {
					type : 'line',
					data: chartData,
					options:options
				});

			 
		},
		error: function(data){

			console.log(data);
		}
	});
}) 