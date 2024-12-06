function locomotiveAnimation(){

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    


}

locomotiveAnimation()

// locomotive animation ka function with calling

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


    tl.from("#hero1 , #page2",{
opacity:0,
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
// cursorAnimation()
// cursor aur magnet wali animation with sheryjs