const constant ={}

constant.DATA_DIR='../data';
constant.RAW_DIR=constant.DATA_DIR+'/raw';
constant.DATASET_DIR=constant.DATA_DIR+"/dataset";
constant.IMG_DIR=constant.DATASET_DIR+"/img";
constant.JSON_DIR=constant.DATASET_DIR+"/json";
constant.SAMPLES=constant.DATASET_DIR+"/samples.json";

if(typeof module!=="undefined"){
    module.exports=constant
}