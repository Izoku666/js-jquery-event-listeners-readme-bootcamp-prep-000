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
  $('input').on('keydown', function(){
      if(key.which == 71)
      {
        return alert("G has been pressed");
      }
  });
}
// event.keydown = g

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});
