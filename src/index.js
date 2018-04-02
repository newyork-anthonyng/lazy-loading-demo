const headerElement = document.querySelector("h1");

headerElement.addEventListener("mouseenter", () => {
  import(/* webpackChunkName: "anotherModule" */ "./anotherModule");
});
