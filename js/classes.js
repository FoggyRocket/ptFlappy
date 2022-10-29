
//Background 
//sintax
class Background{
    /**
     * 
     * @param {number} w => canvas.width
     * @param {number} h => canvas.height
     */
    // constructor(w,h,image)
    constructor(w,h){
        //x,y,w,h,
        this.x =0;
        this.y =0;
        this.width = w;
        this.height = h; 
        // imgs
        this.image = new Image();//mando llamar a la class nativa de Image
        //image ={src:"",onLoad:()=>{},...n}
        // ../ salir un nivel
        // ./ en ese mismo nivel
        // tendremos un error
        //this.image.src = image
        this.image.src = "images/bg.png"
    }
    update(){
        // vamos a dibujar
        // hacer que se mueva y hacer un loop infinito
        if( this.x < -canvas.width){
            this.x = 0;
        }
        this.x --;
        //.drawImage(img,x,y,w,h)
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        // dibujar un segunda imagen
        ctx.drawImage(
            this.image,
            this.x +this.width,// empuje a mi imagen 2 al final de la imagen 1
            this.y,
            this.width,
            this.height 
        )
    }
}

// Flappy
class Flappy{
    /**
     * 
     * @param {number} x => pos x
     * @param {number} y  => pos y
     * @param {number} w => width
     * @param {number} h  => height
     */
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        // Image 
        this.image = new Image();
        this.image.src = "images/flappy.png"

        this.vy = 2 //gravity
        this.userPull = 0; // es la fuerza del usuario 

        // por el momento
   }
    update(){
        //hacer que se caiga!!!
        // validamos gravedad contra userPull(presionar tecla space )
        this.vy =  this.vy + (gravity - this.userPull)
        //validar si el flappy no se salga del canvas
        if(this.y <= 0){
            this.userPull = 0;
            this.y = 2;
            this.vy = 2
        }
        //modificar su "Y" con la gravedad
        this.y += this.vy
        
        // dibujar!!! 
        //.drawImage(img,x,y,w,h)
        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }
    /**
     * 
     * @param {object} item = {x:..,y:..,vida,width,height} 
     */
    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}


// Pipes

class Pipe extends Flappy{
    /**
     * 
     * @param {string} pos = "top" | "bottom" 
     * @param {number} x 
     * @param {number} y 
     * @param {number} h 
     */
    constructor(pos,x,y,h){
        super(x,y,50,h)
        /**
         *  if(condicion){
         *  ...true
         *  }else{
         *     ...false
         *  }
         * ternario
         * 
         *  ? => indica que es un if
         *  : => else 
         *  condicion ? true : false
         */
        this.image.src = 
            pos === "top"// condicion 
            ? "images/obstacle_top.png"
            : "images/obstacle_bottom.png";
    }

    update(){
        //move pipe 
        this.x -= 2;
        // Dibujar pipe
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}