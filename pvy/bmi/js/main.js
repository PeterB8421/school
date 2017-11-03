document.getElementById('count').addEventListener('click', function(){
    var m = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    var bmi = (m / Math.pow(h, 2)).toFixed(2);
    console.log(bmi);
    document.getElementById('result').innerHTML = 'Vaše BMI: '+bmi;
})