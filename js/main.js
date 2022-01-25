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

const cubrebocas = new Image()                              //Villano
cubrebocas.src= "../assets/images/cubrebocas.png"

const tapete = new Image()                                  //Villano
tapete.src="../assets/images/jerga.png"

const lysol= new Image()                                    //Villano
lysol.src= "../assets/images/Lysol.png"

const gel = new Image ()                                    //Villano
gel.src= "../assets/images/gel.png"

const vacuna= new Image()                                   //Villano
vacuna.src="../assets/images/Vacuna.png"

const fondoOriental= new Image()                            //Villano
fondoOriental.src= "../assets/images/Fondo oriental.png"

const fondoEuropeo= new Image()                             //Villano
fondoEuropeo.src="../assets/images/fondo europeo.png"

const fondoAdelN =new Image()                               //Villano
fondoAdelN.src="../assets/images/fondo a del n.png"

const fondoAdelS= new Image()                               //Villano
fondoAdelS.src= "../assets/images/fondo a del sur.png"

// fondoOriental.onload= () => {                            // asi se mete una imagen
//     ctx.drawImage(fondoOriental,50,10,1500,600)
// }





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
        ctx.drawImage(this.img,this.x,this,y,this.width,this.height)
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
            }

            draw()
            {
               // ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            }

        }

        class Delta extends Characters
        {
            constructor(x,y,w,h)
            {
                super(x,y,w,h)
                this.image1 = delta
                this.image=this.image1
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
            }

            draw()
            {
                //ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            }

        }


        


//Llamar a las clases o instancear a las clases para poder utilizar sus metodos y propiedades 
const fondo = new Background()
const covidHeroe = new Covid(15,200,120,120)
const alphaHeroe = new Alpha (15,450,120,120)
const deltaHeroe = new Delta (15,450,120,120)
const omicronHeroe = new Omicron(15,450,120,120)



// 2. funcion updatecanvas para que el canvas se actualice y entre la animacion.
function updateCanvas()
{
    frames ++;
    ctx.clearRect(0,0,canvas.width,canvas.height) //esto es para limpiar el canva y que no se vea arrastrado.
    fondo.draw()
    covidHeroe.draw()
    alphaHeroe.draw()   
    deltaHeroe.draw()
    omicronHeroe.draw()
  

    requestAnimationFrame(updateCanvas)
}
updateCanvas()



//Movimiento

addEventListener("keydown",(event)=> 
{
    //Izquierda (tecla A)
    if (event.keyCode ===65) 
    {
        Characters.x -= 5
    }

    //derecha (tecla B)
    if (event.keyCode === 68)
    {
        Characters.x += 5
    }

    // arriba (tecla W)
    if (event.keyCode === 87 )
    {
        Characters.y += 5 
    }

    // abajo

    if (event.keyCode === 83)
    {
        Characters.y -= 5
    }





})


