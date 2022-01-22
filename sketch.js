function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  console.log("print to console");
// motion effect 
x = 100
speed = 5
y = 100
speed2 = 0.5
c = 20

  function draw() {
    background(x, 126, 255);
  //circles
    fill(y)
    fill(0, 126, y, 102)
    circle(windowWidth/2, windowHeight/2, c)
    fill(51)
    circle(windowWidth/2, windowHeight/2, x)
    line(0, 0, windowWidth, windowHeight)
    fill(72, y, x)
    circle(windowWidth/2, windowHeight/2, 300)
    //squares
    noFill()
    square(windowWidth/2 - 250, windowHeight/2 - 250, 500)
    fill(255, 204, 0)
    square(y, windowHeight/2 - 25, 50)
    square(y + 100, windowHeight/2 - 25, 50)
    square(y + 200, windowHeight/2 - 25, 50)
    square(y + 300, windowHeight/2 - 25, 50)
    square(y + 400, windowHeight/2 - 25, 50)
    fill(0, windowHeight, 75)
    square(windowWidth/2 - 25, y + 100, 50)
    square(windowWidth/2 - 25, y + 200, 50)
    square(windowWidth/2 - 25, y + 300, 50)
    square(windowWidth/2 - 25, y + 400, 50)
    square(windowWidth/2 - 25, y + 500, 50)
  
    
    
    
    
    
    
    x = x + speed;
    if (x >= windowWidth){
      speed = speed*(-1)
    }
    y = y + speed
    if (y >=windowWidth){
      speed = speed*-1
    }
    c = c + speed2
    if (c = 500){
      speed2 = 0
    }
    

  }