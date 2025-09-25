const img = document.getElementById("imagem");
const video = document.getElementById("video");
const btn = document.getElementById("buy_btn");
document.addEventListener("mousemove", (event) => {
  const offsetY = -50;
      const x = event.pageX + "px";
      const y = (event.pageY + offsetY) + "px";

      img.style.left = x;
      img.style.top = y;
      video.style.left = x;
      video.style.top = y;
});
function buyPlan() {
  img.style.display = "none";
      video.style.display = "block";
      video.currentTime = 0; // reinicia sempre do começo
      video.play();

      video.addEventListener("ended", () => {
      video.style.display = "none";
      img.style.display = "block";
    });

}