let acc = document.querySelector(".seta_img");

acc.addEventListener("click", function(){
    //alert("Hello! I am an alert box!!");
    this.classList.toggle("active");
    this.style.transform = 'rotate(180deg)'
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.transform = 'rotate(0deg)'
    } else {
      panel.style.display = "block";
    }    
});
