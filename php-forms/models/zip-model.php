<?php
class Zips {
    protected $conn;
    
    public function __construct($conn) {
        $this->conn = $conn;
    }
    
    public function search ($q) {
        $sql = 'select * from zips where zip =? or primary_city=?';
        $stmt = $this->conn->prepare($sql);
//        var_dump($stmt);
        $success = $stmt->execute(array($q, $q));
        if (!$success) {
            trigger_error($stmt->errorInfo());
        } else {
            return $stmt ->fetchAll();
            
        }
    }
}
?>