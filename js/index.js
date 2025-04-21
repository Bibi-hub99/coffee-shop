const mobileShowSlideBtn = document.getElementById("bars-btn")
mobileShowSlideBtn.addEventListener("click",showMobileSlide)
const closeMobileSlideBtn = document.getElementById("close-mobile-slide")
closeMobileSlideBtn.addEventListener("click",hideMobileSlide)

const joinNowBtn = document.getElementById('join-now-btn')
joinNowBtn.addEventListener("click",navigateToMembership)

function showMobileSlide(){
    document.getElementById("mobile-slide").style.width = '50%'
}

function hideMobileSlide(){
    document.getElementById("mobile-slide").style.width = '0%'
}

function triggerCookiesBanner(){

    const cookiesExist = JSON.parse(localStorage.getItem("cookie-state"))

    if(!cookiesExist && cookiesExist !== false && cookiesExist !== true){
        console.log(cookiesExist)
        document.getElementById("cookies-banner").style.display = 'block'
    }else{
        document.getElementById("cookies-banner").style.display = 'none'
    }
}

function navigateToMembership(){
    window.location.href = './coffee/membership.html'
}

setTimeout(triggerCookiesBanner,3000)