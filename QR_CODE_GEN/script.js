var wrapper=document.querySelector(".wrapper");
var generateBtn=document.querySelector(".form button");
var qrInput=document.querySelector(".form input");
var qrImg=document.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    var qrValue=qrInput.value;//.value gives the text in textbox input    
    if(!qrValue){//If qr value is empty return from here
        return;
    }
    generateBtn.innerHTML="Generating QR Code...."
    console.log(qrValue);
    // used this api "https://goqr.me/api/"
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{ //After loading of page
        wrapper.classList.add("active");
        generateBtn.innerHTML="Generate QR Code";
    })
})

// when we press some key then keydown takes place and when we release key then keyup takes place
// key stores the value of letter we input on keyboard
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})