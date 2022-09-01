// business data
let data = {
  business: [
    {
      img: './img/Star.svg',
      title: 'Rewards',
      desc: 'The best credit cards offer some tantalizing combinations of promotions and prizes'
    },
    {
      img: './img/Shield.svg',
      title: '100% Secured',
      desc: 'We take proactive steps make sure your information and transactions are secure'
    },
    {
      img: './img/Send.svg',
      title: 'Balance Transfer',
      desc: 'A balance transfer credit card can save you a lot of money in interest charges'
    },
  ],

  testimonials: [
    {
      quote_img: './img/quotes.svg',
      words: 'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      person_img: './img/people01.png',
      name: 'Herman Jensen',
      status: 'Founder & Leader',
    },
    {
      quote_img: './img/quotes.svg',
      words: "Money makes your life easier. If you're lucky to have it, you're lucky",
      person_img: './img/people02.png',
      name: 'Steve Mark',
      status: 'Founder & Leader',
    },
    {
      quote_img: './img/quotes.svg',
      words: 'It is usually people in the money business, finance, and international trade that are really rich.',
      person_img: './img/people03.png',
      name: 'Kenn Gallagher',
      status: 'Founder & Leader',
    },
  ]

}

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('block')
  nav.classList.toggle('hidden')
})


const fade_ins = document.querySelectorAll('.fade_in');

// const sliders = document.querySelectorAll(".slide-in")

const optionsOnScroll = {
  threshold: 0.25,
  rootMargin: "0px 0px -100px 0px"
}

const animateOnScroll = new IntersectionObserver(function(entries, animateOnScroll) {
   // looping through the entries
   entries.forEach(entry => {
      if(!entry.isIntersecting) {
         return
      } else {
         // target the current entry and add the appear class to it
         entry.target.classList.add('appear');
         // unobserve all entry that is not intersecting
         animateOnScroll.unobserve(entry.target);
      }
   })
}, optionsOnScroll)

// Looping through the fadeIns and calling the animateOnScroll.observe() fnx
fade_ins.forEach(fade_in => {
  animateOnScroll.observe(fade_in)
});



// Target the following element
const business_right_side = document.querySelector('.business_right_side');

const testimonials_container = document.querySelector('.testimonials_container');

const display_content = () => {
  // Map through businessData
  let business_content = data.business.map((data) => {
    return `
    <div class="flex items-center py-4 md:p-4 md:hover:bg-gradient-to-tr from-hoverBgFrom to-hoverBgTo md:rounded-[10px] md:hover cursor-pointer">
      <div class="rounded-[50%] w-[5rem] h-[2.4rem] md:w-[3.5rem] md:h-[2.8rem] bg-dimBlue flex items-center justify-center mr-5">
          <img src=${data.img} class="w-[45%] h-[45%] object-contain" alt="">
      </div>
      <div>
          <h2 class='text-textWhite text-base font-semibold w-full'>${data.title}</h2>
          <p class="text-slate-400 text-[0.9rem]">${data.desc}</p>
      </div>
    </div>
    `
  });

  let testimonials_content = data.testimonials.map((data) => {
    return `
    <div class="md:p-6 md:hover:bg-gradient-to-b from-hoverBgFrom to-hoverBgTo md:hover: cursor-pointer md:rounded-[10px]">
      <img src="./img/quotes.svg" class="w-[30px] h-[27.6px] object-contain" alt="">
      <p class="text-textWhite my-8 text-[0.9rem]">
          Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
      </p>
      <div class="flex">
          <img src="./img/people01.png" class="w-[48px] h-[48px] rounded-full" alt="">
          <div class="ml-[10px]">
              <h2 class="text-textWhite text-[0.9rem]">Herman Jensen</h2>
              <p class="text-slate-400 text-[0.8rem]">Founder & Leader</p>
          </div>
      </div>
    </div>
    `
  })

  business_content = business_content.join('');

  testimonials_content = testimonials_content.join('');

  // Target parent element
  business_right_side.innerHTML = business_content;

  testimonials_container.innerHTML = testimonials_content;

}

display_content();


