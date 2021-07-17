var canvas = new fabric.Canvas("myCanvas");
ball_x = 10;
ball_y = 10;
pickachu_image_heigth = 100;
pickachu_image_width = 90;
ball_object = "";
image_object = "pickaboo.png";
win="You Caught a pickachu!";
function ball_update() {
    fabric.Image.fromURL("ultraball.png", function (Img) {
        ball_object = Img;
        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(50);
        ball_object.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_object);

        fabric.Image.fromURL("pickaboo.png", function (Img) {
            image_object = Img;
            image_object.scaleToWidth(pickachu_image_width);
            image_object.scaleToHeight(pickachu_image_heigth);
            image_object.set({
                top: 0,
                left: 0
                
            });
            canvas.add(image_object);
        });

    });
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '38') {
        up();
        console.log("Up Key is pressed.Terminated");
    }
    if (key_pressed == '40') {
        down();
        console.log("Down Key is pressed.Terminated");
    }
    if (key_pressed == '37') {
        left();
        console.log("Left Key is pressed.Terminated");
    }
    if (key_pressed == '39') {
        right();
        console.log("Right Key is pressed.Terminated");
    }
  
}
function up() {
    if (ball_y >= 0) {
        ball_y = ball_y - 10;
        console.log("The new X = " + ball_x + "and New Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
    }
        if (ball_y & ball_x == 400){
document.getElementById("news").innerHTML= "You caught a pickachu!";
canvas.add(ball_object);
console.log("GG,EASY NOOB!")
document.getElementById("myCanvas").style.borderColor="green";
        }
    }

function down() {
    if (ball_y <= 700) {
        ball_y = ball_y + 1;
        console.log("The new X = " + ball_x + " and New Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
        if ((ball_y == 400) && (ball_x == 400)){
            document.getElementById("news").innerHTML= "You caught a pickachu!";
            canvas.add(ball_object);
console.log("GG,EASY NOOB!")
document.getElementById("myCanvas").style.borderColor="green";
                    }
    }
}
function right() {
    if (ball_x <= 700) {
        ball_x = ball_x + 1;
        console.log("The new X = " + ball_x + " and New Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
        if ((ball_y == 400) && (ball_x == 400)){
            document.getElementById("news").innerHTML="You caught a pickachu!";
            canvas.add(ball_object);
console.log("GG,EASY NOOB!")
document.getElementById("myCanvas").style.borderColor="green";
                    }
    }
}
function left() {
    if (ball_x >= 0) {
        ball_x = ball_x - 1;
        console.log("The new X = " + ball_x + " and New Y = " + ball_y);
        canvas.remove(ball_object);
        ball_update();
        if ((ball_y == 400) && (ball_x == 400)){
            document.getElementById("news").innerHTML= "You caught a pickachu!";
            canvas.add(ball_object);
console.log("GG,EASY NOOB!")
document.getElementById("myCanvas").style.borderColor="green";
                    }
    }
}
