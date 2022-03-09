Webcam.set({
    height: 300,
    width: 400,
    image_format: "png",
    png_quality: 100,
});
camera = document.getElementById("webcam");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" class= "img-responsive"src="'+data_uri+'"/>';
    })
}
console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8RoLN6-6c/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Load!");
}

function check(){
     img = document.getElementById('captured_img');
     classifier.classify(img,gotResult);
}
function gotResult(error,results){
    console.log(results);
    if (error){
        console.error(error);
    }
    else {
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_object_acc").innerHTML = (results[0].confidence * 100).toFixed(2)+"%";
    }
}