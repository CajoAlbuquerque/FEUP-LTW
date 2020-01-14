<?php
    $id = $_POST['id'];
    
    if(isset($_POST['position'])) {
        play($id, $_POST['position']);
    }
    
    echo json_encode(state($id));
?>