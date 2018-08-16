<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
header('Content-Type: application/json');

define('DB_HOST','127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD','password');
define('DB_NAME','mycol');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli)
{
	die('Connection Failed.');

}

$query = sprintf(" SELECT reg_date, COUNT(*) as num from infection GROUP BY reg_date ");


$result = $mysqli->query($query);

$data = array();
foreach ($result as $row){
	$data[] = $row;	
}

$result -> close();

$mysqli -> close();

print json_encode($data);


?>
