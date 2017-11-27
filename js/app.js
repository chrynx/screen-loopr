$(()=> {
  const bpm = 500;
  const $main = $('.main');
  const $buttons = $('button');
  const $firstPad = $('.firstPad');
  const $secondPad = $('.secondPad');
  const $thirdPad = $('.thirdPad');
  const $fourthPad = $('.fourthPad');
  const $buttonPlay = $('.buttonPlay');

  const $buttonLoop = $('.buttonLoop');
  let loopActive = false;
  const loopArr = [];
  $buttonLoop.on('click', () => {
    if(!loopActive) loopActive = true;
    else loopActive = false;
  });
  // enter loop play button here
  $buttonPlay.on('click', () => {
    setInterval(() => {
      let i = 0;
      $main.append(loopActive[i]);
      i = i + 1;
      if(i === loopActive.length) clearInterval();
    }, bpm);
  });

  $buttons.on('click', (e) => {
    $(e.target).toggleClass('activeButton');
  });

  $firstPad.on('click', () => {
    console.log(loopActive);
    console.log(loopArr);
    console.log('clicked the first pad');
    if(loopActive) loopArr.push('<audio autoplay><source src="sounds/clay.mp3"></audio>');
    $firstPad.html('<audio autoplay><source src="sounds/clay.mp3"></audio>');
  });
  $secondPad.on('click', () => {
    console.log('clicked the second pad');
    $secondPad.html('<audio autoplay><source src="sounds/moon.mp3"></audio>');
  });
  $thirdPad.on('click', () => {
    console.log('clicked the third pad');
    $thirdPad.html('<audio autoplay><source src="sounds/strike.mp3"></audio>');
  });
  $fourthPad.on('click', () => {
    console.log('clicked the fourth pad');
    $fourthPad.html('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
  });
});
