//define functions here

function getIt(){
  $('p').on('click', function()
  {
    return alert("Hey!");
  });  // have a click event on <p> and alert("Hey!")
}

function frameIt()
{
   $('img').on('load', function()
   {
     // add a red frame here
     $('img').addClass('tasty');
   });
}

function pressIt()
{
  $('input').on('keydown', function(key){
      if(key.which == 71)
      {
        return alert("G has been pressed");
      }
  });
}
// event.keydown = g

function submitIt()
{
  $('form').on('submit' , function()  // tried going for the 'input' directly
  {
    return alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
