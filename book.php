
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
	<div class='flipbutton left' onclick="previouspage('<?php echo $_GET['book']; ?>')"><</div>
	<div class='flipbutton right'  onclick="nextpage('<?php echo $_GET['book']; ?>')">></div>

<div class="flipbookcontainer">
	<div class="flipbook leftpage" onclick="previouspage('<?php echo $_GET['book']; ?>')"> 
		<img id='leftpageimage' src="./books/<?php echo $_GET['book'] ?>/1.jpg">
	</div>
	<div class="flipbook rightpage" onclick="nextpage('<?php echo $_GET['book']; ?>')">
		<img id='rightpageimage' src="./books/<?php echo $_GET['book'] ?>/2.jpg">
		

	</div> 
</div>

<div id='footerlinks'>
	 <a href="./<?php echo $_GET['book']; ?>">download pdf</a>
	 <br>
	 <a href="./edit.php">back to all books</a><br>
	 <a href="">find out more</a>

</div>
</body>
</html>

<script type="text/javascript">
 pagenumber=1;

var howmanypages = <?php
$directory = "./books/" . $_GET['book'] ."/";
$filecount = 0;
$files = glob($directory . "*");
 $filecount = count($files);
echo $filecount;
?>;





</script>






