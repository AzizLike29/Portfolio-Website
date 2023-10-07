gsap.from(".jumbotron img", {
  duration: 1.7,
  rotateY: -360,
  opacity: 0,
});
gsap.from(".navbar", {
  duration: 1.5,
  y: "-100%",
  opacity: 0,
  ease: "sine",
});
gsap.from(".display-4", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.7,
  ease: "back",
});
gsap.from(
  "footer.bg-success p, footer.bi-suit-heart-fill, footer.bg-success a",
  {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 1,
    ease: "slow",
  }
);
