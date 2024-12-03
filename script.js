function loadingAnimation() {     
    var tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5



    })

    tl.from("#line-pt1, .line h2", {

        opacity: 0,
        onStart: function () {

            var h5timer = document.querySelector("#line-pt1 h5");
            var grow = 0;


            setInterval(function () {

                if (grow <= 100) {

                    h5timer.innerHTML = grow++;

                }
                else {
                    h5timer.ineerHTML = grow;
                }

            }, 34)


        }
    })


    tl.to('.line h2', {

        opacity: 1,
        animationName: "anime"

    })

    tl.to("#loader", {

        opacity: 0,
        duration: 0.2,
        delay: 0

    })



    tl.from("#page1", {

        y: 1200,
        opacity: 0,
        ease: Power4,
        duration: 0.9

    })

    tl.to("#loader", {
        display: 'none'
    });

    tl.from("#nav",{

        opacity:0,
        duration:0.5
    })



    tl.from("#hero1 h1 ,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{

        y:100,
        stagger:0.2,
    })



}
loadingAnimation()
// loader wali animation

function cursorAnimation(){
    document.addEventListener('mousemove',function(dets){

gsap.to("#crsr",{

x:dets.x,
y:dets.y
}) 
})



// Shery.makeMagnet("#nav-pt2 h4" , {

//     strength: 0.3, 
//     distance: 100, 
//     damping: 0.2,

// });

}
// shery js comment out kr rkhi hai ek bar use thik krna hai...
cursorAnimation()
// cursor aur magnet wali animation with sheryjs