function reveal() {
    var reveals = document.querySelectorAll(".scrollable");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 180;
      if (elementTop < windowHeight - elementVisible) {
          if(reveals[i].classList.contains("slide-left")==true){
              if(reveals[i].classList.contains("reveal-slide-left")==false){
                reveals[i].classList.add("reveal-slide-left");  
              }
         
          }

          if(reveals[i].classList.contains("fade-in-1")==true){
            if(reveals[i].classList.contains("reveal-fade-in-1")==false){
              reveals[i].classList.add("reveal-fade-in-1");  
            }
       
          }
          if(reveals[i].classList.contains("fade-up")==true){
            if(reveals[i].classList.contains("reveal-fade-up")==false){
              reveals[i].classList.add("reveal-fade-up");  
            }
       
          }
          if(reveals[i].classList.contains("fade-in-3")==true){
            if(reveals[i].classList.contains("reveal-fade-in-3")==false){
              reveals[i].classList.add("reveal-fade-in-3");  
            }
       
          }
        
        
      } /*else {
        reveals[i].classList.remove("reveal");
      }*/
    }
  }
  reveal();
  window.addEventListener("scroll", reveal);