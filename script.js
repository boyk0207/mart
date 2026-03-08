const runawayBtn = document.getElementById("runawayBtn");
const buttonArea = document.getElementById("buttonArea");

function moveButton() {
  const areaRect = buttonArea.getBoundingClientRect();
  const btnRect = runawayBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width;
  const maxY = areaRect.height - btnRect.height;

  const randomX = Math.max(0, Math.floor(Math.random() * maxX));
  const randomY = Math.max(0, Math.floor(Math.random() * maxY));

  runawayBtn.style.left = `${randomX}px`;
  runawayBtn.style.top = `${randomY}px`;
  runawayBtn.style.transform = "none";
}

runawayBtn.addEventListener("mouseenter", moveButton);
runawayBtn.addEventListener("click", moveButton);

/* mobile дээр хүрэх үед ч зугтана */
runawayBtn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  moveButton();
});