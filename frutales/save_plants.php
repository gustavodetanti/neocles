<?php
$f='plants.json';
if(isset($_GET['filename'])){
$f=$_GET['filename'];
}
$data = file_get_contents('php://input');
file_put_contents($f, $data);
echo json_encode(["status" => "success"]);
?>
