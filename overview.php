 <?php $bookids= 
  ["BEME"
  ,"FEEL"
  ,"SPEAK"
  ,"LOVEME"
  ,"STOP"
  ,"GO"
  ,"THEIDO"
  ,"LIFE"
  ,"NOTLIFE"
  ,"ITTS"]
  ?>




  <ul class="icons">
  <?php for ($i=0; $i < sizeof($bookids); $i++) { 
if ($bookids[$i]=='ITTS') { ?>
    <li class="icon-container"  id='<?php echo $bookids[$i]; ?>'> 
        <img src="images_web/<?php echo $bookids[$i]; ?>icon.gif" alt="<?php echo 'book ' . $bookids[$i] ?>">
    </li>
<?php }
else if($bookids[$i]=='GO'){ ?>
<a href="./books/GO.pdf"><li class="icon-container"  id='<?php echo $bookids[$i]; ?>'> 
        <img src="images_web/<?php echo $bookids[$i]; ?>icon.png" alt="<?php echo 'book ' . $bookids[$i] ?>"></a>
      </li>
 <?php } else { ?>

      <li class="icon-container"  id='<?php echo $bookids[$i]; ?>'> 
        <img src="images_web/<?php echo $bookids[$i]; ?>icon.png" alt="<?php echo 'book ' . $bookids[$i] ?>">
      </li>
  <?php } ?>
   <?php } ?>

  </ul>