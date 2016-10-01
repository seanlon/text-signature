$ = require("jquery");

$('#nameForm').on('submit', function(e) {
    var fName = $('[name="fname"] ').val();
    var lName = $('[name="lname"] ').val();

    var textString = fName +" " +  lName;
    var fontStyleList = ["50px", "OpenSanss" , "bold"]; 
    var customFont = {
        name:"OpenSanss", "url" :"http://fonts.google.com/specimen/Pacifico?selection.family=Oswald|Pacifico"
    }
    var paramSignatureText = {
        width:300,height:300, paddingX:100,paddingY:100,
        canvasTargetDom : ".js-canvasTargetDom",  
        font : fontStyleList, color : "blue",   textString: textString, 
        customFont: customFont
    };
    singatureText(paramSignatureText);
    e.preventDefault();
    return false;
});


function isDomObject(obj)
{
    return (obj.tagName ? "true" : "false");
}


function singatureText(options) {  
  
    options.font = (options.font)  || ["12px", "blue", "Arial"];    
    options.font = (options.font).join(" ");
    options.fillStyle = (options.color)  || "black";  
    options.textString = options.textString || "Text-Signature !";
    options.paddingX = options.paddingX || 0;
    options.paddingY = options.paddingY || 0;

    //inject custom font face from external url 
    var styleFont = document.createTextNode("\
    @font-face {\
        font-family: '" + options.customFont.name + "';\
        src: url('" + options.customFont.url + "')  ;\
    }\
    ") ; 
    $('head').find(  "#text-signature" ).remove();
    var styleElem =  $('<style></style>'); 
    styleElem.attr('id', "text-signature");
    styleElem.append(styleFont)
    $('head').append( styleElem);


    //generate canvas
    var canvasSelectorDom =  $('<canvas></canvas>'); 
    canvasSelectorDom.attr('width', options.width);
    canvasSelectorDom.attr('height', options.height);
 
    var context =  canvasSelectorDom[0].getContext("2d");
    context.font =options.font;
    context.fillStyle = options.fillStyle;  
    context.fillText(options.textString, options.paddingX, options.paddingY); 


    // <canvas id="canvasId" width="500" height="500"></canvas> 

    var dataUrl = canvasSelectorDom[0].toDataURL();
    var uniquetime = new Date().getUTCMilliseconds();
    var img = $('<img>'); //Equivalent: $(document.createElement('img'))
    img.attr('src', dataUrl);
    img.attr('text-signature-timestamp', uniquetime);
    img.attr('id', "text-signature-" + uniquetime);

    if(options.canvasTargetDom ){
        $(options.canvasTargetDom).html(img);
    }
    else{
            window.open(dataUrl, "text-signature image", "width=600, height=200");
    } 
}
