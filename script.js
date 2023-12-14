function show()
{
    var modal = document.getElementById("myModal");

    
    var bd = document.getElementById("bd");
    
    
    var span = document.getElementsByClassName("close")[0];
    
   
    bd.onload = function() {
      modal.style.display = "block";
    }
    
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}