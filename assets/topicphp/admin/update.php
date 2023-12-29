<?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type, admintest');

require 'adminset.php';

$inputJSON = file_get_contents('php://input');

// 解码 JSON 数据
$data = json_decode($inputJSON, true);



    $id=$data["m_id"];
    $name=$data["m_pname"];
    $city=$data[" m_city"];
   

try {
    //建立連線
    $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
    //設定錯誤顯示模式
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //設定mysql指令
    $stmt = $conn->prepare("UPDATE member SET name='$name', city='$city' WHERE ID='$id'");
    //   $updateSql = "UPDATE members SET name='$dname', tel='$dtel', cid='$dcid' WHERE ID='$dID'";
    //執行mysql指令
    $stmt->execute();
    //設定讀取出來的資料轉成陣列array
   
    
  
    
} catch (PDOException $e) {
    echo '連線錯誤' ;
}


?>