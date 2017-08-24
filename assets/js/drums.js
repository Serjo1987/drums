(() => {
  'use strict';

  window.addEventListener('keydown', (key) => {
    console.log(key);

    if (key.key === 's') {
      let snare = new Audio('/assets/sounds/snare.wav');
          snare.play();

      let snareHover = document.getElementById('snare-hover');
          snareHover.style.display = 'block';

      setTimeout(() => {
        snareHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 'b') {
      let bass = new Audio('/assets/sounds/kick.wav');
          bass.play();

      let bassHover = document.getElementById('bass-hover');
          bassHover.style.display = 'block';

      setTimeout(() => {
        bassHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 'h') {
      let hiHat = new Audio('/assets/sounds/open-hi-hat.wav');
          hiHat.play();

      let hiHatHover = document.getElementById('hi-hat-hover');
          hiHatHover.style.display = 'block';

      setTimeout(() => {
        hiHatHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 'c') {
      let crash = new Audio('/assets/sounds/crash.wav');
          crash.play();

      let crashHover = document.getElementById('crash-hover');
          crashHover.style.display = 'block';

      setTimeout(() => {
        crashHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 't') {
      let tom = new Audio('/assets/sounds/tom.wav');
          tom.play();

      let tomHover = document.getElementById('tom-hover');
          tomHover.style.display = 'block';

      setTimeout(() => {
        tomHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 'm') {
      let floorTom = new Audio('/assets/sounds/floor-tom.wav');
          floorTom.play();

      let floorTomHover = document.getElementById('floor-tom-hover');
          floorTomHover.style.display = 'block';

      setTimeout(() => {
        floorTomHover.style.display = 'none';
      }, 100);
    }

    if (key.key === 'k') {
      let rideTom = new Audio('/assets/sounds/soft-ride.wav');
          rideTom.play();

      let rideHover = document.getElementById('ride-hover');
          rideHover.style.display = 'block';

      setTimeout(() => {
        rideHover.style.display = 'none';
      }, 100);
    }
  });
})();
