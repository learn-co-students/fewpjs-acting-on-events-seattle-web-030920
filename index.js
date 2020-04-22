let dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
   
      dodger.style.left = `${left - 1}px`;
      moveDodgerLeft();
    }
  });


  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
   
      dodger.style.left = `${left + 1}px`;
      moveDodgerLeft();
    }
  });
