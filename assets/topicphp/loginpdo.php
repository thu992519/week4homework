<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
 header('Access-Control-Allow-Headers: Content-Type, admintest');

 // 获取原始的 JSON 数据
$inputJSON = file_get_contents('php://input');

// 解码 JSON 数据
$data = json_decode($inputJSON, true);


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "glass03";

    $admin_name=$data["admin"];
    $admin_password=$data["password"];

    try {
        //建立連線
        $conn = new PDO("mysql:host=$servername; dbname=$dbname", $username, $password);
        //設定錯誤顯示模式
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //設定mysql指令
        $stmt = $conn->prepare("SELECT * FROM admin where admin='$admin_name' ");
        //執行mysql指令
        $stmt->execute();
        //設定讀取出來的資料轉成陣列array
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

        $mydata = []; //儲存所以撈取出來的資料
        foreach($stmt->fetchAll() as $key => $v){ //(key, value)
            $mydata[] = $v;
        }
        if( $admin_name!==""&& $admin_password){
                if($mydata[0]['password']== $admin_password){
                            echo json_encode($mydata);
                            // echo 只能字串,要輸出陣列要用print_r;
                        
                        }else{
                            echo '失敗2';
                        }
        }else{
            echo '失敗1';
        }
      
        
    } catch (PDOException $e) {
        echo '連線錯誤' ;
    }


    ?>