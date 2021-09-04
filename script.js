const date_time = document.getElementById("date-time");
const today = new Date();
let date_array = [];
//pushing the date elements in the array


date_array.push(`Years : ${today.getFullYear()} <br>`);
date_array.push(`Months : ${today.getMonth()+1} <br>`);
date_array.push(`Days : ${today.getDay()} <br>`);
date_array.push(`Date : ${today.getDate()} <br>`);
date_array.push(`Hours : ${today.getHours()} <br>`);
date_array.push(`Minutes : ${today.getMinutes()} <br>`);
date_array.push(`Seconds : ${today.getSeconds()}<br>`);
date_array.push(`Milliseconds : ${today.getMilliseconds()}<br>`);
//date_array.push(`Time from 1970 : ${today.getTime()}<br>`);
date_array.push(`TimeZone Offset : ${today.getTimezoneOffset()}<br>`);


for (const i of date_array) {
  const spanSection = document.createElement('span');
  spanSection.innerHTML = i;
  date_time.append(spanSection);
}

const start = new Date().getTime();
let s;
let str = document.createElement('span');

for (let i = 1; i <= 500; i++) {
  for (let j = 1; j <= i; j++) {
    s += "* ";
  }
}

const end = new Date().getTime();

document.getElementById("time-difference").innerHTML = (`Time Difference = ${end-start} ms`);



//show details filled in the form in a dialog-box
function formalert()
{
  const name = document.getElementById("feedback");
  let res = "Form Details: \n\n";
  for(const j of name){
    res = res + `${j.name}: ${j.value}\n`;
}

alert(res);
name.reset();
}

document.getElementById("feedback").reset();
document.getElementById("submit-btn").addEventListener("click", function(event)
{
  event.preventDefault();
  formalert();
})

/*function formsub() {
  // e.preventDefault();
  const name = document.getElementById("feedback");
  let result = "Results Sent ->";
  for (const X of name) {
    result += `${X.name} : ${X.value}\n`
  }
  alert(result);
  name.reset();
}*/

/*document.getElementById("feedback").reset();
document.getElementById("submit-btn").addEventListener("click", function(event) {
  event.preventDefault();
  formsub();
});*/
