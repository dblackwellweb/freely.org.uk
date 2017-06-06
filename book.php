
<!DOCTYPE html>
<html>
<head>
	<title> <?php if ($_GET['book']=="BEME") {
			   	echo "Be Me";
		} else if ($_GET['book']=="BEME2") {
				echo "Be Me 2";
		} else if ($_GET['book']=="FEEL") {
				echo "Feel";
		} else if ($_GET['book']=="FEEL2") {
			echo "Feel 2";
		} else if ($_GET['book']=="STOP") {
			echo "Stop";
		} else if ($_GET['book']=="GO") {
			echo "Go";
		} else if ($_GET['book']=="THEIDO") {
			echo "The (I) do";
		} else if ($_GET['book']=="ITTS") {
			echo "I talk to strangers";
		} else if ($_GET['book']=="SPEAK") { 
			echo "Speak";
		} else if ($_GET['book']=="LIFE") {
			echo "The meaning of life";
		} else if ($_GET['book']=="LIVING") {
			echo "The meaning of living";
		} 		
		
	 ?></title>
	 <?php include 'scripts.php'; ?>
</head>
<body>
	<div class='flipbutton left'><</div>
	<div class='flipbutton right'>></div>

<div class="flipbookcontainer">
	<div class="flipbook leftpage">
		<img src="./books/<?php echo $_GET['book'] ?>/1.jpg">
	</div>
	<div class="flipbook rightpage">
		<img src="./books/<?php echo $_GET['book'] ?>/2.jpg">
		

	</div> 
</div>
</body>
</html>

<script type="text/javascript">
pagenumber=1;






</script>






