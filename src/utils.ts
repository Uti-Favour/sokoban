
//draw a canvas on the page
export function create_canvas(width : number, height: number){
    const canvas  = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    canvas.className = 'canvas_style'

canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = 'black';


document.body.appendChild(canvas)
}


//Function to draw image
export function draw_image(image_src : string){
let img = new Image()
img.src = image_src;
}


