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


tl.to('.line h2',{

    opacity:1,
    animationName:"anime"
    
    })

tl.to("#loader", {

    opacity: 0,
    duration: 0.2,
    delay: 4

})



tl.from("#page1",{

    y:1200,
opacity:0,
ease:Power4,
duration:0.9

})

tl.to("#loader",{
    display:none
}) 