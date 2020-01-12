<?php
    $username = $_POST['username'];
    $pin = $_POST['pin'];

    if($username === 'admin' && $pin === '123') {
        $response = array('valid' => 'true');
    } else {
        $response = array('valid' => 'false');
    }

    echo json_encode($response)
?>