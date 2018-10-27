

function setTimer() {
    var myVar;
    myVar = setInterval(changePics, 3000);
}

function changePics() {
         
       var npos = document.getElementById("img1").srcdocument.getElementById("img1").src.lastIndexOf("paz_250x110059890678.jpg");  
       alert (document.getElementById("img1").src ) ;
       alert (npos ) ; 
        if ( npos > 0 ) then 
        {
            document.getElementById("img1").src = "images/banner_atar.jpg";
        }
        else 
        {
            document.getElementById("img1").src = "images/paz_250x110059890678.jpg";
        }
        alert (document.getElementById("img1").src ) ; 

}