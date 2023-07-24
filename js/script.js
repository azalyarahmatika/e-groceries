function handleGetFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const zipCode = document.getElementById("zip-code").value;
    const status = document.getElementById("status");

    return {
        name, email, city, zipCode, status
    }
}

function isNumber(zipCode) {
    if(zipCode !== "") {
        return !isNaN(Number(zipCode));
    }
    return false;
}

function checkboxIsChecked(status) {
    if(!status.checked) {
        return false;
    }
    return true;
}

function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateFormData(formData) {
    const { name, email, city, zipCode, status } = formData;
    const isZipCode = isNumber(zipCode);
    const isStatus = checkboxIsChecked(status);
    const isEmail = isEmailValid(email);

    if(name === "" || !isEmail || city === "" || !isZipCode || !isStatus ) {
        return false;
    }
    
    return true;
}

const submitButton = document.getElementById("submit-form");
const warning = document.getElementById("warning");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const input = handleGetFormData();
    const result = validateFormData(input);

    if(result) {
        warning.innerHTML= "Berhasil Disubmit";
        return;
    }
    
    console.log("Periksa form anda sekali lagi");
    warning.innerHTML= "Periksa form anda sekali lagi";
})


// ===================== slider ======================
var slideIndex = 1;
setInterval(function(){
    plusDiv(1);
}, 1500);

function plusDiv(index) {
    showImage(slideIndex += index);
}

function showImage(index) {
    const imgList = document.getElementsByClassName("info__description-image");
    if( index > imgList.length ) { slideIndex = 1 };
    if( index < 1 ) { slideIndex = imgList.length };
    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}