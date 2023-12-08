var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var openBtn = document.querySelector(".btn-open");
var closeBtn = document.querySelector(".btn-close");

var submit = document.querySelector(".submit");     
var submitOpen = document.querySelector(".submit-open");
var submitClose = document.querySelector(".submit-close");

function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")

    console.log("open modal")

}

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")

    console.log("Close modal")
}

 overlay.addEventListener("click", closeModal);
 openBtn.addEventListener("click", openModal);
 closeBtn.addEventListener("click", closeModal);


////////////////////////////////////////////////////


function openSubmit(){
    submit.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal.classList.add("hidden");
}

function closeSubmit(){
    submit.classList.add("hidden");
    overlay.classList.add("hidden");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
}

submitOpen.addEventListener("click" , openSubmit);
submitClose.addEventListener("click" , closeSubmit);
overlay.addEventListener("click" , closeSubmit)




var callOpen = document.querySelector(".call-open")
function openCall(){
    alert("145-ə, yəni bankimizin qaynar xəttinə zəng etməyə əminsən?");
}
callOpen.addEventListener("click" , openCall)


var onlineOpen = document.querySelector(".online-open")
function openOnline(){
    alert("bu uje men giren kol deyil");
}
onlineOpen.addEventListener("click" , openOnline)


document.addEventListener("keydown" , function(event){

    if (event.key === "Escape"){
        closeModal()
    }
})