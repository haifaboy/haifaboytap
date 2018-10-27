var myVar;

function startTimer() {
    myVar = setInterval(changePics, 3000);
}

function changePics() {
  
 
  if ( document.getElementById('img1').src.indexOf("paz_250x110059890678.jpg") > -1 ) 
  {
 
    document.getElementById('img1').src= "images\\banner_atar.jpg"
           

  } else {

    document.getElementById('img1').src = "images\\paz_250x110059890678.jpg"

  }

  if ( document.getElementById('img2').src.indexOf("250X110571325734.jpg") > -1 ) 
  {
 
    document.getElementById('img2').src= "images\\250X110668568400.jpg"
           

  } else {

    document.getElementById('img2').src = "images\\250X110571325734.jpg"

  }
 
  

}