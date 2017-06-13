
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1" /> 

	<title> <?php if ($_GET['book']=="BEME") {
			   	echo "Be Me";
		} else if ($_GET['book']=="FEEL") {
				echo "Feel";
		} else if ($_GET['book']=="SPEAK") {
			echo "Speak";
		} else if ($_GET['book']=="LOVEME") {
			echo "Love Me";
		} else if ($_GET['book']=="STOP") {
			echo "Stop";
		} else if ($_GET['book']=="GO") {
			echo "Go";
		} else if ($_GET['book']=="THEIDO") {
			echo "The (I) do";
		} else if ($_GET['book']=="LIFE") { 
			echo "Life";
		} else if ($_GET['book']=="NOTLIFE") {
			echo "not Life";
		} else if ($_GET['book']=="ITTS") {
			echo "I talk to strangers";
		} 		
		
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


	 ?></title>
	 <?php include 'scripts.php'; ?>
</head>
<body>

<div class="flipbookcontainer">
	<div class='flipbutton left arrowleftsymbol' onclick="previouspage('<?php echo $_GET['book']; ?>')"></div>
	<div class="flipbook leftpage" onclick="previouspage('<?php echo $_GET['book']; ?>')"> 
		<img id='leftpageimage' src="./books/<?php echo $_GET['book'] ?>/1.jpg">
	</div>
	<div class="flipbook rightpage" onclick="nextpage('<?php echo $_GET['book']; ?>')">
		<img id='rightpageimage' src="./books/<?php echo $_GET['book'] ?>/2.jpg">
	</div> 
	<div class='flipbutton right arrowrightsymbol'  onclick="nextpage('<?php echo $_GET['book']; ?>')"></div>

</div>

<div id='footerlinks'>
	 <a href="./<?php echo $_GET['book']; ?>">download pdf</a>
	 <br>
	 <a href="./index.php">back to all books</a><br>
	 <a href="">find out more</a>

</div>


<script type="text/javascript">
 pagenumber=1;

var howmanypages = <?php
$directory = "./books/" . $_GET['book'] ."/";
$filecount = 0;
$files = glob($directory . "*");
 $filecount = count($files);
echo $filecount;
?>;


setpagenumber("<?php echo $_GET['book'] ?>",1)


</script>




<div class="imagepreload">
<?php for ($i=1; $i <= $filecount; $i++) { 
?>
<img class="invisiblepreload" src="./books/<?php echo $_GET['book'] .'/' . $i . '.jpg'?>">
<?php 
} ?>

</div>

</body>
</html>








