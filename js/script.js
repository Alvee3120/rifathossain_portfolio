/* Adds .is-loaded to <body> to trigger the staggered entrance animation. */
(function () {
  "use strict";

  function onReady() {
    document.body.classList.add("is-loaded");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady, { once: true });
  } else {
    onReady();
  }
})();
