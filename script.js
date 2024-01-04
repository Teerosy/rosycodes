var backgroundImg, lTable, mySelect, mySound, mySound1, mySound2, mySound3, button, button1, button2, thirdPageImage1, thirdPageImage2, page4, nameData, addressData,firstPageImage4, firstPageImage1,firstPageImage2,firstPageImage3 

var firstPageImage
var firstPageIndex

var secondPageImage
var secondPageIndex

var thirdPageImage
var secondPageIndex

var fourthPageImage
var fourthPageIndex

//preload images, csv and sound
function preload() {
  backgroundImg = loadImage("welcomePage.jpg")
  firstPageImage = loadImage("firstPageImage.jpg")
  secondPageImage = loadImage("secondPageImage.jpg")
  thirdPageImage = loadImage("thirdPageImage.jpg")
  fourthPageImage = loadImage("fourthPageImage.jpg")
  firstPageImage1 = loadImage("page1(1).jpg")
  firstPageImage2 = loadImage("page1(2).jpg")
  firstPageImage3 = loadImage("page1(3).jpg")
  firstPageImage4 = loadImage("page1(4).jpg")
  thirdPageImage1 = loadImage("page3(1).jpg")
  thirdPageImage2 = loadImage("page3(2).jpg")
  
  

  mySound = loadSound("tSound.wav")
  mySound1 = loadSound("eSound.wav")
  mySound2 = loadSound("bSound.wav")
  mySound3 = loadSound("hSound.wav")


  lTable= loadTable("psychcenter.csv", 'csv', 'header')
}


function setup() {
  createCanvas(500, 500)

  button = createButton('Enter');
  button.mousePressed(showThirdPageImage1)
  button.position(250, 180);

  button1 = createButton('Enter');
  button1.mousePressed(showThirdPageImage2)
  button1.position(250, 240);

  button2 = createButton('Enter');
  button2.mousePressed(showFirstPageImage4)
  button2.position(310, 363);

  button3= createButton("Enter");
  button3.mousePressed(showFirstPageImage1)
  button3.position(295,186);

  button4= createButton("Enter");
  button4.mousePressed(showFirstPageImage2)
  button4.position(295,234);

  button5= createButton("Enter");
  button5.mousePressed(showFirstPageImage3)
  button5.position(295,300);

  mySelect = createSelect();
  mySelect.position(165, 190);

  nameData= lTable.getColumn("name")
  addressData = lTable.getColumn("address")

  for (var i in nameData){
     mySelect.option(addressData[i], nameData[i])
  }
  
  page4 = false

  welcome()
}

function draw() {

  if (key == "0") {
    welcome();
  } else if (key == "1") {
    showFirstPageImage();
  } else if (key == "2") {
    showSecondPageImage();
  } else if (key == "3") {
    showThirdPageImage();
  } else if (key == "4") {
    showFourthPageImage();
  }
}
function welcome() {
  background(backgroundImg)
  mySelect.hide()
  button1.hide()
  button.hide()
  button2.hide()
  button3.hide()
  button4.hide()
  button5.hide()
  image(backgroundImg, windowWidth, windowHeight)
  mySound.stop()
  mySound1.stop()
  mySound2.stop()
  mySound3.stop()
  page4=false
}

function showFirstPageImage() {
  mySelect.hide()
  button2.show()
  button.hide()
  button1.hide()
  button3.show()
  button4.show()
  button5.show()
  background(firstPageImage)
  mySound.stop()
  mySound1.stop()
  mySound2.stop()
  mySound3.stop()
  page4=false


}
function showSecondPageImage() {
  mySelect.show()
  button.hide()
  button1.hide()
  button2.hide()
  button3.hide()
  button4.hide()
  button5.hide()
  background(secondPageImage)
  mySound.stop()
  mySound1.stop()
  mySound2.stop()
  mySound3.stop()


  text(mySelect.selected(), 30, 300)
  
  for (var row of lTable.rows){
     if(row["obj"]["name"] == mySelect.selected()){
       text(row["obj"]["address"], 20, 250)
     }
  }

  page4=false
}
function showThirdPageImage() {
  mySelect.hide()
  button.show()
  button1.show()
  button2.hide()
  button3.hide()
  button4.hide()
  button5.hide()
  background(thirdPageImage)
  mySound.stop()
  mySound1.stop()
  mySound2.stop()
  mySound3.stop()

  page4=false

}
function showFourthPageImage() {
  mySelect.hide()
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
  background(fourthPageImage)
  page4 = true
}

function showFirstPageImage1(){
  image(firstPageImage1, 0, 0, width, height)
  button2.hide()
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
}

function showFirstPageImage2(){
  image(firstPageImage2,0,0, width, height)
  button2.hide()
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
  
}

function showFirstPageImage3(){
  image(firstPageImage3,0,0, width, height)
  button2.hide()
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()

}

function showFirstPageImage4(){
  image(firstPageImage4, 0, 0, width, height)
  button2.hide()
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
}
function showThirdPageImage1() {
  image(thirdPageImage1, 0, 0, width, height)
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
}
function showThirdPageImage2() {
  image(thirdPageImage2, 0, 0, width, height)
  button.hide()
  button1.hide()
   button3.hide()
  button4.hide()
  button5.hide()
}

function keyPressed(){
  if(page4){

    if (keyCode == 84) {
      mySound.play()
      mySound1.stop()
      mySound2.stop()
      mySound3.stop()
  
    } if (keyCode == 69) {
      mySound1.play()
      mySound.stop()
      mySound2.stop()
      mySound3.stop()
  
    } if (keyCode == 66) {
      mySound2.play()
      mySound.stop()
      mySound1.stop()
      mySound3.stop()
  
    } if (keyCode == 72) {
      mySound3.play()
      mySound.stop()
      mySound2.stop()
      mySound1.stop()
    }
  }
}