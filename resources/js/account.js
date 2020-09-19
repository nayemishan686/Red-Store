var Loginform = document.getElementById("Loginform");
var Regiform = document.getElementById("Regiform");
var Indicator = document.getElementById("Indicator");

    function register(){
        Regiform.style.transform = "translateX(0px)";
        Loginform.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(60px)"
    }
    function login(){
        Regiform.style.transform = "translateX(300px)";
        Loginform.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(-60px)"
        
    } 