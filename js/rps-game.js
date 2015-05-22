$(document).ready(function(){


	var choixUtilisateur;

	var retry = "Cliquez sur rejouer pour recommencer !"

	$( ".field" ).hide();

	$('.pierre').click(function(){
		choixUtilisateur = "pierre";
		$(this).addClass('selected');
		$('.ciseaux').removeClass('selected');
		$('.feuille').removeClass('selected');
	});
	$('.feuille').click(function(){
		choixUtilisateur = "feuille";
		$(this).addClass('selected');
		$('.ciseaux').removeClass('selected');
		$('.pierre').removeClass('selected');
	});
	$('.ciseaux').click(function(){
		choixUtilisateur = "ciseaux";
		$(this).addClass('selected');
		$('.pierre').removeClass('selected');
		$('.feuille').removeClass('selected');
	});

	
		

	var choixOrdi = Math.floor((Math.random()*3) + 1);

						if (choixOrdi === 1) {
						    choixOrdi = "pierre";
						} else if(choixOrdi === 2) {
						    choixOrdi = "feuille";
						} else {
						    choixOrdi = "ciseaux";
						};

	var comparer = function(choix1, choix2) {
	    if(choix1 === choix2) {
	        $('.result-field').text("Egalité " + " ! " + choix1 + " contre " + choix2 + " ! " + "\r\n" + retry) ;
	    }else if(choix1 === "pierre"){
	        if(choix2 === "ciseaux"){
	            $('.result-field').text("Vous avez gagné avec "+ choix1 + " contre " + choix2 + " !" + "\r\n" + retry) ;
		   		$('.comp-ciseaux').addClass('selected');
		    	$('.human-count p').text(humCount+=1);
	        }else{
	            $('.result-field').text("L'ordinateur a gagné avec " + choix2 + " contre " + choix1 + " !" + "\r\n" + retry) ;
	            $('.comp-feuille').addClass('selected');
	            $('.computer-count p').text(compCount+=1);
	        }
	    }else if(choix1 === "feuille"){
	        if(choix2 === "pierre"){
	            $('.result-field').text("Vous avez gagné avec "+ choix1 + " contre " + choix2 + " !" + "\r\n" + retry) ;
		   		$('.comp-pierre').addClass('selected');
		   		$('.human-count p').text(humCount+=1);
	        }else{
	            $('.result-field').text("L'ordinateur a gagné avec " + choix2 + " contre " + choix1 + " !" + "\r\n" + retry) ;
		   		$('.comp-ciseaux').addClass('selected');
		   		$('.computer-count p').text(compCount+=1);
	        }
	    }else if(choix1 === "ciseaux"){
	        if(choix2 === "feuille"){
	            $('.result-field').text("Vous avez gagné avec "+ choix1 + " contre " + choix2 + " !" + "\r\n" + retry) ;
	            $('.comp-feuille').addClass('selected');
	            $('.human-count p').text(humCount+=1);

	        }else{
	            $('.result-field').text("L'ordinateur a gagné avec " + choix2 + " contre " + choix1 + " !" + "\r\n" + retry) ;
		    	$('.comp-pierre').addClass('selected');
		    	$('.computer-count p').text(compCount+=1);

	        }
	    }
	};

	$('.play').click(function(){
		comparer(choixUtilisateur, choixOrdi);
		$( ".field" ).fadeIn( 200, function() {});
	});

	$('.retry').click(function() {
 
    	    $('.result-field').text("") ;
    	    $('.game-button').removeClass('selected') ;
			$( ".field" ).fadeOut( 200, function() {});
    	    choixOrdi = Math.floor((Math.random()*3) + 1);
				if (choixOrdi === 1) {
							 choixOrdi = "pierre";
				} else if(choixOrdi === 2) {
							 choixOrdi = "feuille";
				} else {
							 choixOrdi = "ciseaux";
				};
	            
	});

	$('.field').click(function() {
 
    	    $('.result-field').text("") ;
    	    $('.game-button').removeClass('selected') ;
			$( ".field" ).fadeOut( 200, function() {});
    	    choixOrdi = Math.floor((Math.random()*3) + 1);
				if (choixOrdi === 1) {
							 choixOrdi = "pierre";
				} else if(choixOrdi === 2) {
							 choixOrdi = "feuille";
				} else {
							 choixOrdi = "ciseaux";
				};
	            
	});


	var compCount = 0;
	var humCount = 0;

	$('.human-count p').text(compCount);
	$('.computer-count p').text(compCount);

	
});//end doc


