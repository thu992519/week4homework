<?php
require 'dbopen.php';

$sql = "SELECT * FROM admin WHERE 1";
$result = mysqli_query($link, $sql);

// 檢查是否有結果
if ($result) {
    $data = mysqli_fetch_assoc($result);
    // 將關聯數組轉換為 JSON 字符串
    $jsonData = json_encode($data);
    echo $jsonData;
} else {
    echo "Error in query: " . mysqli_error($link);
}
?>