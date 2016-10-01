$ = require("jquery");

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
    singatureText(paramSignatureText);
    e.preventDefault();
    return false;
});


function isDomObject(obj) {
    return (obj.tagName ? "true" : "false");
}


function singatureText(options) {

    options.font = (options.font) || ["12px",   "Arial"];
    options.font = (options.font).join(" ");
    options.fillStyle = (options.color) || "black";
    options.textString = options.textString || "Text-Signature !";
    options.paddingX = options.paddingX || 0;
    options.paddingY = options.paddingY || 0;
 
    //inject custom font face from external url   
    $('head').find("#text-signature").remove();
    var linkElem = $('<link rel="stylesheet">');
    linkElem.attr('id', "text-signature");
    linkElem.attr('href', options.customFont.url);  



  
    $('head').append(linkElem);     
    if (linkElem[0].addEventListener) {
        linkElem[0].addEventListener('load', function() { 
            generateImage();
        }, false);
      }

 

var generateImage = function(){  

    var uniquetime = new Date().getUTCMilliseconds();

    //generate canvas
    var canvasSelectorDom = $('<canvas></canvas>'); 
    canvasSelectorDom.attr('width', options.width);
    canvasSelectorDom.attr('height', options.height);  
    canvasSelectorDom.attr('id', "text-signature-" + uniquetime);

    // $('body').append( canvasSelectorDom);
    // $('#' + "text-signature-" + uniquetime).remove();


    var context = canvasSelectorDom[0].getContext("2d");
    context.font = options.font;
    context.fillStyle = options.fillStyle;
    context.fillText(options.textString, options.paddingX, options.paddingY);

    context.fillText(options.textString, options.paddingX, options.paddingY);

    
 

    var dataUrl = canvasSelectorDom[0].toDataURL();
    var img = $('<img>'); //Equivalent: $(document.createElement('img'))
    img.attr('src', dataUrl);
    img.attr('text-signature-timestamp', uniquetime);
    img.attr('id', "text-signature-" + uniquetime);



    if (options.canvasTargetDom) {
        $(options.canvasTargetDom).html(img);
    } else {
        window.open(dataUrl, "text-signature image", "width=600, height=200");
    }
 
 
 }
}
