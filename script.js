const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const answer = document.querySelector(".answer")

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I LOVE YOU BUJAMMA😘";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
    yesBtn.remove(); // Removes the Yes button from the DOM
    noBtn.remove();
  });
// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVE YOU BUJAMMA🌹";
  gif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
  answer.innerHTML = "My life is incomplete without you, my love❤️";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width + noBtnRect.width;
  const maxY = wrapperRect.height + noBtnRect.height;

  const randomX = Math.ceil(Math.random() * maxX);
  const randomY = Math.ceil(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.bottom = randomY - "px";
  noBtn.style.right = randomX + "px";
  noBtn.style.bottom = randomX - "px";
  noBtn.style.left = randomX + "px";
  noBtn.style.bottom = randomY - "px";
  noBtn.style.right = randomX - "px";
  noBtn.style.bottom = randomX + "px";
  
});