<!DOCTYPE html>
<HTML>
  <HEAD>
    <title>freely</title>
<?php include 'scripts.php'; ?>

  </HEAD>

  <BODY>
    <!-- I've defined this as a list, better for accessibility. UL means unordered list, LI means a list item. -->
  <?php include 'overview.php'; ?>

    <!-- <div class="divider"> -->
    <!-- </div> -->
    <div class='clickdump'>
    <!-- an invisible box to sink clicks whenever the popup is open -->
    </div>
    <section class="divider">
      <a href="">...to find out more / support</a>
    </section>

    <section class="selected popupOFF">
        <img class="big-img" src="images_web/FEEL_bigimg.gif">
        <nav>
          <a id='popup-download-link' href="">Download to Print</a>
          <a id='popup-online-link' href="">View Online</a>
        </nav>
    </section>

  </BODY>
</HTML>
<script type="text/javascript">
  $( document ).ready(init);
</script>