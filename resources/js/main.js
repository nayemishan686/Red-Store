//Navbar
function openMenu(){
    document.getElementById('nav').style.height = "60vh"
}

function closeMenu(){
    document.getElementById('nav').style.height = "0"
}


//Product Details
var ProductImg = document.getElementById("ProductImg");
var smallImg = document.getElementsByClassName("smallImg");

    smallImg[0].onclick = function()
    {
        ProductImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function()
    {
        ProductImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function()
    {
        ProductImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function()
    {
        ProductImg.src = smallImg[3].src;
    }
    
    
    
