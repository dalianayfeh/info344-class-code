This is some content 
<?php 
$name = 'Dalia'; 
$fullName = $name . ' Nayfeh'; //use . to concatinate Strings

class Person {
    protected $name;
    
    public function __construct($n) { //constructor
        $this->name = $n;
    }
    
    public function getName() {
        return $this->name;
    }
}

function foo($bar) {
    echo "Hey, this is the foo fighting function\n";
}

echo "Hello {$fullName}s\n";
foo('bar'); 
?>
This is some more content