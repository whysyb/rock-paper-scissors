<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Rock paper scissors</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="js/app.js"></script>
	<link rel="stylesheet" href="rps.css">
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900|Open+Sans:400,800,700,300' rel='stylesheet' type='text/css'>
</head>
<body>
<div class="title-container"><h1 class="title-container--title">ROCK PAPER SCISSORS</h1></div>
<div class="link-container">
	<a href="../../index.php" class="link-conatiner--home">RETOUR A L'ACCUEIL</a>
</div>
<section class="notice">
	<div class="notice-bloc">
		<h3>INSTRUCTIONS</h3>
		<p>Choisissez un <span class="s">signe</span></p>
		<p>Cliquez sur <span class="j">JOUER</span> pour lancer la partie</p>
		<p>Cliquez sur <span class="r">REJOUER</span> pour relancer une partie</p>
		</div>
		<a href="#rps-container">GO !</a>
</section>
<section class="rps-container" id="rps-container">
	<div class="side human">
		<h3>Choississez un signe :</h3>
		<span class="game-button men pierre">Pierre</span>
		<span class="game-button men floated-right feuille">Feuille</span>
		<span class="game-button men ciseaux">Ciseaux</span>
	</div>

	<div class="compteur">
		<h3>Score</h3>
		<div class="compteur-bloc human-count">
			<span>Vous</span><p></p>
		</div>
		<div class="compteur-bloc computer-count">
			<span>Ordinateur</span><p></p>
		</div>		
		<span class="play">JOUER</span>
	</div>

	<div class="side computer">
		<h3>L'ordinateur choisit :</h3>
		<span class="game-button comp comp-pierre">Pierre</span>
		<span class="game-button comp comp-feuille floated-right">Feuille</span>
		<span class="game-button comp comp-ciseaux">Ciseaux</span>
	</div>	

	<div class="field">
		<p class="result-field" id="result-field"></p>
		<span class="retry">REJOUER</span>
	</div>
</section>
<script src="rps-game.js"></script>
</body>
</html>