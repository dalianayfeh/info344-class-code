<<<<<<< HEAD
<h1> Possible Matches </h1>
<ul>
    <?php foreach($matches as $match):
    //html entities sanitizes txt to turn it into txt
    ?>
     <li> 
         <?= htmlentities($match['primary_city']) ?>
         <?= htmlentities($match['state']) ?>
         <?= htmlentities($match['zip']) ?>
         <?= htmlentities($match['country']) ?>
     </li>
     <?php endforeach; ?>
=======
<h1>Possible Matches</h1>
<ul>
    <?php foreach($matches as $match): ?>
    <li>
        <?= htmlentities($match['primary_city']) ?>,
        <?= htmlentities($match['state']) ?>
        <?= htmlentities($match['zip']) ?>
        <?= htmlentities($match['country']) ?>
    </li>
    <?php endforeach; ?>
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
</ul>