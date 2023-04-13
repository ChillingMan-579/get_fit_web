const button = document.getElementById("calculate")
const output = document.getElementById("output");
const result = document.querySelector(".result");
const description = document.querySelector(".description");


button.addEventListener("click", () =>{

            var gender = ((document.getElementById("gender").selectedIndex)+1)
            var height = parseFloat(document.querySelector(".height").value)
            var weight = parseFloat(document.querySelector(".weight").value)
            var age = parseFloat(document.querySelector(".age").value)
            var exercise = ((document.getElementById("exercise-routine").selectedIndex)+1)
			var result = 0
			var complete = true
            
			if (height === "" || isNaN(height) || (height<=0)){
				document.getElementById("height-error").innerHTML = "Please enter number only or enter a valid height";
				complete=false
			}else{
				document.getElementById("height-error").innerHTML = '';
			}
			
			if (weight === "" || isNaN(weight) || (weight<=0)){
				document.getElementById("weight-error").innerHTML = "Please enter number only or enter a valid weight"
				complete=false
			}else{
				document.getElementById("weight-error").innerHTML = '';
			}
			
			if (age === "" || isNaN(age) || (age<=0)){
				document.getElementById("age-error").innerHTML = "Please enter number only or enter a valid age"
				complete=false
			}else{
				document.getElementById("age-error").innerHTML = '';
			}
			
            if (gender == 1) 
			{	
				result = ((10 * weight) + (6.25 * height) - 5 * age + 5) * (exercise * 0.175 + 1.025)
            }
			else if (gender == 2)
			{
                result = ((10 * weight) + (6.25 * height) - 5 * age - 161) * (exercise * 0.175 + 1.025)
			}
			if(complete){
			result = "Anda membutuhkan " + (Math.round(result * 100) / 100) + " Kalori per hari !"
			console.log(result)
			document.getElementById("info").style.visibility="visible"
			document.getElementById("info").innerHTML = result
			}
		})