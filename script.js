function locomotive() {
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
locomotive()

function loaderanime() {
   var tl = gsap.timeline()
    tl.from(".line h1",{
        y:150,
        stagger:.25,
        duration:.6,
        delay:.5,
    });

    tl.from("#line1",{
        opacity:0,
        onStart:function(){
            var h5 = document.querySelector("#line1 h5");
            var grow = 0;
            setInterval(function(){
                if (grow < 100) {
                    h5.innerHTML = grow++;
                } else {
                    h5.innerHTML = grow;
                }
            },30)
        }
    });

    tl.to(".line h2",{
        animationName:"anime",
    })

    tl.to("#loader",{
        opacity:1,
        duration:6.5,
        delay:-5,
    });

    tl.from("#page1",{
        delay:1,
        y:1800,
        opacity:0,
        ease:Power4,
    })
    tl.to("#loader",{
        y:-1000,
        duration:1,
        dispay: "none",
    }) 
    tl.from("#nav",{
        opacity:0,
        y:-50,
    })
    tl.from("#t1 h1,#t2 h1,#t3 h2,#t3 h3,#t4 h1",{
        y:110,
        stagger:.2,
        delay:.25,
    })
    tl.from("#t1, #page2",{
        opacity:0,
    },"-=1.2");
}
loaderanime()

function crsranime() {
    var VC = document.querySelector("#vcont");
    var video = document.querySelector("#vcont video"); 
    VC.addEventListener("mouseenter",function(){
        VC.addEventListener("mousemove",function(dets){
            gsap.to("#vcrsr",{
                left:dets.x-475,
                y:dets.y-200,
            })
        })
    })
    VC.addEventListener("mouseleave",function(){
        gsap.to("#vcrsr",{
            top: "10%",
            left: "75%",
        })
    })

    var flag = 0
    VC.addEventListener("click",function(){
        if(flag == 0){
            video.play()
            video.style.opacity = 1
            document.querySelector("#vcrsr").innerHTML = `<i class="ri-pause-fill"></i>`
            gsap.to("#vcrsr",{
                scale:0.5
            })
            flag = 1
        }else{
            video.pause()
            video.style.opacity = 0
            document.querySelector("#vcrsr").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#vcrsr",{
                scale:1
            })
            flag = 0
        }
    })
}
crsranime()

function sheryAnime(){
    Shery.imageEffect ("#image",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272614420781222},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
}
sheryAnime()

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y,
    })
})
document.querySelector("#t3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })    
})
document.querySelector("#t3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })    
})