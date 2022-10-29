
//widnow = {...methods, properties}
//motor donde ejecute todo
window.onload = function() {
  // llamar clase
  const  bg = new Background(canvas.width,canvas.height);
  const flappy = new Flappy(100,200,60,60);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
      console.log("funciono")
      // ejecutar el updateGame
      //requestId undefined 
      //requestId 1,"perro",true,...verdaderos
      //si requesteId es falso ejecuta el requestAnimationFrame
      if(!requestId){
        audio.play()
        requestId = requestAnimationFrame( updateGame )
      }
     
  }

  // corazon de nuestro juego
  function updateGame(){
    frames ++;
    // .crearRect(x,y,width,height)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    bg.update()
    // dibujar todos lo elementos depues del background
    flappy.update()
    // Generar y luego dibujo 
    drawPipes()
    generatePipe()
      //.fillText(string,x,y)
    ctx.fillText(`Points:${points}`,290,100)
    
    if(flappy.y > canvas.height){
      gameOver()
    }

    // validar si aun estoy jugando requestId se averdadero
    if(requestId){
      requestAnimationFrame( updateGame )
    }
    
  }//end UpdateGame()

  function gameOver(){
    //resquestd = undefined y mostrar una imagen que ya memori!! o un texto
    audio.pause();
    console.log("te moriste")
    requestId = undefined
    ctx.fillStyle = "red";
    ctx.fillText("Te moriste u.u",290,300)
    /**
     *  reiniciar pos flappy a su valores por defecto tambien los points etc...
     */
  }

  // generatePipe() drawPipe()  valirdar al flappy que choque contra un pipe  /*puntos y la musica*/
  function generatePipe(){
    // ???
    if( !(frames % 160 === 0) ){
      return true 
    }
    // height random
    // Math.floor( Math.random()  * (max - min) +  min )
    const height = Math.floor( Math.random() * (canvas.height * 0.6) + 30)
    const pipeTop = new Pipe("top", canvas.width, 0, height);
    const pipeBottom = new Pipe("bottom",canvas.width, height + 120, canvas.height - 120 - height );

    arrPipes.push(pipeTop,pipeBottom)

  }

  function drawPipes(){
    //.nombreMethod()
    //forEach() <---- ***
    //loop => for || for of

    //array.forEach((params,param2,params2)=>{} )
    //  0        1       2
    // ["david","diego","Cris"]
    arrPipes.forEach((pipe,pipe_index)=>{
      // Validar si ya se salio mi pipe del canvas eliminarlo del arreglo
      if(pipe.x < -30){
        //metodo para eliminarlo
        arrPipes.splice(pipe_index,1)
        // points
        points += .5 
      }

      //pipe = {x:1,y:0,wid....}
      pipe.update()
      // validar si flappy toca aun pipe
      // flappy.collition( pipe ) => true || false
      if( flappy.collision(pipe) ){
        gameOver()
      }
    });

  }

  // addEventListner keydown keyup

  addEventListener("keydown",(event)=>{
 
    if(event.keyCode === 32){
      // este es un test
      // flappy.y -= 10; //para subir
      //codigo bueno
      flappy.userPull = 0.3;
    }

  })

  addEventListener("keyup",(event)=>{
    if(event.keyCode === 32){
      flappy.userPull = 0
    }
  })


};
