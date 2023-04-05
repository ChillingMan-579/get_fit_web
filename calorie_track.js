var totalCal = 0;

function countRice(){
    let choices = document.createElement("div");
    let name  = document.createElement("div");
    let calories = document.createElement("div");
    let nameValue = document.getElementById("rice-name").innerText;
    let qtyValue = document.getElementById("rice-quantity").value;
    let calValue = document.getElementById("rice-cal").innerText;
    if ((qtyValue !== "" && isNaN(qtyValue) == false && (qtyValue >= 0))){
            name.innerText = nameValue;
            calories.textContent = (parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2) + " Cal";
            totalCal = totalCal + parseInt((parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2));
            name.classList.add("name");
            choices.classList.add("choices");
            choices.appendChild(name);
            choices.appendChild(calories);
            document.querySelector(".picked").appendChild(choices);
    } else{
        document.getElementById("rice-quantity").value = "";
    }
    document.getElementById("rice-quantity").value = "";
}

function countBeef(){
    let choices = document.createElement("div");
    let name  = document.createElement("div");
    let calories = document.createElement("div");
    let nameValue = document.getElementById("beef-name").innerText;
    let qtyValue = document.getElementById("beef-quantity").value;
    let calValue = document.getElementById("beef-cal").innerText;
    if ((qtyValue !== "" && isNaN(qtyValue) == false && (qtyValue >= 0))){
        name.innerText = nameValue;
        calories.textContent = (parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2) + " Cal";
        totalCal = totalCal + parseInt((parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2));
        name.classList.add("name");
        choices.classList.add("choices");
        choices.appendChild(name);
        choices.appendChild(calories);
        document.querySelector(".picked").appendChild(choices);
    } else{
        document.getElementById("beef-quantity").value = "";
    }
    document.getElementById("beef-quantity").value = "";
}

function countChicken(){
    let choices = document.createElement("div");
    let name  = document.createElement("div");
    let calories = document.createElement("div");
    let nameValue = document.getElementById("chicken-name").innerText;
    let qtyValue = document.getElementById("chicken-quantity").value;
    let calValue = document.getElementById("chicken-cal").innerText;
    if ((qtyValue !== "" && isNaN(qtyValue) == false && (qtyValue >= 0))){
        name.innerText = nameValue;
        calories.textContent = (parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2) + " Cal";
        totalCal = totalCal + parseInt((parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2));
        name.classList.add("name");
        choices.classList.add("choices");
        choices.appendChild(name);
        choices.appendChild(calories);
        document.querySelector(".picked").appendChild(choices);
    } else{
        document.getElementById("chicken-quantity").value = "";
    }
    document.getElementById("chicken-quantity").value = "";
}

function countMilk(){
    let choices = document.createElement("div");
    let name  = document.createElement("div");
    let calories = document.createElement("div");
    let nameValue = document.getElementById("milk-name").innerText;
    let qtyValue = document.getElementById("milk-quantity").value;
    let calValue = document.getElementById("milk-cal").innerText;
    if ((qtyValue !== "" && isNaN(qtyValue) == false && (qtyValue >= 0))){
        name.innerText = nameValue;
        calories.textContent = (parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2) + " Cal";
        totalCal = totalCal + parseInt((parseInt(qtyValue) / 100 * parseInt(calValue)).toFixed(2));
        name.classList.add("name");
        choices.classList.add("choices");
        choices.appendChild(name);
        choices.appendChild(calories);
        document.querySelector(".picked").appendChild(choices);
    } else{
        document.getElementById("milk-quantity").value = "";
    }
    document.getElementById("milk-quantity").value = "";
}

function countOther(){
    let choices = document.createElement("div");
    let name  = document.createElement("div");
    let calories = document.createElement("div");
    let nameValue = document.getElementById("other-name").value;
    let qtyValue = document.getElementById("other-quantity").value;
    let calValue = document.getElementById("other-cal").value;
    let serveValue = document.getElementById("other-serve").value;
    if ((calValue !== "" && isNaN(calValue) == false && (calValue >= 0)) &&
        (qtyValue !== "" && isNaN(qtyValue) == false && (qtyValue >= 0))){
        name.innerText = nameValue;
        calories.textContent = (parseInt(qtyValue) / serveValue * parseInt(calValue)).toFixed(2) + " Cal";
        totalCal = totalCal + parseInt((parseInt(qtyValue) / serveValue * parseInt(calValue)).toFixed(2));
        name.classList.add("name");
        choices.classList.add("choices");
        choices.appendChild(name);
        choices.appendChild(calories);
        document.querySelector(".picked").appendChild(choices);
    } else{
        document.getElementById("other-quantity").value = "";
        document.getElementById("other-cal").value = "";
        document.getElementById("other-name").value = "";
        document.getElementById("other-serve").value = "";
    }
    document.getElementById("other-quantity").value = "";
    document.getElementById("other-cal").value = "";
    document.getElementById("other-name").value = "";
    document.getElementById("other-serve").value = "";
}

function count()
{
    let targetCal = document.getElementById("target-cal").value;
	console.log(totalCal)
    if(totalCal > parseInt(targetCal))
    {
        document.getElementById("result").innerHTML = "kin la jan seme li 'olin' alasa li wile alasa e pakala jan ona, tan ona li pakala, taso tenpo lili la kama li kama. kama la ona li musi li pakala li ken pana pona tawa jan ona. sitelen la jan seme pi mi mute li pilin e ike pi sijelo ona, li kama jo e pona tan ni taso ? taso jan seme li jo e lawa poka jan ni: jan la ona li wile pilin pona lon kama pi ike ala, anu ona li wile ala pakala pi pona ala ? ante la mi mute li pana ike tawa jan pi wile pona lon tenpo ni, jan pi lukin ala tan wile en lukin ala e pakala lon tenpo kama. en ike sama tawa jan pi pali ala tan sijelo pona ala. ni la ona li sama e toki lon musi en pakala lon kama lili tan tenpo."
    }
	else
	{
		document.getElementById("result").innerHTML = "sina pona a"
	}
}