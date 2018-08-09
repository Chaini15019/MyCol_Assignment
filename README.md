# MyCol_Assignment
The main approach applied in this assignment is the moduler progarmming which makes the code easy to debug and much more simpler to maintain. For each grapg different php files and javascript files has been made and then incorporated in the html file. Reason for using this approach is that this makes working on different queries mutually exclusive.
Basic Procedure:
  The assignment has been completed using Javascript and PHP.
  The database has been created on local host and the queries are fetched using php. 
  The data of the query is then send to the javascript file.
  Chart.js along with jquery is used. 
  CDN for chart and jquery has NOT been used. The files have been uploaded.
  
  
  Various files:
  Main_html.html:
  This file contains the html code. This file incorporates all the javascript files which have been used to draw the pie chart on the       canvas defined in the html file.
  
  default.css
  This is a css file which defines classes for the different divisions created in the html file.
  
  bacteria_data:
  This is the php file to run the query that gives me the count of people affected by different bacteria. The resultant rows are first collected in the variable result and then the data is stored in the array named data which is send to the bacteria_chart.js file.
  
  infection_data:
  This is the php file to run the query that gives me the count of people affected by different infection. The resultant rows are first collected in the variable result and then the data is stored in the array named data which is send to the bacteria_chart.js file.
  
  patient_data:
  This is the php file to run the query that gives me the count of people registered on different dates. The resultant rows are first collected in the variable result and then the data is stored in the array named data which is send to the bacteria_chart.js file.
  
  infection_chart, patient_record, bacteria_chart :
  These files contain the javascript code which takes the data from php file and and create different types of charts
  infection_chart creates pie chart showing the people affected by different infections
  
  patient_record displays the line graph showing number of patient registered on a particular date
  
  bacteria_chart : shows the doughnut shart showing the number of people affected by different types of bacteria.
  
  
