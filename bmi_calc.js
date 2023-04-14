const button = document.getElementById("calculate")
const output = document.getElementById("output");
const result = document.querySelector(".result");
const description = document.querySelector(".description");
const underweightDesc = `
Akibat
<p>
Kekurangan berat badan dapat menyebabkan beberapa permasalahan seperti masalah fisik, yang termasuk kulit 
kering, rontoknya rambut, dan berpengaruh pada kesehatan gigi. Selain itu akibat lain yang dapat ditimbulkan 
adalah seringnya lelah dan sakit dikarenakan nutrisi tubuh yang tidak mencukupi serta pertumbuhan yang 
terganggu dan tidak optimal pada anak-anak. 
</p>
Penyebab
<p>
Beberapa orang sudah secara memiliki metabolisme yang tinggi sejak lahir, yang mengakibatkan 
mereka memiliki berat badan yang rendah walaupun mereka sudah berusaha makan makanan yang memiliki 
banyak kalori, namun kekurangan berat badan juga disebabkan oleh faktor-faktor lain seperti gangguan pola 
makan karena sakit atau gangguan mental. Beberapa orang juga dapat kekurangan berat badan akibat membakar 
kalori lebih banyak dalam aktivitas fisik  dibandingkan yang didapatkan, dan secara umum karena pola makan 
yang kurang baik.
</p>
Perawatan
<p>
Untuk menangani kekurangan berat badan, maka hal yang paling sederhana yang dapat dilakukan adalah 
mengonsumsi makanan yang cukup, namun juga dengn nutrisi yang sesuai. Apabila pada awalnya tidak dapat 
makan banyak dalam waktu yang singkat, maka juga dapat membuat pola makan yang lebih sering agar nutrisi 
dalam tubuh tetap terjaga. Dengan mengonsumsi makanan yang lebih banyak namun tetap memiliki nutrisi 
seimbang, maka anda dapat meningkatkan berat badan tetapi masih mempunyai fisik yang sehat. Namun jika 
masih ada kesulitan, hal yang selalu dapat dilakukan adalah berkonsultasi pada dokter untuk menangani masalah tersebut.
</p>`

const overweightDesc = `
Akibat
<p>
Hal yang dapat ditimbulkan akibat berat badan yang berlebihan dapat termasuk rasa kelalahantidak nyaman 
akibat banyaknya tekanan beban tubuh. Selain itu hal lain yang dapat ditimbulkan akibat berat badan yang 
berlebihan adalah gangguan terhadap kesehatan mental, nyeri punggung, otot dan sendiri, serta juga dapat 
menyebabkan berbagai penyakit seperti diabetes, kanker

</p>

Penyebab
<
Secara garis besar, penyebab dari berat badan yang berlebihan disebabkan oleh mengonsumsi lebih banyak 
makanan / energi dibandingkan yang sebenarnya dibutuhkan. Selain itu hal lain yang dapat menyebabkan berat 
badan yang berlebih adalah kebiasaan pola makan, metabolisme tubuh, masalah kesehatan mental seperti emosi 
dan stres, kualitas tidur yang buruk, dan kurangnya mengonsumsi makanan dengan nutrisi seimbang.p>
</p>

Perawatan
<
Untuk menangani masalah berat badan yang berlebihan, hal umum yang dapat dilakukan adalah menjaga pola 
makan yang teratur dan sehat, serta juga melakukan aktivitas fisik yang cukup agar energi yang dikeluarkan 
seimbang dengan energi yang didapatkan, yang dapat ditingkatkan lagi agar secara perlahan berat badan dapat 
diturunkan menjadi kondisi yang lebih sehatp>
</
`

button.addEventListener("click", () =>{
    const height = parseFloat(document.querySelector(".height").value);
    const weight = parseFloat(document.querySelector(".weight").value);
    const heightError = document.getElementById("height-error");
    const weightError = document.getElementById("weight-error");
    let height_status = false;
    let weight_status = false;

    if (height === "" || isNaN(height) || (height<=0)){
        heightError.innerHTML = "Please enter number only or enter a valid height";
    }else{
        heightError.innerHTML = '';
        height_status=true;
    }
    if (weight === "" || isNaN(weight) || (weight<=0)){
        document.getElementById("weight-error").innerHTML = "Please enter number only or enter a valid weight"
    }else{
        weightError.innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        let bmi = ((weight / height/height)*10000).toFixed(2);
        //output.innerHTML = "Your BMI is " + bmi;
        if(bmi < 18.5){
            result.innerHTML = `Your BMI result is ${bmi} (underweight)`
            description.innerHTML = underweightDesc;
        } else if (bmi >= 18.5 && bmi <= 25){
            result.innerHTML = `Your BMI result is ${bmi} (healthy)`
            description.innerHTML = "Selamat! Anda sudah mempunyai berat tubuh yang sehat. Tetap jaga pola makan yang teratur dan pertahankan gaya hidup yang sehat.";
        } else if (bmi > 25 && bmi < 30){
            result.innerHTML = `Your BMI result is ${bmi} (overweigth)`
            description.innerHTML = overweightDesc
        } else {
            result.innerHTML = `Your BMI result is ${bmi} (overweight - obese)`
            description.innerHTML = overweightDesc
        }
    } else {
        return;
    }
})