/*
    Program name: Recipe Display Application
    
    Author: Stephen Putnal  
    
    Date: July 24th, 2017
    
    Filename: script.js
*/

//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow");
    
    //attach event listener to h3 elements to invoke display function when clicked
    
}//end of display

  $("h3").click(display);