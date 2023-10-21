const accordions = document.querySelectorAll('.accordion__item');
  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const accordionBtn = self.querySelector('.accordion__item-btn');
      const accordionText = self.querySelector('.accordion__item-text');
      self.classList.toggle('active');

      if(self.classList.contains('active')) {
        accordionText.style.maxHeight = accordionText.scrollHeight + "px";
        accordionBtn.setAttribute('aria-expanded', true);
        accordionText.setAttribute('aria-hidden', false)
      } else {
        accordionText.style.maxHeight = null;
        accordionBtn.setAttribute('aria-expanded', false);
        accordionText.setAttribute('aria-hidden', true);
      }

    });


  });
