<?php
function getConnection() {
 //   require_once 'secret/db-credentials.php';
    
    try {
        $dbConn = new PDO("mysql:host=159.203.233.236;dbname=info344chat", "info344student", "***");
        
        return $dbConn;
        
    } catch(PDOException $e) {
        die('Could not connect to database ' . $e);
    }
}

?>