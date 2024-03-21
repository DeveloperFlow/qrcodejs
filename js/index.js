(function(){
    var codeBox = document.getElementById("created-code")
    var codeInput = document.getElementById("code-input")
    var codeObj = new QRCode(codeBox,
        {
            text: codeInput.value,
            colorDark: "#75c2af",
            colorLight: "#f8e8ff"
        }
        )
}())