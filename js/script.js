$(function() {
      var countDelay = 0;
      $('.delay-fade').each(function() {
        $(this ).delay(countDelay*300).fadeIn("slow");
        countDelay++;
      });

      countDelay = 0;
      $('.list-unstyled-item').hide()
      /*$('.list-unstyled-item').each(function() {
      	var vm = $(this);
      	$(this).delay(countDelay*500).show("fast", function(){
      		vm.addClass('animated');
      		vm.addClass('fadeInRight');
      	});
        countDelay++;
      });*/
  
      $($('.list-unstyled-item').get().reverse()).each(function() {
        var vm = $(this);
        vm.addClass("animated").delay(countDelay*500).queue(function(next){
          vm.show();
          vm.addClass("fadeInRight");
          next();
        });
        countDelay++;
      });

      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 48)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });

      const carouselElements = new Array(15).fill();

      const carouselIndicators = carouselElements.map((_item, index) => {
        const active = index === 0 ? 'active' : '';
        return `<li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${active}"></li>`;
      });

      const indicators = document.getElementById("carousel-indicators");
      indicators.innerHTML = carouselIndicators.join(" ");

      const carouselImages = carouselElements.map((_item, index) => {
        const imageIndex = index + 1;
        const active = index === 0 ? 'active' : '';
        return `
        <div class="carousel-item ${active}" style="background-image: url('img/carousel/carousel${imageIndex}.jpg')">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        `
      });

      const carousel = document.getElementById("carousel-index");
      carousel.innerHTML = carouselImages.join(" ");

      
});