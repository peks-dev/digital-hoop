export const btnSecundary = document.querySelectorAll(".btn-secundary")
export const tabsButtons = document.querySelector(".tabsV2__btns")
export const tabsVideo = document.querySelector(".tabsV2__video")

console.log(tabsVideo.getAttribute('src'))

btnSecundary.forEach((btn, i)=>{
    btn.addEventListener("click",(e)=>{
        tabsVideo.pause()
        for(i=0;i<btnSecundary.length;i++){
            btnSecundary[i].classList.remove("btn-secundary--active")
        }
        if(e.target.id == "btn-1"){
            btnSecundary[0].classList.add('btn-secundary--active')
            tabsVideo.src = "./assets/cbm-mobile.mp4"
            tabsVideo.load()
        } else {
            btnSecundary[1].classList.add('btn-secundary--active')
            tabsVideo.src = "./assets/guerreros-mobile.mp4"
            tabsVideo.load()
        }
    })
})