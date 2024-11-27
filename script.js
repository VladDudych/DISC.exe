document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.content-container-left, .content-container-right, .content-col-left, .content-col-right, .video-gallery-container');
    containers.forEach(container => {
        container.classList.add('fade-in');
    });
});

function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

  