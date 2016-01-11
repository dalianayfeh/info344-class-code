<?php
// $random = rand(1, 100);
// echo "your new random value is " . $random . "\n";

date_default_timezone_set();
$days = 30;
$month = date_create('2015-01-01');
$months = date_add($month, strotime($days));
echo $months->format('Y-m-d') . "\n";

?>