// Code for search logo click event
document.addEventListener('DOMContentLoaded', function() {
  const searchLogo = document.querySelector('.search-logo');
  
  searchLogo.addEventListener('click', function(e) {
      e.preventDefault(); 
      searchLogo.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.querySelector('.input-field');
  const placeholder = document.querySelector('.placeholder');
  
  inputField.addEventListener('focus', () => {
    placeholder.style.opacity = '0';
  });
  
  inputField.addEventListener('blur', () => {
    if (!inputField.value) {
      placeholder.style.opacity = '1';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('my-form');
  const submitBtn = document.getElementById('submit-btn');
  
  submitBtn.addEventListener('click', function() {
    // Hide placeholders
    const placeholders = document.querySelectorAll('.placeholder');
    placeholders.forEach(placeholder => {
      placeholder.style.display = 'none';
    });

    // Check if any input field is empty
    let allFilled = true;
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    if (!allFilled) {
      // Alert if any field is empty
      alert('Please fill in all fields.');
    } else if (form.checkValidity()) {
      // Submit form if all fields are filled and form is valid
      form.submit();
    } else {
      // Display validation error messages
      form.reportValidity();
    }
  });
});


// Code for Swiper initialization and button state update
document.addEventListener('DOMContentLoaded', function () {

  // let swipercontainer=JQuery('.postslider .swiper-container');
  // let swipernext=JQuery('.postslider .swiper-container .swiper-button-next');
  // let swiperprev=JQuery('.postslider .swiper-container .swiper-button-prev');
  // Initialize Swiper
  var swiper1 = new Swiper('.postslider .swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
      nextEl:'.postslider .swiper-container .swiper-button-next',
      prevEl: '.postslider .swiper-container .swiper-button-prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider .swiper-button-next',
          prevEl: '.postslider .swiper-button-prev',
        },
        pagination: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider .swiper-button-next',
          prevEl: '.postslider .swiper-button-prev',
        },
        pagination: false,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },  
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,

      },   
    },
     
  });
  var swiper2 = new Swiper('.postslider-1 .second-swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.postslider-1 .swiper-button-next',
        prevEl: ' .postslider-1 .swiper-button-prev',
    },
    breakpoints: {
   
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider-1 .swiper-button-next',
          prevEl: '.postslider-1 .swiper-button-prev',
        },
        pagination: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider-1 .swiper-button-next',
          prevEl: '.postslider-1 .swiper-button-prev',
        },
        pagination: false,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,

      },  
       
    },
  });
  var swiper3 = new Swiper('.postslider-3 .third-swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
      nextEl: '.postslider-3 .swiper-button-next',
      prevEl: '.postslider-3 .swiper-button-prev',
    },
    breakpoints: {
     
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider-3 .swiper-button-next',
          prevEl: '.postslider-3 .swiper-button-prev',
        },
        pagination: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider-3 .swiper-button-next',
          prevEl: '.postslider-3 .swiper-button-prev',
        },
        pagination: false,
      },  
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,
  
      },  
       
    },
   
  });  
  var swiper4 = new Swiper('.postslider-4 .fourth-swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.postslider-4 .swiper-button-next',
        prevEl: '.postslider-4 .swiper-button-prev',
    },
    breakpoints: {
   
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider-4 .swiper-button-next',
          prevEl: '.postslider-4 .swiper-button-prev',
        },
        pagination: false,
      },  
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider-4 .swiper-button-next',
          prevEl: '.postslider-4 .swiper-button-prev',
        },
        pagination: false,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },  
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,
  
      },  
       
    },  
  });
  var swiper5 = new Swiper('.postslider-5 .fifth-swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.postslider-5 .swiper-button-next',
        prevEl: '.postslider-5  .swiper-button-prev',
    },
    breakpoints: {
   
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider-5  .swiper-button-next',
          prevEl: '.postslider-5  .swiper-button-prev',
        },
        pagination: false,
      },  
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider-5  .swiper-button-next',
          prevEl: '.postslider-5  .swiper-button-prev',
        },
        pagination: false,
      },
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },  
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,
  
      },  
       
    },  
     
  });
  var swiper6 = new Swiper('.postslider-6 .sixth-swiper-container', {
    slidesPerView: 3.5, 
    spaceBetween: 30, 
    navigation: {
        nextEl: '.postslider-6  .swiper-button-next',
        prevEl: '.postslider-6 .swiper-button-prev',
    },
    breakpoints: {
   
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.postslider-6 .swiper-button-next',
          prevEl: '.postslider-6 .swiper-button-prev',
        },
        pagination: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: '.postslider-6 .swiper-button-next',
          prevEl: '.postslider-6 .swiper-button-prev',
        },
        pagination: false,
      },  
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      300:{
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:false,
  
      },  
       
    },    
  });
  var swiper7 = new Swiper('.another-swiper-container', {
    slidesPerView: 1,  // Show 1 slide at a time
    spaceBetween: 10,  // Space between slides
    navigation: {
      nextEl: '.another-swiper-container .swiper-button-next',
      prevEl: '.another-swiper-container .swiper-button-prev',
    },
    breakpoints: {
      425: {
        pagination: {
          el: '.another-swiper-container .swiper-pagination',
          clickable: true,
        },
        // navigation: false // Hide navigation arrows
      }
    }
  }); 
     
});
    
      



