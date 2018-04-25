$(document).ready(function(){


var holding = [];

for (var i = 0; i < holding.length; i ++){
	document.getElementById("b").appendChild(holding[i]);
}


//document.getElementById("b").appendChild(addImg);



$('.pick').click(function(){
	var thisID = $(this).attr('id');
	var letter = thisID.substring(0,1);
	var number = thisID.substring(1);
	var newID = letter + "i" + number;

	var z = 0;

	var l = 0;

	if(letter == "n"){
		z = 20;
		l = 0;
	}else if (letter == "b"){
		z = 10;
		l = 1;
	}else {
		l = 2;
		z = 30;
	}

	var newClass = "add"+l;

	var addImg = document.createElement('div');
	addImg.className = newClass;

	var img = "url('"+letter+number+".png')";

	console.log(img);

	addImg.style.backgroundImage = img;
	addImg.style.zIndex = z;


	document.getElementById("b").appendChild(addImg);

	holding.push(addImg);

	console.log(holding);


});










});