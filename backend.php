<?php
session_start();

if ($_POST['username'] === 'admin' && $_POST['password'] === 'modtech123') {
    $_SESSION['user'] = 'admin';
    echo json_encode(['status' => 'success', 'role' => 'admin']);
} else {
    echo json_encode(['status' => 'fail']);
}
?>
