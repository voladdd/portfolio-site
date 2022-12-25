function CardInProgressAnimation(title) {
  const cardsCaptions = document.querySelectorAll(
    "#card__in_progress-animation"
  );
  const states = [
    `${title}`,
    `${title}.`,
    `${title}..`,
    `${title}...`,
    `${title}..`,
    `${title}.`,
  ];
  let stateCount = 0;
  let statesLength = states.length;
  setInterval(() => {
    cardsCaptions.forEach((caption) => {
      caption.textContent = states[stateCount];
    });
    stateCount = (stateCount + 1) % statesLength;
  }, 300);
}

CardInProgressAnimation("in progress");
