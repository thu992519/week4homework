<?php
   header('Access-Control-Allow-Origin: *');



    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "glass03";

    $acc=$_POST["admin"];
    $admin_password=$_POST["password"];

    try {
        //建立連線
        $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
        //設定錯誤顯示模式
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //設定mysql指令
        $stmt = $conn->prepare("SELECT * FROM admin where admin='$acc' ");
        //執行mysql指令
        $stmt->execute();
        //設定讀取出來的資料轉成陣列array
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $mydata = []; //儲存所以撈取出來的資料
        foreach($stmt->fetchAll() as $key => $v){ //(key, value)
            $mydata[] = $v;
        }
        // echo $mydata ;  
        // echo json_encode($mydata[0]['password']);
        if($mydata[0]['password']== $admin_password){
            echo json_encode($mydata[0]['password']);
        }else{
            echo '失敗';
        }
        
    } catch (PDOException $e) {
        echo '連線錯誤' . $e->getMessage();
    }


    ?>