<?php
    $username = $_POST['username'];
    $response;

    if(strlen($username) >= 4) {
        $response = array('valid' => true);
    }
    else {
        $response = array('valid' => false);
    }

    echo json_encode($response);
?>