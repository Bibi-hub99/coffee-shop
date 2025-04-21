const mobileShowSlideBtn = document.getElementById("bars-btn")
mobileShowSlideBtn.addEventListener("click",showMobileSlide)
const closeMobileSlideBtn = document.getElementById("close-mobile-slide")
closeMobileSlideBtn.addEventListener("click",hideMobileSlide)

function showMobileSlide(){
    document.getElementById("mobile-slide").style.width = '50%'
}

function hideMobileSlide(){
    document.getElementById("mobile-slide").style.width = '0%'
}