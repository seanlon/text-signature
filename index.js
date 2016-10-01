$ = require("jquery");
TextSignature= require("text-signature");
 
$('#nameForm').on('submit', function(e) {
    var fName = $('[name="fname"] ').val();
    var lName = $('[name="lname"] ').val();

    var textString = fName + " " + lName;

    var fontStyleList = ["50px", "'Homemade Apple'"];
    var customFont = {
        name: "'Homemade Apple'",
        "url": "http://fonts.googleapis.com/css?family=Homemade+Apple"

    }
    var paramSignatureText = {
        width: 300,
        height: 300,
        paddingX: 100,
        paddingY: 100,
        canvasTargetDom: ".js-canvasTargetDom",
        font: fontStyleList,
        color: "blue",
        textString: textString,
        customFont: customFont
    };
    ts = TextSignature(paramSignatureText);
    e.preventDefault();
    return false;
});

 