<?php 
class Zips {
    protected $conn;
    
    public function __construct($conn) {
        $this->conn = $conn;
    }
    
    public function search($q) { //$q is the query the user types in
       $sql = 'SELECT * from zips WHERE zip=? or primary_city =?';
       $stmt = $this->conn->prepare($sql); //gets sql statement ready to be executed
       $stmt->execute(array($q,$q)); //array replaces ?'s in sql statement...returns is_bool
       if (!$success) {
           trigger_error($stmt->errorInfo());
           return false;
       } else {
           return $stmt->fetchAll();
       }
       
    }
}
?>