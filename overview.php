 <?php $bookids= 
  ["BEME"
  ,"BEME2"
  ,"FEEL"
  ,"FEEL2"
  ,"STOP"
  ,"GO"
  ,"THEIDO"
  ,"ITTS"
  ,"SPEAK"
  ,"LIFE"
  ,"LIVING"] ?>




  <ul class="icons">
  <?php for ($i=0; $i < sizeof($bookids); $i++) { ?>
      <li class="icon-container"  id='<?php echo $bookids[$i]; ?>'> 
        <img src="images_web/<?php echo $bookids[$i]; ?>icon.gif" alt="BE better with your alt text">
      </li>
  <?php } ?>
  <!-- 
      <li class="icon-container"  id='BEME'> 
        <img src="images_web/BEMEicon.gif" alt="BE better with your alt text">
      </li>

      <li class="icon-container" id='BEME2'>
        <img src="images_web/BEME2icon.gif" alt="BE ME pt2">
      </li>

        <li class="icon-container"  id='FEEL'>
          <img src="images_web/FEELicon.gif" alt="FEEL pt1">
        </li>

        <li class="icon-container"  id='FEEL2'>
          <img src="images_web/FEEL2icon.gif" alt="FEEl pt2">
        </li>

        <li class="icon-container"  id='STOP'>
          <img src="images_web/STOPicon.gif" alt="STOP">
        </li>

        <li class="icon-container" id='GO'>
          <img src="images_web/GOicon.gif" alt="GO">
        </li>

        <li class="icon-container" id='THEIDO'>
          <img src="images_web/THEIDOicon.gif" alt="the(I)DO">
        </li>

        <li class="icon-container" id='ITTS'>
          <img src="images_web/ITTSicon.gif" alt="ITTS">
        </li>

        <li class="icon-container" id='SPEAK'>
          <img src="images_web/SPEAKicon.gif" alt="SPEAK">
        </li>

        <li class="icon-container" id='LIFE'>
          <img src="images_web/LIFEicon.gif" alt="LIFE">
        </li>

        <li class="icon-container" id='LIVING'>
          <img src="images_web/LIVINGicon.gif" alt="LIVING">
        </li> -->
    </ul>