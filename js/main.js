/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
   let itemClass = this.parentNode.className
   
   for(i = 0; i < skillsContent.length; i++){
      skillsContent[i].className = 'skills__content skills__close'
   }
   if(itemClass === 'skills__content skills__close'){
      this.parentNode.className = 'skills__content skills__open'
   }
}

skillsHeader.forEach((el) =>{
   el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
      
tabs.forEach(tab =>{
   tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target)
      
      tabContents.forEach(tabContent =>{
         tabContent.classList.remove('qualification__active')
      })
      target.classList.add('qualification__active')
      
      tab.forEach(tab =>{
         tab.classList.remove('qualification__active')
      })
      tab.classList.add('qualification__active')
   })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () =>{
      modal(i)
   })
})

modalCloses.forEach((modalClose) => {
   modalClose.addEventListener('click', () =>{
      modalViews.forEach((modalView) =>{
         modalView.classList.remove('active-modal')
      })
   })
})


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
   const scrollUp = document.getElementById('scroll-up');
   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
   if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
   else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)