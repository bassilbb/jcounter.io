let addcount = document.querySelector("#addcount");
let lowercount = document.querySelector("#lowercount");
let counterValue = document.querySelector("#counterValue");

// let counter = 50;

let counter = 0;

addcount.addEventListener("click" , ()=>{
    counter++;
    counterValue.innerText = counter;
    countValue();
    
});

lowercount.addEventListener("click" , ()=>{
    counter--;
    counterValue.innerText = counter;
    countValue();
});
function countValue() {
    if (counter == 0) {
        lowercount.disabled = true;
    } else if (counter == 50) {
        addcount.disabled = true;
    } else {
        lowercount.disabled = false;
        addcount.disabled = false;
    }
    // countValue();
}