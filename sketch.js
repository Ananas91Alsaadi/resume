var balls = [
  {
    title: "Vue.js" ,
    BGcolor:"#3fb27f",
    color2:"#000",
    x:0,
    y:0,
    r:50,

    
  },
    {
    title: "AJAX" ,
    BGcolor:"#458fc6",
        color2:"#fff",

          x:0,
    y:0,
    r:20,

  },
  {
    title: "P5.js" ,
    BGcolor:"#ed225d",
        color2:"#fff",
    
    x:0,
    y:0,
    r:50,

  },
  {
    title: "JSON" ,
    BGcolor:"#8a8a8a",
        color2:"#000",

        x:0,
    y:0,
    r:40,

  },
  {
    title: "API" ,
    BGcolor:"#c8dff6",
        color2:"#000",

        x:0,
    y:0,
    r:40,

  },
  {
    title: "React" ,
    BGcolor:"#5ed3f3",
        color2:"#000",

        x:0,
    y:0,
    r:30,

  },
  {
    title: "Node.js" ,
    BGcolor:"#7fc728",
        color2:"#000",

        x:0,
    y:0,
    r:30,

  },
  {
    title: "Bootstrap" ,
    BGcolor:"#7110ef",
        color2:"#fff",

        x:0,
    y:0,
    r:20,

  },
  {
    title: "Next.js" ,
    BGcolor:"#f7f7f7",
        color2:"#000",

        x:0,
    y:0,
    r:30,

  },
  {
    title: "Angular" ,
    BGcolor:"#d6002f",
        color2:"#fff",

        x:0,
    y:0,
    r:30,

  },
  {
    title: "Axios" ,
    BGcolor:"#813f90",
        color2:"#fff",

        x:0,
    y:0,
    r:40,

  },
  {
    title: "Konva" ,
    BGcolor:"#0d7fc7",
        color2:"#000",

        x:0,
    y:0,
    r:50,

  },
    {
    title: "jsPDF" ,
    BGcolor:"#03e3b8",
          color2:"#000",

          x:0,
    y:0,
    r:50,

  },
  {
    title: "Proj4" ,
    BGcolor:"#ce7152",
        color2:"#000",

        x:0,
    y:0,
    r:30,

  },


];

var randNum;
var theCanvasWidth, mobileCanvas;


function setup() {
  

  createCanvas(480, 480);
    let afterBall=0
  textAlign(CENTER, CENTER);

    balls = balls.sort((a,b)=>{return b.r-a.r});
  for (let i =0 ; i<balls.length ;i++) {
    balls[i].x=random(150,400);
    balls[i].y=random(150,400);
    balls[i].vx=random(-1, 1);
    balls[i].vy=random(-1, 1);
  }

    
}


function draw() {
    
  if (windowWidth > 480) {
    theCanvasWidth = 480;
  } else {
    theCanvasWidth = windowWidth;
  }
  var resTheCanvasWidth = theCanvasWidth/480
  var theCanvas = createCanvas(theCanvasWidth, theCanvasWidth);
  theCanvas.center("horizontal");

  background(220);

  
  
    for (let i = 0; i < balls.length; i++) {
    let circle1 = balls[i];
    
    fill(circle1.BGcolor);
    noStroke();
        push();

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = -0;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

    ellipse(circle1.x, circle1.y, circle1.r*2);
pop();
          fill(circle1.color2);
textSize(circle1.r/2.2);
    text(circle1.title,circle1.x, circle1.y);
    circle1.x += circle1.vx;
    circle1.y += circle1.vy;
    
    // Check for collisions with other circles
    for (let j = i + 1; j < balls.length; j++) {
      let circle2 = balls[j];
      let dx = circle2.x - circle1.x;
      let dy = circle2.y - circle1.y;
      let distance = sqrt(dx*dx + dy*dy);
      let minDist = circle1.r + circle2.r;
      if (distance < minDist) {
        // Bounce the circles off each other
        let angle = atan2(dy, dx);
        let targetX = circle1.x + cos(angle) * minDist;
        let targetY = circle1.y + sin(angle) * minDist;
        let ax = (targetX - circle2.x) * 0.001;
        let ay = (targetY - circle2.y) * 0.001;
        circle1.vx -= ax;
        circle1.vy -= ay;
        circle2.vx += ax;
        circle2.vy += ay;
      }
    }
    
    // Bounce off the edges of the canvas
    if (circle1.x + circle1.r > width || circle1.x - circle1.r < 0) {
      circle1.vx *= -1;
    }
    if (circle1.y + circle1.r > height || circle1.y - circle1.r < 0) {
      circle1.vy *= -1;
    }
  }

  
  
  
  
  
  /*
  
  for (let i =0 ; i<balls.length ;i++) {
            fill(balls[i].BGcolor);

      circle(balls[i].x,balls[i].y,balls[i].r*resTheCanvasWidth*2);
      textSize(balls[i].r/2*resTheCanvasWidth);
      fill(0, 102, 153);
      text(balls[i].title, balls[i].x,balls[i].y);

  }
let ballsSpeed =0.5;
  
    for (let i =0 ; i<balls.length ;i++) {
  
      
      if (balls[i].x<balls[i].r*resTheCanvasWidth) {balls[i].axisX=true}
      if (balls[i].x>theCanvasWidth-balls[i].r*resTheCanvasWidth) {balls[i].axisX=false}
      
      
      
      balls[i].axisX?balls[i].x+=ballsSpeed:balls[i].x-=ballsSpeed;
      
      if (balls[i].y<balls[i].r*resTheCanvasWidth) {balls[i].axisY=true}
      if (balls[i].y>theCanvasWidth-balls[i].r*resTheCanvasWidth) {balls[i].axisY=false}
      
      balls[i].axisY?balls[i].y+=ballsSpeed:balls[i].y-=ballsSpeed;


  }
  */
}