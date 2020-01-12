<?php
    $products = json_decode($_POST['msg']);
    $counter = 0;

    foreach ($products as $product) {
        foreach ($product as $key => $value) {
            if($key === 'qty') {
                $counter += $value;
            }
        }
    }

    if( $counter > 15 ){
        echo -1;
    } else {
        echo $counter;
    }
?>