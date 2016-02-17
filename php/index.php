<<<<<<< HEAD
<?php 
=======
<?php
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
$url = parse_url($_SERVER['REQUEST_URI']);
$name = substr($url['path'], 1);
if (strlen($name) == 0) {
    $name = 'World';
<<<<<<< HEAD
} 
$name = 'Dalia'; //use single quotes to be as efficient as possible
=======
}
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
<<<<<<< HEAD
    <title>Hello <?= htmlentities($name) ?> </title>
</head>
<body>
  <h1>Hello <?= $name?></h1>
</body>
</html> 
=======
    <title>Hello <?= htmlentities($name) ?></title>
</head>
<body>
    <h1>Hello <?= htmlentities($name) ?>!</h1>
    
</body>
</html>
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
