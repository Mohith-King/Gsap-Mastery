// first nenu box ki animation iccha , animation page open chesinappudu opacity nunchi kanpichide taravth scale ayindhi , malli nenu oka function iccha , key name "onComplete" function tho malli box ne target chesa chesi yoyo,duration,repeat,y axis icchi malli inko animation animation complete ayindhi ani

// gsap.to(".box", {
//   duration: 1.5,
//   scale: 0.8,
//   opacity: 1,
//   onComplete: () => {
//     gsap.to(".box", {
//       yoyo: true,
//       y: -100,
//       repeat: -1,
//       duration: 0.3,
//       backgroundColor: "red",
//     });
//   },
// });

gsap.to(".box", {
  duration: 1,
  scale: 0.8,
  opacity: 1,
  onComplete : () => {
    gsap.to(".box",{
        y : -100,
        yoyo : true,
        duration : 0.3,
        repeat : -1,
        backgroundColor : "red"
    })
  }
});
