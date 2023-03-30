const button = document.getElementById("calculate")
const output = document.getElementById("output");
const result = document.querySelector(".result");
const description = document.querySelector(".description");
const underweightDesc = `
Symptoms
<p> Some people who are underweight find they get sick all the time, or feel very tired. That may be because they are not getting all the nutrients they need from
their diet. They may also find their hair gets thinner or falls out, their skin gets very dry and their teeth are affected.
Children who are underweight may not grow as expected for their age. Things that could lead to someone being underweight for example stomach problems, 
cancer, thyroid problems, stress, anxiety, anemia, etc.
</p>
Cause
<p>
Some may be born naturally small and their low BMI is due to their genes or has a very high metabolism and find it hard to put on weight, even if they eat foods that have a lot of calories.
Some people may not follow a healthy, balanced diet because they forget to eat or they cannot afford nutritious foods. Others may not be eating properly because
they are sick, or their medicines make them feel nauseous. Some people who do a lot of physical activity burn up more calories than they can eat, leading to their being underweight.
Some physical conditions that may cause weight loss such as stomach problems, cancer, thyroid problems, etc. Or mental health problems that could cause weight loss for example stress, anxiety, etc.
</p>
How to Fix it
<p>
To gain weight you should eat nutritious foods to make sure your body gets all the nutrition it needs. You should eat food that contains carbohydrates that give 
you energy and could help you gain weight, protein to repair your body and build muscles, and vitamins and minerals to make you healthy. The aim is to gain
weight gradually by eating healthy foods. Even if you are underweight, try to avoid foods with a lot of added sugar, fat, and salt, like cakes, takeaway foods, 
and sugary drinks. You also can gain weight by eating snacks between your meals. 
</p>`
const overweightDesc = `
Symptoms
<p>Being overweight means that you are carrying too much weight in the form of body fat. Being overweight puts you in the highest weight range, above what’s 
considered healthy. Being overweight also means your body weight is outside the healthy range.</p>
Cause
<p>Many things can cause weight gain. For most people, obesity happens gradually by taking in more energy than your body needs over time. Foods and drinks 
contain energy (measured in kilojoules), which your body uses, especially during physical activity. The average adult needs 2,000 calories a day for women and 2,500 for men. Any extra energy you consume is stored as body fat.</p>
<p>Other things that can cause weight gain such as your family history (the habits you grew up with and the genes you got from your parents), your surroundings 
(what kinds of food are available and in what portions, and where you work and sleep), your metabolism (how efficiently your body turns food into energy
certain medical conditions that cause weight gain) such as hypothyroidism
certain medicines that cause weight gain as a side effect. 
Stress, low mood, poor-quality sleep, changing emotions, and poor access to healthy food can all cause people to take in more calories than they need. 
</p>
How to Fix it
<p>Some steps that you can take to help reduce the likelihood of obesity :
<ol>
<li>Eat well: Review how many high-energy, low-nutrition snack foods and sugary.
drinks you have, including juice, soft drink, and flavored milk. Consider how often you get takeaway.</li>
<li>Do enough physical activity: Only half of Australians do enough physical activity for good health.
</li>
<li>Limit alcohol: Review how much alcohol you drink (alcohol has many calories with no nutritional benefits).
</li>
</p>
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
        output.innerHTML = "Your BMI is " + bmi;
        if(bmi < 18.5){
            result.innerHTML = `Your BMI result is ${bmi} (underweight)`
            description.innerHTML = underweightDesc;
        } else if (bmi >= 18.5 && bmi <= 25){
            result.innerHTML = `Your BMI result is ${bmi} (healthy)`
            description.innerHTML = "Congrats! You have healthy weight. Keep eating healthy foods and keep the healthy lifestyle.";
        } else {
            result.innerHTML = `Your BMI result is ${bmi} (overweigth)`
            description.innerHTML = overweightDesc
        }
    } else {
        return;
    }
})