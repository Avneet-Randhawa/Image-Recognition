Webcam.set({
    height:300,
    width:320,
    format:'png',
    png_quality: 90
})
Camera = document.getElementById("camera");
Webcam.attach(Camera);
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='image_captured' src='"+data_uri+"'>"
    })
}
console.log("ml version :" + ml5.version);
teachable = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/RETQh9iPP/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!");
}
function check(){
    img = document.getElementById("image_captured");
    console.log("check");
    teachable.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2) * 100 +"%" ;
    }
}
