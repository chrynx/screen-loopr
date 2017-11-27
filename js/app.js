$(()=> {
  const $buttons = $('button');
  const $firstPad = $('.firstPad');
  const $secondPad = $('.secondPad');
  const $thirdPad = $('.thirdPad');
  const $fourthPad = $('.fourthPad');
  $buttons.on('click', (e) => {
    $(e.target).toggleClass('activeButton');
  });
  $firstPad.on('click', () => {
    console.log('clicked the first pad');
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
