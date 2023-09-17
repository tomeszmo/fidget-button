var audio = new Audio();
audio.src = "./audio/clicking.mp3"
const button = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
