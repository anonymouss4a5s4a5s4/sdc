const mongoose = require("mongoose");

var violationSchema = mongoose.Schema({
    id:Number,
    timastamp:Date,
    lacation:String,
    image_url:String,
    confidence:Number,
    boat_count:Number,
    camera_id:String
 });
 var Violation = mongoose.model("Violation", violationSchema);
 module.exports = Violation