$(()=> {
  const bpm = 500;
  const $main = $('.main');
  const $buttons = $('button');
  const $firstPad = $('.firstPad');
  const $secondPad = $('.secondPad');
  const $thirdPad = $('.thirdPad');
  const $fourthPad = $('.fourthPad');
  const $fifthPad = $('.fifthPad');
  const $buttonPlay = $('.buttonPlay');
  const $recording = $('.recording');
  const $buttonLoop = $('.buttonLoop');
  const $buttonMetronome = $('.buttonMetronome');
  let loopActive = false;
  let metronomeOn = false;
  let loopArr = [];
  $buttonMetronome.on('click', () => {
    metronomeOn = !metronomeOn;
    const metronome = setInterval(() => {
      if(metronomeOn)$main.append('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
      else clearInterval(metronome);
    }, bpm);
    metronome;
  });
  $buttonLoop.on('click', () => {

    $recording.toggleClass('live');
    loopArr = [];
    if(!loopActive) loopActive = true;
    else loopActive = false;
  });
  // enter loop play button here
  let i = 0;
  $buttonPlay.on('click', () => {
    const musicLoop = setInterval(() => {
      $main.append(loopArr[i]);
      i = i + 1;
      if(i === loopArr.length + 1) clearInterval(musicLoop);
    }, bpm);
    musicLoop;
    i = 0;
  });
  $buttons.on('click', (e) => {
    $(e.target).toggleClass('activeButton');
  });

  const numberOne = 49;
  const numberTwo = 50;
  const numberThree = 51;
  const numberFour = 52;

  $firstPad.on('click', () => {
    if(loopActive) loopArr.push('<audio autoplay><source src="sounds/clay.mp3"></audio>');
    $firstPad.html('<audio autoplay><source src="sounds/clay.mp3"></audio>');
  });
  $secondPad.on('click', () => {
    if(loopActive) loopArr.push('<audio autoplay><source src="sounds/moon.mp3"></audio>');
    $secondPad.html('<audio autoplay><source src="sounds/moon.mp3"></audio>');
  });
  $thirdPad.on('click', () => {
    if(loopActive) loopArr.push('<audio autoplay><source src="sounds/strike.mp3"></audio>');
    $thirdPad.html('<audio autoplay><source src="sounds/strike.mp3"></audio>');
  });
  $fourthPad.on('click', () => {
    console.log('clicked the fourth pad');
    if(loopActive) loopArr.push('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
    $fourthPad.html('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
  });
  $fifthPad.on('click', () => {
    console.log('clicked the fourth pad');
    if(loopActive) loopArr.push('<audio autoplay><source src=""></audio>');
    $fourthPad.html('<audio autoplay><source src=""></audio>');
  });


  // KEYPRESS EVENTS
  $(document).keypress((e) => {
    console.log(e.originalEvent.charCode);
    if(e.originalEvent.charCode === numberOne){
      if(loopActive) loopArr.push('<audio autoplay><source src="sounds/clay.mp3"></audio>');
      $firstPad.html('<audio autoplay><source src="sounds/clay.mp3"></audio>');
    }
    if(e.originalEvent.charCode === numberTwo){
      if(loopActive) loopArr.push('<audio autoplay><source src="sounds/moon.mp3"></audio>');
      $secondPad.html('<audio autoplay><source src="sounds/moon.mp3"></audio>');
    }
    if(e.originalEvent.charCode === numberThree){
      if(loopActive) loopArr.push('<audio autoplay><source src="sounds/strike.mp3"></audio>');
      $thirdPad.html('<audio autoplay><source src="sounds/strike.mp3"></audio>');
    }
    if(e.originalEvent.charCode === numberFour){
      if(loopActive) loopArr.push('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
      $fourthPad.html('<audio autoplay><source src="sounds/wipe.mp3"></audio>');
    }
  });

});
