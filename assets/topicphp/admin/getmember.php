<?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type, admintest');

require 'adminset.php';

try {
    //建立連線
    $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
    //設定錯誤顯示模式
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //設定mysql指令
    $stmt = $conn->prepare("SELECT * FROM member  ");
    //執行mysql指令
    $stmt->execute();
    //設定讀取出來的資料轉成陣列array
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

    $mydata = []; //儲存所以撈取出來的資料
    foreach($stmt->fetchAll() as $key => $v){ //(key, value)
        $mydata[] = $v;
    }
    echo json_encode($mydata);
    
  
    
} catch (PDOException $e) {
    echo '連線錯誤' ;
}


?>