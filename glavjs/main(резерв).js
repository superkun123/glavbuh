$( document ).ready(function() {


// Главный слайдер







    var $status = $('.pagingInfo');
    var $slickElement = $('.slider-main');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' из ' + slick.slideCount);
    });

    $slickElement.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 500,
        fade: true,
        draggable: false,
swipe: false,
swipeToSlide: false,
touchMove: false,
draggable: false,
accessibility: false,
arrows: false,
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
        <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
        </svg></button>`
    });



    let sliderProgressBar = function (slider, bar, barLabel) {
      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
            
            bar
              .css('background-size', calc + '% 100%')
              .attr('aria-valuenow', calc );
            
            barLabel.text( calc + '% completed' );
      });
    }
    
    
    
    sliderProgressBar( $('#slider-js-card-hidden-1'), $('#progressBar1'), $('#progressBarLebel1')  )



    sliderProgressBar( $('#slider-js-card-hidden-2'), $('#progressBar2'), $('#progressBarLebel2')  )


    sliderProgressBar( $('#slider-js-card-hidden-3'), $('#progressBar3'), $('#progressBarLebel3')  )







    




    // Слайдер видео



    $('.video-slider-js').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        fade: true,
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
</svg>

    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
        <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
        </svg></button>`

      });



      if (window.matchMedia("(max-width: 766px)").matches) {

        $('.hidden-slider-team').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          speed: 500,
          fade: true,
          prevArrow: `<button type="button" class="slick-prev">
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#EA0319"/>
  <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#EA0319"/>
  </svg>
  
      
          </button>`,
          nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="white"/>
          <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="white"/>
          </svg></button>`
  
        });


      }
  
          
document.querySelector('#employee').addEventListener('click', function() {
  this.value = ''
})

document.querySelector('#docsValue').addEventListener('click', function() {
  this.value = ''
})


document.querySelector('#docsValueConsumer').addEventListener('click', function() {
  this.value = ''
})
// Бегущая строка

  //   $('.scroll-line').marquee({
	// 	startVisible: true, 
	// 	duplicated: false, 
	// 	speed: 200,
	// });



  $('.btn-link').on('click', function () {
    $(this).find('svg').toggleClass('rotate')
  })


  $('.hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('open-menu')
    $(this).toggleClass('hamburger--active')
    $('.mobile-close-png').toggleClass('none')
    $('.mobile-open-png').toggleClass('block')
    $('.callback').toggleClass('callback-toggle')
  })



    // Видео-слайдер




    $('.video-play').on('click', function(e) {
        e.preventDefault()
        let parentVideo = $(this).parent().get(0)
        // let video = $( ".video-modal" ).find('video')
        let video = $(parentVideo).find('video')
        video.get(0).play();
        $(video).toggleClass('pause')
        $(this).addClass('hide-video-btn')
    
        $('.pause').on('click', function() {
          video.get(0).pause()
          $('.video-play').removeClass('hide-video-btn')
        })
    
      
      })
      
      
      $('.video-fullScreen').on('click', function(e) {
          e.preventDefault()
        let video = document.querySelector( ".main-video" )
        if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
      })




      $('body').on('click', 'a.scroll', function(e){
        e.preventDefault()
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
        
      });



      // seach


      $('.search').on('click', function() {
        $('.city-search').toggleClass('block')
        $('.city-search').toggleClass('none')
      })

      $('.cross').on('click', function() {
        $('.city-search').toggleClass('block')
        $('.city-search').toggleClass('none')
      })

      $('body').on('click', function() {
        $('.city-search').removeClass('block')
      })



   $('.checkbox-label').on('click', function() {
     $('.radio-filter').removeClass('bg-red')
     $(this).find('.radio-filter').addClass('bg-red')
   })
    



      // quiz


   
    const quizScreens = document.querySelectorAll('.question')
    const quizBtn = document.querySelector('.question-1-btn')
    const proggresBarQuiz = document.querySelector('.progress-bar-striped')
    let summContainer = document.querySelector('.quiz-summ')
    let  i = 0
    let progressValue = 4
    let stepQuiz = 1
    let stepQuizValue = document.querySelector('.step-quiz')
    let summOfQuiz = 0
    const screenList = [... document.querySelectorAll('.question')]
    let patent = false
    let dr = false
    let ip = false
    let answers = []
    let historyPath = []
    let answersUser = [] 
    let pervDocAnswer = false
    let firstQuesion = 0
    let firstQuesionIP = 0
    let submitContainer = document.querySelector('.submit-container')

    quizBtn.disabled =  true
    

    const quizLabel = document.querySelectorAll('.quiz-label')
    const microBtn = document.querySelectorAll('.container-for-filter')
    const inputs = document.querySelectorAll('.modal-form__input')
    const back = document.querySelector('.back-btn')
    back.disabled = true


    if ( i == 0 ) {
      back.classList.add('none')
      console.log('убрал кнопку назад')
    } 
    

   

    

    quizLabel.forEach((elem) => {
      elem.addEventListener('click', () => {
        quizBtn.disabled =  false
        back.disabled = false
      })
    })


    microBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        quizBtn.disabled =  false
        back.disabled = false
      })
    })

    inputs.forEach((elem) => {
      elem.addEventListener('click', () => {
        quizBtn.disabled =  false
        back.disabled = false
      })
    })


    back.addEventListener('click', function(e) {
      e.preventDefault()
      answers.pop()
      answersUser.pop()
      console.log(i)



      if (i == 1 ) {
        
        back.classList.add('none')
        back.classList.remove('block')
      }



      if (i < 14) {
        quizBtn.classList.remove('none')
        quizBtn.classList.add('block')
        let finalBtn = document.querySelector('.quiz-final-btn')
        finalBtn.classList.add('none')
        finalBtn.classList.remove('block')
        console.log('i не равне 13')
      }




  function backStep() {

    // Отображать последний элемент в пройденном пути
    let lastElem = historyPath[historyPath.length - 1]
    screenList[lastElem-1].classList.add('block')
    screenList[lastElem-1].classList.remove('none')
    i = lastElem - 1
    historyPath.pop()

    progressValue = i * 6
      $(proggresBarQuiz).attr("aria-valuemin", progressValue); 
      $(proggresBarQuiz).attr("style","width:" + progressValue + '%');
  }





    screenList.forEach((elem) => {
      elem.classList.remove('block')
      elem.classList.add('none')
    })


    backStep()

    




    })




    quizBtn.addEventListener('click', function(e) {
      e.preventDefault()
      quizBtn.disabled =  true
      console.log(answers)
      console.log(answersUser)



      if (i >= 0 ) {
        back.classList.add('block')
      }


      if (i >= 13) {
        back.classList.add('none')
        back.classList.remove('block')
      }


    

 



      if (i < screenList.length - 1) {
      i = i + 1
      stepQuiz = stepQuiz + 1

      

 


      function savePath() {
        historyPath.push(i)
      }
    

      
  savePath()


  if (document.getElementById('Производство').checked) {
    answersUser.push('Производство')
    document.getElementById('Производство').checked = false
    document.getElementById('Строительство').checked = false
    document.getElementById('Оптовая торговля').checked = false
  }

  if (document.getElementById('Строительство').checked) {
    answersUser.push('Строительство')
    document.getElementById('Строительство').checked = false
  }


  if (document.getElementById('Оптовая торговля').checked) {
    answersUser.push('Оптовая торговля')
    document.getElementById('Оптовая торговля').checked = false
  }


  if (document.getElementById('Розничная торговля').checked) {
    answersUser.push('Розничная торговля')
    document.getElementById('Розничная торговля').checked = false
  }


  
  if (document.getElementById('Питание').checked) {
    answersUser.push('Питание')
    document.getElementById('Питание').checked = false
  }


  if (document.getElementById('Услуги').checked) {
    answersUser.push('Услуги')
    document.getElementById('Услуги').checked = false
  }



     
      if (document.getElementById('IP').checked) {
        if (firstQuesionIP == 0) {
          i = i + 1
          answersUser.push('Правовая форма вашей организации - ИП')
          firstQuesionIP = 1
        } else {
          null
        }


  
  
  
  
      if (document.getElementById('ОСНО').checked) {
        answers.push(3240)
        answersUser.push('Система налогообложения вашей организации - ОСНО')
        document.getElementById('ОСНО').checked = false
        patent = false
        dr = false
  
            
      } else if (document.getElementById('УСН (д-р)').checked) {
        answers.push(1900)
        answersUser.push('Система налогообложения вашей организации - УСН (д-р)')
        document.getElementById('УСН (д-р)').checked = false
        patent = false
        dr = false
      } else if (document.getElementById('УСН (д)').checked) {
        answers.push(800)
        answersUser.push('Система налогообложения вашей организации - УСН (д)')
        document.getElementById('УСН (д)').checked = false
        patent = false
        dr = true
      } else if (document.getElementById('Патент').checked) {
        answers.push(200)
        answersUser.push('Система налогообложения вашей организации - Патент')
        document.getElementById('Патент').checked = false
        patent = true
        dr = false
      }
  
  
      if (document.getElementById('employee').value !== '0' ) {
        if (patent == true) {
          i = i + 3
        } else {
          i = i + 1
        }
        let employeeCount  = document.getElementById('employee').value
        answers.push(employeeCount * 330)
        answersUser.push('сотрудников ' + employeeCount)
        let localFlag = true 
        if(localFlag == true) {
          document.getElementById('employee').value = '0'
        }
        console.log(employeeCount)
      }
  
  
  
   
  
  
      
      if (document.getElementById('VedYesDA').checked) {
        answers.push(2160)
        answersUser.push('Ваша организация участник внешне-экономической деятельности - да')
        document.getElementById('VedYesDA').checked = false
  
      } else if (document.getElementById('VedNoNO').checked) {
        summOfQuiz = summOfQuiz + 0
        answersUser.push('Ваша организация участник внешне-экономической деятельности - нет')
        document.getElementById('VedNoNO').checked = false
      }
  
  
    
  
      if (document.getElementById('EGAICyes').checked) {
        answers.push(3240)
        answersUser.push('Есть обязанность отчитываться в ЕГАИС - Да')
        document.getElementById('EGAICyes').checked = false
  
      } else if (document.getElementById('EGAICno').checked) {
        summOfQuiz = summOfQuiz + 0
        answersUser.push('Есть обязанность отчитываться в ЕГАИС - Нет')
        document.getElementById('EGAICno').checked = false
      }
  
  
  
  
      if (document.getElementById('Filialyes').checked) {
        answers.push(1000)
        answersUser.push('Организация имеет филиал или обособленное подразделение - Да')
        document.getElementById('Filialyes').checked = false
  
      } else if (document.getElementById('Filialno').checked) {
        summOfQuiz = summOfQuiz + 0
        answersUser.push('Организация имеет филиал или обособленное подразделение - Нет')
        document.getElementById('Filialno').checked = false
      }
  
  
  

  
      if (document.getElementById('Prevdocyes').checked) {
        answers.push(594)
        if (dr == true) {
          i = i + 2
        }

        if (patent == true) {
          i = i + 2
        }
        answersUser.push('Первичную документацию в бухгалтерскую программу заносят ваши сотрудники - Да')
        pervDocAnswer = true
        document.getElementById('Prevdocyes').checked = false
  
      } else if (document.getElementById('Prevdocno').checked) {
        answers.push(2420)
        if (dr == true) {
          i = i + 1
        }

        if (patent == true) {
          i = i + 2
        }
        answersUser.push('Первичную документацию в бухгалтерскую программу заносят ваши сотрудники - Нет')
        pervDocAnswer = false
        document.getElementById('Prevdocno').checked = false
        console.log('Первичные документы')
      }
  
  
      if (document.getElementById('docsValue').value !== '0' ) {
        let docsCount  = document.getElementById('docsValue').value
        console.log(pervDocAnswer )
        if (pervDocAnswer == true) {
          answers.push(docsCount * 27)
          answersUser.push('Укажите среднее количество документов от поставщиков (накладная+фактура или акт+фактура = 1 документ) ' + docsCount)
          console.log('Пропускаем')
          i = i + 1
        } else {
          answers.push(docsCount * 110)
          answersUser.push('Укажите среднее количество документов от поставщиков (накладная+фактура или акт+фактура = 1 документ) ' + docsCount)
        }
        let localFlag = true 
        if(localFlag == true) {
          document.getElementById('docsValue').value = '0'
        }
        console.log(docsCount)
      }
  
  
  
      if (document.getElementById('docsValueConsumer').value !== '0' ) {
        let docsCount  = document.getElementById('docsValueConsumer').value
  
          answers.push(docsCount * 110)
          answersUser.push('Укажите среднее количество документов покупателям (накладная+фактура или акт+фактура = 1 документ)' + docsCount)
        
        let localFlag = true 
        if(localFlag == true) {
          document.getElementById('docsValueConsumer').value = '0'
        }
        console.log(docsCount)
      }



        
      if (document.getElementById('Сashieryes').checked) {
        if (pervDocAnswer == true) {
          answers.push(594)
        } else if (pervDocAnswer == false) {
          answers.push(110)
        }
        answersUser.push('Ведутся расчеты с использованием кассового аппрата - Да')
        document.getElementById('Сashieryes').checked = false
  
      } else if (document.getElementById('Сashierno').checked) {
        summOfQuiz = summOfQuiz + 0
        answersUser.push('Ведутся расчеты с использованием кассового аппрата - Нет')
        document.getElementById('Сashierno').checked = false
      }
  

 
    }


    if (document.getElementById('OOO').checked) {


      if (document.getElementById('NKOyes').checked) {
        answers.push(2160)
        answersUser.push('Имеет ли ваша организация статус некоммерческой - Да')
        document.getElementById('NKOyes').checked = false

      } else if (document.getElementById('NKOyes').checked) {
        summOfQuiz = summOfQuiz + 0
        answersUser.push('Имеет ли ваша организация статус некоммерческой - Нет')
        document.getElementById('NKOyes').checked = false
      }





    if (document.getElementById('ОСНО').checked) {
      answers.push(3240)
      answersUser.push('Система налогообложения вашей организации - ОСНО')
      document.getElementById('ОСНО').checked = false

          
    } else if (document.getElementById('УСН (д-р)').checked) {
      answers.push(2160)
      answersUser.push('Система налогообложения вашей организации - УСН (д-р)')
      document.getElementById('УСН (д-р)').checked = false
    } else if (document.getElementById('УСН (д)').checked) {
      answers.push(1100)
      answersUser.push('Система налогообложения вашей организации - УСН (д)')
      document.getElementById('УСН (д)').checked = false
    } 


    if (document.getElementById('employee').value !== '0' ) {
      let employeeCount  = document.getElementById('employee').value
      answers.push(employeeCount * 330)
      answersUser.push('сотрудников ' + employeeCount)
      let localFlag = true 
      if(localFlag == true) {
        document.getElementById('employee').value = '0'
      }
      console.log(employeeCount)
    }


    if (document.getElementById('земельный').checked && document.getElementById('транспортный').checked && document.getElementById('имущественный').checked ) {
      answers.push(1560)
      answersUser.push('Организация является плательщиком налогов: Земельный, транспортный, имущественный')
      document.getElementById('земельный').checked = false
      document.getElementById('транспортный').checked = false    
      document.getElementById('имущественный').checked = false
    } else if ( document.getElementById('земельный').checked && document.getElementById('транспортный').checked || 
    document.getElementById('земельный').checked && document.getElementById('имущественный').checked || 
    document.getElementById('транспортный').checked && document.getElementById('имущественный'
    ).checked) {
      answers.push(1040)
      console.log('два налога')
      if(document.getElementById('земельный').checked && document.getElementById('транспортный').checked) {
        answersUser.push('Организация является плательщиком налогов: земельный, транспортный')
      }

      if(document.getElementById('земельный').checked && document.getElementById('имущественный').checked) {
        answersUser.push('Организация является плательщиком налогов: земельный, имущественный')
      }

      if(document.getElementById('транспортный').checked && document.getElementById('имущественный').checked) {
        answersUser.push('Организация является плательщиком налогов: транспортный, имущественный')
      }
      document.getElementById('земельный').checked = false
      document.getElementById('транспортный').checked = false    
      document.getElementById('имущественный').checked = false

    } else if (document.getElementById('земельный').checked) {
        answers.push(520)
        document.getElementById('земельный').checked = false
        answersUser.push('Организация является плательщиком налогов: Земельный')

    } else if (document.getElementById('транспортный').checked) {
        answers.push(520)
        answersUser.push('Организация является плательщиком налогов: Транспортный')
        document.getElementById('транспортный').checked = false
    } else if (document.getElementById('имущественный').checked) {
        answers.push(520)
        answersUser.push('Организация является плательщиком налогов: Имущественный')
        document.getElementById('имущественный').checked = false
    } else if (document.getElementById('нет').checked) {
        answers.push(0)
        answersUser.push('Организация является плательщиком налогов: Нет')
        document.getElementById('нет').checked = false
      }


 


    
    if (document.getElementById('VedYesDA').checked) {
      answers.push(2160)
      answersUser.push('Ваша организация участник внешне-экономической деятельности - да')
      document.getElementById('VedYesDA').checked = false

    } else if (document.getElementById('VedNoNO').checked) {
      summOfQuiz = summOfQuiz + 0
      answersUser.push('Ваша организация участник внешне-экономической деятельности - нет')
      document.getElementById('VedNoNO').checked = false
    }


  

    if (document.getElementById('EGAICyes').checked) {
      answers.push(3240)
      answersUser.push('Есть обязанность отчитываться в ЕГАИС - Да')
      document.getElementById('EGAICyes').checked = false

    } else if (document.getElementById('EGAICno').checked) {
      summOfQuiz = summOfQuiz + 0
      answersUser.push('Есть обязанность отчитываться в ЕГАИС - Нет')
      document.getElementById('EGAICno').checked = false
    }




    if (document.getElementById('Filialyes').checked) {
      answers.push(1000)
      answersUser.push('Организация имеет филиал или обособленное подразделение - Да')
      document.getElementById('Filialyes').checked = false

    } else if (document.getElementById('Filialno').checked) {
      summOfQuiz = summOfQuiz + 0
      answersUser.push('Организация имеет филиал или обособленное подразделение - Нет')
      document.getElementById('Filialno').checked = false
    }







    if (document.getElementById('Prevdocyes').checked) {
      answers.push(594)
      answersUser.push('Первичную документацию в бухгалтерскую программу заносят ваши сотрудники - Да')
      pervDocAnswer = true
      document.getElementById('Prevdocyes').checked = false

    } else if (document.getElementById('Prevdocno').checked) {
      answers.push(2420)
      answersUser.push('Первичную документацию в бухгалтерскую программу заносят ваши сотрудники - Нет')
      pervDocAnswer = false
      document.getElementById('Prevdocno').checked = false
      console.log('Первичные документы')
    }


    if (document.getElementById('docsValue').value !== '0' ) {
      let docsCount  = document.getElementById('docsValue').value
      console.log(pervDocAnswer )
      if (pervDocAnswer == true) {
        answers.push(docsCount * 27)
        answersUser.push('Укажите среднее количество документов от поставщиков (накладная+фактура или акт+фактура = 1 документ) ' + docsCount)
        console.log('Пропускаем')
        i = i + 1
      } else {
        answers.push(docsCount * 110)
        answersUser.push('Укажите среднее количество документов от поставщиков (накладная+фактура или акт+фактура = 1 документ) ' + docsCount)
      }
      let localFlag = true 
      if(localFlag == true) {
        document.getElementById('docsValue').value = '0'
      }
      console.log(docsCount)
    }




    if (document.getElementById('docsValueConsumer').value !== '0' ) {
      let docsCount  = document.getElementById('docsValueConsumer').value

        answers.push(docsCount * 110)
        answersUser.push('Укажите среднее количество документов покупателям (накладная+фактура или акт+фактура = 1 документ)' + docsCount)
      
      let localFlag = true 
      if(localFlag == true) {
        document.getElementById('docsValueConsumer').value = '0'
      }
      console.log(docsCount)
    }


    
    if (document.getElementById('Сashieryes').checked) {
      if (pervDocAnswer == true) {
        answers.push(1188)
      } else if (pervDocAnswer == false) {
        answers.push(3190)
      }
      answersUser.push('Ведутся расчеты с использованием кассового аппрата - Да')
      document.getElementById('Сashieryes').checked = false

    } else if (document.getElementById('Сashierno').checked) {
      summOfQuiz = summOfQuiz + 0
      answersUser.push('Ведутся расчеты с использованием кассового аппрата - Нет')
      document.getElementById('Сashierno').checked = false
    }









    }





    


      console.log(quizScreens.length)
      console.log(i)



      if (i == 13) {
        quizBtn.classList.add('none')
        quizBtn.classList.remove('block')
        let finalBtn = document.querySelector('.quiz-final-btn')
        finalBtn.classList.add('block')
        finalBtn.classList.remove('none')
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        summContainer.innerHTML = answers.reduce(reducer)
        // back.disabled =  true
        // back.classList.add('none')
        // back.classList.remove('block')
        console.log(document.getElementById('quizInfo'))
        document.getElementById('quizInfo').value = answersUser

      } else if (i !== 13) {
        quizBtn.classList.remove('none')
        quizBtn.classList.add('block')
        let finalBtn = document.querySelector('.quiz-final-btn')
        finalBtn.classList.add('none')
        finalBtn.classList.remove('block')
        console.log('i не равне 13')
      }
      stepQuizValue.innerHTML = (stepQuiz)
      progressValue = i * 8
      $(proggresBarQuiz).attr("aria-valuemin", progressValue); 
      $(proggresBarQuiz).attr("style","width:" + progressValue + '%'); 




    }






// Скрыть все блоки

    screenList.forEach((elem) => {
      elem.classList.remove('block')
      elem.classList.add('none')
    })

// показать текущий блок
    screenList[i].classList.add('block')
    screenList[i].classList.remove('none')



     


     



// отображение патента для ИП

      if (document.getElementById('IP').checked) {

       ip = true

       if (ip) {
         let patentElem = document.querySelector('.patent')
         console.l
         patentElem.classList.add('flex')
         patentElem.classList.remove('none')
       }



      }


      if (document.getElementById('OOO').checked)  {
        if (firstQuesion == 0) {
          answersUser.push('Правовая форма вашей организации - ООО')
          firstQuesion  = 1
        } else {
          null
        }
      }


  })



      


});