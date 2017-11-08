document.getElementById('count').addEventListener('click', function(){
    var m = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    var bmi = (m / Math.pow(h, 2)).toFixed(2);
    console.log(bmi);
    if(bmi < 16.5 || bmi > 40){
        document.getElementById('result').style.color = "red";
    }
    else{
        document.getElementById('result').style.color = "black";
    }
    document.getElementById('result').innerHTML = 'Vaše BMI: '+bmi;
})