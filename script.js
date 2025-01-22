
function leapyear() {
    let year = prompt(`Input a year & check it's leap year or not`);
    if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
      alert(`${year} is a leap year`);
  } else {
      alert(`${year} is not a leap year`);
  }
  
  }
  
  
  
  
  
  
  let randomcolors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
  
  
  function color() {
    let random = Math.trunc(Math.random() * randomcolors.length)
    console.clear()
    console.log('Your Lucky color is', randomcolors[random]);
  }
  
  
  
  
  
  
  
  
  
  
  
  let Emojis = ['😄', '🥳', '🤔', '😢', '❤️', '🎉'];
  
  function randoms() {
    let randomemojis = Math.trunc(Math.random() *Emojis.length);
  
  
    alert(Emojis[randomemojis])
  }