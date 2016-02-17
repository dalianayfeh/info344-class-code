<<<<<<< HEAD
This is some content 
<?php 
$name = 'Dalia'; 
$fullName = $name . ' Nayfeh'; //use . to concatinate Strings
=======
Hey this is some content above the code
<?php
$name = 'Dave';
$fullName = $name . 'Stearns';
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb

class Person {
    protected $name;
    
<<<<<<< HEAD
    public function __construct($n) { //constructor
=======
    public function __construct($n) {
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
        $this->name = $n;
    }
    
    public function getName() {
        return $this->name;
    }
}

function foo($bar) {
<<<<<<< HEAD
    echo "Hey, this is the foo fighting function\n";
}

echo "Hello {$fullName}s\n";
foo('bar'); 
?>
This is some more content
=======
    echo "Hey this is the foo fighting function\n";
}

echo "Hello {$name}s\n";
foo(NULL);
?>
And this is some content below
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
