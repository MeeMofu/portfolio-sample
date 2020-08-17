// Source: https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("Navigation");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }