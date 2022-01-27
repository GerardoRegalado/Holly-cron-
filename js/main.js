const canvas = document.getElementById("Holly-cron")
const ctx = canvas.getContext("2d")

let frames=0 ; // esta linea le dara a los personajes la animacion que necesitamos.
// declaracion de imagenes 

const covid = new Image()                                   //Heroe
covid.src= "assets/images/Covid.png"

const alpha= new Image()                                    //Heroe
alpha.src= "../assets/images/alpha.png"

const delta= new Image()                                    //Heroe
delta.src= "../assets/images/Delta.png"

const omicron= new Image()                                  //Heroe
omicron.src="../assets/images/Omicron.png"

const enfermera= new Image()                                //posiblemente se cambien por pacientes
enfermera.src= "../assets/images/enfermera.png"

const dactar = new Image()                                  //posiblemente se cambien por pacientes
dactar.src= "../assets/images/dactar.png"


    const cubrebocas = new Image()                             //Enemigo
    cubrebocas.src= "../assets/images/cubrebocas.png"

    const tapete = new Image()                                  //Enemigo
    tapete.src="../assets/images/jerga.png"

    const lysol= new Image()                                    //Enemigo
    lysol.src= "../assets/images/Lysol.png"

    const gel = new Image ()                                    //Enemigo
    gel.src= "../assets/images/gel.png"

    const vacuna= new Image()                                   //Enemigo
    vacuna.src="../assets/images/Vacuna.png"


const fondoOriental= new Image()                            //fondo
fondoOriental.src= "../assets/images/Fondo oriental.png"

const fondoEuropeo= new Image()                             //fondo
fondoEuropeo.src="../assets/images/fondo europeo.png"

const fondoAdelN =new Image()                               //fondo
fondoAdelN.src="../assets/images/fondo a del n.png"

const fondoAdelS= new Image()                               //fondo
fondoAdelS.src= "../assets/images/fondo a del sur.png"

// fondoOriental.onload= () => {                            // asi se mete una imagen
//     ctx.drawImage(fondoOriental,50,10,1500,600)
// }

const imageEnemies = ["assets/images/cubrebocas.png","assets/images/jerga.png",
"assets/images/Lysol.png", "assets/images/gel.png","assets/images/Vacuna.png"]
const enemies = [];



//CLASE BACKGROUND; todo lo de abajo es para poner el fondo estatico y dinamico

class Background 
{
    constructor()
    {
        this.x=0,
        this.y=0,
        this.width=canvas.width,
        this.height=canvas.height,
        this.image= fondoOriental
    }

    draw()
    {
        this.x-= 5; //1. esto hace que avance a la izquiera, restas uno al eje X
        if (this.x< -canvas.width) //4. esto lo que hace es que evita el fondo blanco
        {
            this.x=0
        }
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height) //3. este es el HACK que hace que la imagen vaya saliendo detras de la primera y tenga un efecto de loop infinito
    }

    gameOver()
    {
        ctx.font= "80px Arial"
        ctx.filltext= ("Haz sido Exterminado",150,150)

    }



}


class Characters
{
    constructor(x,y,w,h,img)
    {
        this.x= x,
        this.y = y,
        this.width= w,
        this.height= h,
        this.image= img
       

    }

    draw()
    {
        

        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      
    }

    collition(item)
    {
        return 
        (
            this.x < item.x + item.width && 
            this.x + this.width > item.x && 
            this.y < item.y + item.height && 
            this.y + this.height > item.y
        )

    }


}

        class Covid extends Characters
        {
            constructor(x,y,w,h)
            {
                super(x,y,w,h) 
                this.image1 = covid
                this.image = this.image1
                this.lifePoint= 100
            }

            draw()
            {
                ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            }


        }

        class Alpha extends Characters
        {
            constructor(x,y,w,h)
            {
                super(x,y,w,h)
                this.image1=alpha
                this.image = this.image1
                this.lifePoint= 100
            }

            draw()
            {
               //ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            }

        }

        class Delta extends Characters
        {
            constructor(x,y,w,h)
            {
                super(x,y,w,h)
                this.image1 = delta
                this.image=this.image1
                this.lifePoint= 100
            }

            draw()
            {
                //ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
            }


        }

        class Omicron extends Characters
        {
            constructor(x,y,w,h)
            {
                super(x,y,w,h)
                this.image1= omicron
                this.image= this.image1
                this.lifePoint= 100
            }

            draw()
            {
                //ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            }

        }


class Enemy
{
    constructor(y,image)
    {
        this.x = 1800
        this.y=y
        this.width= 120 
        this.height= 120
        this.image= new Image()
        this.image.src= image
    }      
    draw()
    {
        //  if (frames % 10 === 0)
        // {
        //     this.image= this.image1 === canvas.width ? this.x -=5 : this.x*=
        // }
        this.x--
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
  
    collition(item)
    {
        return 
        (
            this.x < item.x + item.width && 
            this.x + this.width > item.x && 
            this.y < item.y + item.height && 
            this.y + this.height > item.y
        )

    }
}

            //  class Cubrebocas extends Enemy
            //  {
            //      constructor (x,y,w,h)
            //     {
            //         super (x,y,w,h)
            //         this.image1= cubrebocas 
            //          this.image= this.image1
            //     }

            //     draw()
            //     {
                   
            //         ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            //     }
                
            // }

            // class Tapete extends Enemy
            // {
            //     constructor (x,y,w,h)
            //     {
            //         super(x,y,w,h)
            //         this.image1= tapete
            //         this.image= this.image1
            //     }

            //     draw()
            //     {
            //         ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            //     }

            // }

            // class Lysol extends Enemy 
            // {
            //     constructor(x,y,w,h)
            //     {
            //         super(x,y,w,h)
            //         this.image1=lysol
            //         this.image= this.image1
            //     }

            //     draw()
            //     {
            //         ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            //     }


            // }

            
            // class Gel extends Enemy 
            // {
            //     constructor(x,y,w,h)
            //     {
            //         super(x,y,w,h)
            //         this.image1= gel
            //         this.image= this.image1
            //     }

            //     draw()
            //     {
            //         ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            //     }


            // }

            // class Vacuna extends Enemy 
            // {
            //     constructor(x,y,w,h)
            //     {
            //         super(x,y,w,h)
            //         this.image1= vacuna
            //         this.image= this.image1
            //     }

            //     draw()
            //     {
            //         this.x --
            //         ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            //     }


 



//Llamar a las clases o instancear a las clases para poder utilizar sus metodos y propiedades 
const fondo = new Background()

//Heroes
const covidHeroe = new Covid(15,200,60,60)
const alphaHeroe = new Alpha (15,200,120,120)
const deltaHeroe = new Delta (15,200,120,120)
const omicronHeroe = new Omicron(15,200,210,210)

//Enemies
// const cubrebocasEnemy = new Cubrebocas (canvas.width-500, 200, 120,120)
// const tapeteEnemy = new Tapete(canvas.width-500,100,120,120)
// const lysolEnemy = new Lysol (canvas.width-500,300,120,120)
// const gelEnemy = new Gel (canvas.width-500, 450,120,120)
// const vacunaEnemy = new Vacuna ( canvas.width-300, 250,120,120)


function generateObstaculos () {

    if ((frames % 100=== 0)){
    let posicionY = Math.floor(Math.random()*(canvas.height - 0 +1)+ 0)
    let imageRandom = Math.floor(Math.random() * 3)
    console.log(imageRandom)
    let obstaculo = new Enemy(posicionY, imageEnemies[imageRandom])
        console.log(posicionY)
    enemies.push(obstaculo)
    }
}
//generateObstaculos()
console.log(enemies)

function imprimirObstaculos(){
    for(let obstaculo of enemies){
        obstaculo.draw()
    }

}

// 2. funcion updatecanvas para que el canvas se actualice y entre la animacion.
function updateCanvas()
{
    frames ++;
    generateObstaculos();
    //console.log(enemies)
    ctx.clearRect(0,0,canvas.width,canvas.height) //esto es para limpiar el canva y que no se vea arrastrado.
    fondo.draw()
    //heroes
    covidHeroe.draw(),
    alphaHeroe.draw(),  
    deltaHeroe.draw(),
    omicronHeroe.draw(),
    //Enemies
    imprimirObstaculos()
    // cubrebocasEnemy.draw(),
    // tapeteEnemy.draw(),
    // lysolEnemy.draw(),
    // gelEnemy.draw(),
    // vacunaEnemy.draw()
    

    
    requestAnimationFrame(updateCanvas)
}
updateCanvas()

//Movimiento

addEventListener("keydown",(event)=> 
{
    //Izquierda (tecla A)
    if (event.keyCode ===65) 
    {
        covidHeroe.x -= 10,
        alphaHeroe.x -= 10,
        deltaHeroe.x -= 10,
        omicronHeroe.x -= 10
    }

    //derecha (tecla D)
    if (event.keyCode === 68)
    {
        covidHeroe.x +=10
        alphaHeroe.x += 10
        deltaHeroe.x += 10,
        omicronHeroe.x += 10
            
    };
    

    // arriba (tecla W)
    if (event.keyCode === 87 )
    {
        covidHeroe.y -= 20,
        alphaHeroe.y -= 20,
        deltaHeroe.y -= 20,
        omicronHeroe.y -= 20
    }

    // abajo

    if (event.keyCode === 83)
    {
        covidHeroe.y += 20,
        alphaHeroe.y += 20,
        deltaHeroe.y += 20,
        omicronHeroe.y += 20
    }

  

})



