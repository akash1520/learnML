const draw={};

draw.path=(ctx,path,color="black")=>{
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(...path[0]); // "..." is called spread operator, to learn more about it checkout README file
    for(let i=1;i<path.length;i++){
        ctx.lineTo(...path[i]);
    }
    ctx.stroke();
}