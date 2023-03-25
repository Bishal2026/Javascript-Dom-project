let btn = document.getElementById("button");
const randomColor = () =>{
    let val = "0123456789ABCDEF";
    let constid ="#";
    for(let i =0; i<6; i++){
        constid = constid +val[Math.floor(Math.random()*16)];

    }
    return constid;

}
console.log(randomColor());

let changeColor =() =>{
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click",changeColor);