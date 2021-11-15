canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

random_greencar_x=Math.floor(Math.random()*725)

greencar_x=random_greencar_x;
greencar_y=225;

function add() {
	backgroundTagImage=new Image();
	backgroundTagImage.onload=uploadBackground;
	backgroundTagImage.src="parkingLot.jpg";
 
	greencarTagImage=new Image();
	greencarTagImage.onload=uploadgreencar;
	greencarTagImage.src="car2.png";
}

function uploadBackground() {
	ctx.drawImage(backgroundTagImage,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencarTagImage,greencar_x,greencar_y,greencar_width,greencar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left(){
	if(greencar_x>=0){
	  greencar_x=greencar_x-10;
	  console.log("when left key pressed x="+greencar_x+"| y="+greencar_y);
	  uploadBackground();
	  uploadgreencar();
	}
  }
  function up(){
	if(greencar_y>=0){
	  greencar_y=greencar_y-10;
	  console.log("when up key pressed x="+greencar_x+"| y="+greencar_y);
	  uploadBackground();
	  uploadgreencar();
	}
  }
  function right(){
	if(greencar_x<=700){
	  greencar_x=greencar_x+10;
	  console.log("when right key pressed x="+greencar_x+"| y="+greencar_y);
	  uploadBackground();
	  uploadgreencar();
	}
  }
  function down(){
	if(greencar_y<=310){
	  greencar_y=greencar_y+10;
	  console.log("when down key pressed x="+greencar_x+"| y="+greencar_y);
	  uploadBackground();
	  uploadgreencar();
	}
  }
