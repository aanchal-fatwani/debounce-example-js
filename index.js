
let count1 = 0,
  count2 = 0;
  let data = []

     async function f() {

      let promise = new Promise((resolve) => {
        fetch(
          "https://script.google.com/macros/s/AKfycbwZOjEDMw2ui12ppfK2MK2i2QUGZ4ZHaN3eVeXT8pltcGcDIcE/exec"
        )
          .then(response => resolve(response.json()))
      });
    
       data = await promise;
    
    }
    f()
   
    

let getData = c => {
  let inpVal = document.getElementById("search-bar" + c).value;
  if(inpVal){
  c === "1" ? count1++ : count2++;
  // let data = fetch(
  //   "https://script.google.com/macros/s/AKfycbwZOjEDMw2ui12ppfK2MK2i2QUGZ4ZHaN3eVeXT8pltcGcDIcE/exec"
  // )
  //   .then(response => response.json())
  //   .then(json => {
      let filterData = data.filter(el => el["Title"].toLowerCase().indexOf(inpVal) > -1).map((el) => el['Title']).slice(0, 10).toString().split('),').join(')</br>')
      document.getElementById('search-output' + c).innerHTML = filterData
    //});
  
  document.getElementById(`count${c}`).innerHTML = c === "1" ? count1 : count2;}
};
let debounced = () => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData("2");
    }, 300);
  };
};
document
  .getElementById("search-bar1")
  .addEventListener("keyup", () => getData("1"));
document.getElementById("search-bar2").addEventListener("keyup", debounced());
