const draw = require("../common/draw")
const {createCanvas} = require('canvas');
const constant = require('../common/constants')
const utils = require("../common/utils")

const canvas= createCanvas(400,400);
const ctx=canvas.getContext('2d')



const fs = require('fs');

const fileNames = fs.readdirSync(constant.RAW_DIR);
const samples=[];
let id=1;
fileNames.forEach((fn)=>{
    const trimmedFileName = fn.trim(); // Trim whitespace and newline characters
    const filePath = constant.RAW_DIR + '/' + trimmedFileName;
    const content=fs.readFileSync(filePath);
    const {session, student, drawings}=JSON.parse(content);
    for(let label in drawings){
        samples.push({
                id,
                label,
                student_name:student,
                student_id:session
            });
        const jsonFilePath=constant.JSON_DIR+'/'+id+'.json';
        const imageFilePath=constant.IMG_DIR+'/'+id+'.png';
        const paths=drawings[label];
        fs.writeFileSync(
            jsonFilePath,
            JSON.stringify(paths)
        )
        generateImageFile(
            imageFilePath,
            paths
        );
        utils.printProgress(id,fileNames.length*8);
        id++;
    }
});

fs.writeFileSync(constant.SAMPLES,JSON.stringify(samples));

function generateImageFile(outFile,paths){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw.paths(ctx,paths);

    const buffer=canvas.toBuffer('image/png');
    fs.writeFileSync(outFile,buffer);
}