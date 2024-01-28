document.querySelector(".bars").addEventListener("click",()=>{
    document.querySelector(".phone").style.right ="0";
    })
    document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".phone").style.right ="-150px";
    })
    function scrolldown() {
        var scrollDistance = 0.8 * window.innerHeight;
        window.scrollBy({ top: scrollDistance, behavior: 'smooth' });
    }