<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 3600");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit();
}
// hardcoded example
if (!isset($_GET['level'])) {
    exit ('[]');
}
$level = $_GET['level'];

switch ($level) {
    case 1:
        $result = '[
                        {"id":1, "username":"john", "score": 4214123},
                        {"id":2, "username":"ana", "score": 4100023},
                        {"id":3, "username":"josh", "score": 3100120},
                    ]';
        break;
    case 2:
        $result = '[
                        {"id":1, "username":"peter", "score": 3244425},
                        {"id":1, "username":"ray", "score": 2243426},
                        {"id":1, "username":"josh", "score": 1223421},
                    ]';
        break;
    case 3:
        $result = '[
                        {"id":1, "username":"clark", "score": 2343824},
                        {"id":2, "username":"ray", "score": 2246274},
                        {"id":3, "username":"john", "score": 2140024},
                    ]';
        break;
    
    default:
        $result = '[]';
        break;
}

echo $result;

?>