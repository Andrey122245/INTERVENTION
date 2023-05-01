document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true 
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
    const footerVideo = document.querySelector('.footer_video');
    const footerVideoLink = document.querySelector('.footer_video_link');
    const btn = document.querySelector('#btn_render');
    const modal = document.querySelector('#modal');
    const form = document.querySelector(".main_form");
    const btnCloseVideo = document.querySelector('#btn_close_video');

    form.addEventListener('submit',function(e){
        e.preventDefault()
        const inputs = form.querySelectorAll('.main_inputs');
        inputs.forEach((input)=>{
            input.querySelector('input').addEventListener('input',function(){
                if (this.value.length > 0) {
                    input.classList.remove('error') 
                }
            });
            if (input.querySelector('input').value === '') {
                input.classList.add('error')
            }
            else {
                input.classList.remove('error')   
            }
        });
           if(form.querySelectorAll('.error').length === 0) {
                modal.classList.add('active');
            }
             modal.addEventListener('click',function(){
                event.preventDefault();
            if (event.target.classList.contains('modal') || event.target.classList.contains('btn_close'))modal.classList.remove('active');
        });
    });


    footerVideoLink.addEventListener('click',function(e) {
        e.preventDefault();
        footerVideo.classList.add('active');
        const video = document.querySelector('#video');
    });
    btnCloseVideo.addEventListener('click',function(e) {
        e.preventDefault();
        footerVideo.classList.remove('active');
    });

    const headerContainer = document.querySelector('.header_container');
    document.querySelector('.menu_toggle').addEventListener('click',function(e){
        e.preventDefault();
        headerContainer.classList.toggle('active');
    });
}); 