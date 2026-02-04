function visible(imageBankai, audioBankai, reishiColor1, reishiColor2, reishiColor3) {
   document.getElementById('reveal').style.display = 'flex';
   const charBleach = document.getElementById('charBleach');
   charBleach.src = imageBankai;

   charBleach.style.filter = `drop-shadow(0 0 6px ${reishiColor1}) drop-shadow(0 0 16px ${reishiColor2}) drop-shadow(0 0 32px ${reishiColor3})`;

   const audio = new Audio(audioBankai);
   setTimeout(() => {
      audio.play();
   }, 1000);
}
function invisible() {
   document.getElementById('reveal').style.display = 'none';
}
