/*Exercise 1
Add an input to your previous webpage
Its default value should be "blue"
When the user clicks on the last button
Read the desired color from the input
Change the buttons' background-color to the given color
Try it with different colors


Exercise 2 (Optional)
Now your previous application changes the buttons' color 
whenever the input vale has changed and you clicked on the last button
Change the behavior by ignoring all the clicks after the first one.
 So even if the input has changed, keep the previous color if it has already changed once.*/


$('#yeah_btn').click(() =>{
    console.log('Yeah you pushed me!')
});



$('#second_btn').click(()=>{
    var color = $('#colorinput').val();
    $('button').css('background-color', color)
    
    
});






 