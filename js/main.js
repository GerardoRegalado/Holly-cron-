const canvas = document.getElementById("Holly-cron")
const ctx = canvas.getContext("2d")

let covid = new Image() 
covid.src = "../assets/images/Omicron.png"

// Todas las variables globales que necesitemos se declaran al inicio del documento
// frames,requestID,arrysImages,defaulValues

let frames = 0;
const imageEnemies = [
   "../assets/images/cubrebocas.png",
   "../assets/images/gel.png",
   "../assets/images/jerga.png",
   "../assets/images/Lysol.png",
   "../assets/images/Vacuna.png"
];
const enemies = [];

const imageObstacles = [
    "../assets/images/persona 1.png", 
    "../assets/images/persona2.png",
    "../assets/images/ninia.png",
    "../assets/images/anciano.png", 
    "../assets/images/anciana.png" ]

const arrObstacles= [];


let requestID;

// navegacion ../ <---- salir un nivel; ../../ <---- salir 2 niveles
// navegacion ./ <--- en el mismo nivel
// vamos a 

// const demo1 = new Image;
// demo1.src = "assets/images/marioStop.png";

// demo1.onload = () => {
//     // le decimos al contexto (ctx) que dibuje nuestra imagen
//     // drawImage(img,x,y,w,h)
//     ctx.drawImage(demo1,100,100,100,100);
// }

// Clase Background

class Background {
    constructor() {
        //mis propiedades
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "../assets/images/Fondo oriental.png"
    }
    //metodos
    draw() {
        this.x-= 5;
        if (this.x < -canvas.width) {
            this.x = 0;
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        // colocamos una segunda imagen
        ctx.drawImage(
            this.image,
            this.x + this.width, // coloca la imagen seguida de la primera
            this.y,
            this.width,
            this.height
        );
    }

    gameOver() {
        ctx.font = "80px Arial";
        ctx.fillText("Te sanitizaron", 150, 150);
    }
}

class Character {
    constructor(x, y, w, h, img) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image= new Image() 
        this.image.src = img
       
    }
    draw() {
        if (frames % 10 === 0) {
            this.x -= 5;
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    collision(item) {
        return (
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
}

class Covid extends Character {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.image1 = covid
        this.image= this.image1
      
        
    }
    draw() {
        // if (frames % 10 === 0 ){
        //     this.x =-10
        // }
        
       ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
     
    }
}

class Enemy extends Character {
    constructor(x, y, w, h, img) {
        super(x, y, w, h, img);
    }
}



// llamar a las clases o instancear a las clases para poder llamar sus metodos y propiedades
const fondo = new Background();
const covidHeroe = new Covid (15, 200, 50, 50);
//const enemy = new Enemy(canvas.width,288,120,120,imageEnemies[1])
// const enemy = new Enemy(canvas.width, 288, 50, 50, imageEnemies[1])
// functions
// generarEnemigos y los va a guardar en un array
// dibuejar enemigos va a llarmar el metodo draw y estara verificando si mario toca con uno

// function generateEnemies() {
//     // en que intervalo de tiempo quiero que se genere mi enemigo
//     if (frames % 300 === 0 || frames % 700 === 0 || frames % 1200 === 0) {
//         let y = Math.floor(Math.random() * (280 - 10) + 10);
//         let imgRand = Math.floor(Math.random() * imageEnemies.length);
//         const enemy = new Enemy(canvas.width, y, 50, 50, imageEnemies[imgRand]);
//         enemies.push(enemy);
//     }
// }

// function drawEnemies() {
//     //iteramos en el arreglo enemies para poder utilizar el .draw de cada enemigo
//     // item = enemy, index = 0, arregloOriginal
//     enemies.forEach((enemy, index_enemy) => {
//         enemy.draw();
//         if (mario.collision(enemy)) {
//             console.log("Me esta tocando");
//             requestID = undefined;
//             fondo.gameOver();
//         };

        // bullets.forEach((bullet, index_bullet) => {
        //     bullet.draw();
        //     // validar si choca con un enemigo

        //     //sacar la vala si se sale del canvas
        //     if (bullet.x + bullet.width >= 800) {
        //         bullets.pop();
        //     }
        // })
        //eliminar al enemigo si se sale del canvas
        // y evitar que mi browser se alente y se coma toda mi ram
        // vamos a limpiar el array de los enemigos que ya no vemos en el canvas
//         if (enemy.x + enemy.width <= 0) {
//             enemies.splice(index_enemy, 1);
//         }
//     }
//     )
// }


function updateCanvas() {
    frames++;
    //Limpiamos el canvas es muy importante para que no se sobre pongan las capas anteriores
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fondo.draw();
    covidHeroe.draw();
    generateEnemies()
    drawEnemies()
    generatePoints()
    drawPoints()
    // enemy.draw()

    // if (covidHeroe.collision(enemy)){
    //     console.log("esta tocandome")
    //     requestID=undefined
    //     fondo.gameOver()
    // }
    // generateEnemies();
    // drawEnemies();
    // enemy.draw();
    // // prueba collision


    // validar si el resquestID tiene un valor continuamos con el juego
    // osea sigue ejecutando requestAnimationFrame
    if (requestID) {
     requestID = requestAnimationFrame(updateCanvas);
    //requestAnimationFrame(updateCanvas)
     }
}

function generateEnemies(){

    if(frames % 170 === 0){
        let y = Math.floor(Math.random() * (canvas.height - 5))+5
        let imgRand = Math.floor(Math.random() * imageEnemies.length)
        const enemy = new Enemy (canvas.width,y,70,70, imageEnemies[imgRand])
        enemies.push(enemy)
    }

}

function drawEnemies(){
    enemies.forEach((enemy,index)=>{
        enemy.draw()


        //collition
        if (covidHeroe.collision(enemy)) {
        requestID = undefined;
        fondo.gameOver();
       };

       if (enemy.x + enemy.width <=  0){
           enemies.splice(index,1)
       }
    })


}

function generatePoints() {

    if (frames % 100 ===0){
        let y2 = Math.floor(Math.random() * (canvas.height - 5))+5
        let pointsRand = Math.floor(Math.random() * imageObstacles.length)
        const points = new Enemy (canvas.width,y2,70,70,imageObstacles[pointsRand])
        arrObstacles.push(points)
    }
    
}

function drawPoints() {

    arrObstacles.forEach((points,index) => {
        points.draw()
    })
}



//aqui los objetivos.



function startGame() {
    requestID=requestAnimationFrame(updateCanvas)
}

startGame()

//function startGame() {
    //requestID = requestAnimationFrame(updateCanvas);
//}

//startGame();

// addEventListener("keydown", (event) => {
//      if (event.keyCode === 65) { //izquierda
//          covidHeroe.x -= 20;
//      }
//      if (event.keyCode === 68) { //derecha
//          covidHeroe.x += 20;
//      }
//      if (event.keyCode === 87) { //arriba
//          covidHeroe.y += 20;
          
//      }

//      if (event.keyCode === 83) {
//         covidHeroe.y -= 20;
         
//     }
     
//  })

 addEventListener("keydown",(event)=> 
{
    //Izquierda (tecla A)
    if (event.keyCode ===65) 
    {
        covidHeroe.x -= 10
       
    }

    //derecha (tecla D)
    if (event.keyCode === 68)
    {
        covidHeroe.x +=10
        
            
    };
    

    // arriba (tecla W)
    if (event.keyCode === 87 )
    {
        covidHeroe.y -= 20
        
    }

    // abajo

    if (event.keyCode === 83)
    {
        covidHeroe.y += 20
        
    }

  

})
