$ = require("jquery");
TextSignature= require("text-signature");
 
$('#nameForm').on('submit', function(e) {
    var textString = $('[name="name"] ').val();  
    var fontsize = $('[name="fontsize"] ').val();  
    var fontfamily = $('[name="fontfamily"] ').val();  
    var fonturl = $('[name="fonturl"] ').val();  
    var fontcolor = $('[name="fontcolor"] ').val();  
    var imageheight = $('[name="imageheight"] ').val();  
    var imagewidth = $('[name="imagewidth"] ').val();  
    var imagepadx = $('[name="imagepadx"] ').val();  
    var imagepady = $('[name="imagepady"] ').val();  

    var fontStyleList = [ fontsize ,  fontfamily];
    var customFont = {
        name: fontfamily,
        "url": fonturl 
    };

    var paramSignatureText = {
        width: imagewidth,
        height: imageheight,
        paddingX: imagepadx,
        paddingY: imagepady,
        canvasTargetDom: ".js-canvasTargetDom",
        font: fontStyleList,
        color:  fontcolor,
        textString: textString,
        customFont: customFont
    };
    console.log(paramSignatureText);
    ts = TextSignature(paramSignatureText);
    e.preventDefault();
    return false;
});

 