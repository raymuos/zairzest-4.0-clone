const music = document.getElementById('bgmusic');
const button = document.getElementById('music-btn');
button.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#38ccff"><path d="M525-200v-560h235v560H525Zm-325 0v-560h235v560H200Zm385-60h115v-440H585v440Zm-325 0h115v-440H260v440Zm0-440v440-440Zm325 0v440-440Z"/></svg>';
  } 
  else {
    music.pause();
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#38ccff"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z"/></svg>';
  }
});