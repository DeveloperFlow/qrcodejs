(function(){
    var darkModeToggler = document.getElementById("darkmode-toggler")
    var chosenTheme
    /*startup functions*/
    setupThemeHandler()
    initiateTheme()

    function initiateTheme(){
        try{
            chosenTheme = localStorage.getItem("theme")
        }
        catch(err){
            console.error("Looks like access to the local storage isn't granted, error : " + err)
        }
        if(!chosenTheme){
            chosenTheme = 0;
            //light theme
        }
        if(chosenTheme == 1){darkModeToggler.checked = true; darkModeToggler.onchange()}
    }
    function setupThemeHandler(){
        darkModeToggler.onchange = function(){
            chosenTheme = (darkModeToggler.checked == true)? 1 : 0;
            if(chosenTheme == 1){
                changeClass(document.body,"","darkmode")
            }
            else{
                changeClass(document.body,"darkmode","")
            }
            try{
                localStorage.setItem("theme",chosenTheme)
            }
            catch(err){
                console.error("could not set theme due to localstorage access restriction, error: " + err)
            }
        }
    }
}())