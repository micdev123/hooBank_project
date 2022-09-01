const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('block')
  nav.classList.toggle('hidden')
})


// const fade_ins = document.querySelectorAll('.fade_in');

// // const sliders = document.querySelectorAll(".slide-in")

// const optionsOnScroll = {
//    threshold: 0.25,
//    rootMargin: "0px 0px -100px 0px"
// }

// const animateOnScroll = new IntersectionObserver(function(entries, animateOnScroll) {
//    // looping through the entries
//    entries.forEach(entry => {
//       if(!entry.isIntersecting) {
//          return
//       } else {
//          // target the current entry and add the appear class to it
//          entry.target.classList.add('appear');
//          // unobserve all entry that is not intersecting
//          animateOnScroll.unobserve(entry.target);
//       }
//    })
// }, optionsOnScroll)

// // Looping through the fadeIns and calling the animateOnScroll.observe() fnx
// fade_ins.forEach(fade_in => {
//    animateOnScroll.observe(fade_in)
// });


