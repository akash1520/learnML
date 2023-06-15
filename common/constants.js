const constant ={}

constant.DATA_DIR='../data';
constant.RAW_DIR=constant.DATA_DIR+'/raw';
constant.DATASET_DIR=constant.DATA_DIR+"/dataset";
constant.IMG_DIR=constant.DATASET_DIR+"/img";
constant.JSON_DIR=constant.DATASET_DIR+"/json";
constant.COMMON_DIR="../common";
constant.JS_OBJECTS_DIR=this.COMMON_DIR+"/js_objects";
constant.SAMPLES=constant.DATASET_DIR+"/samples.json";
constant.SAMPLES_JS=constant.JS_OBJECTS_DIR+"/samples.js";

if(typeof module!=="undefined"){
    module.exports=constant
}