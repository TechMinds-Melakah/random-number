const GenerateBtn = document.querySelector(".generate");

GenerateBtn.addEventListener('click', generateRandomNum);

function generateRandomNum(){
   const min = document.querySelector("#min").value;
   const max = document.querySelector("#max").value;

   randomNum = Math.floor(Math.random() * parseInt(max));

   if(randomNum >=parseInt(min)){
const randomNumE = document.querySelector("#result");
randomNumE.innerHTML = randomNum;
   }
}