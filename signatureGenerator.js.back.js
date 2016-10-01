$ = require("jquery");

$('#nameForm').on('submit', function(e) {
    var fName = $('[name="fname"] ').val();
    var lName = $('[name="lname"] ').val();

    var textString = fName +" " +  lName;
    var fontStyleList = ["50px", "Arial" , "bold"]; 
    var fillStyleList = ["blue"]; 
    var canvasTargetDom = ".js-canvasTargetDom";
    var canvasSelectorDom = document.getElementById("canvasId");
    var fillText = {        textString: textString, x:100,y:100    } ;
    var paramSignatureText = {
        font : fontStyleList,
        fillStyle  : fillStyleList,
        fillText: fillText,
        canvasContext : "2d",
        canvasSelectorDom : canvasSelectorDom ,
        canvasTargetDom :  canvasTargetDom,
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
    // options.canvasSelectorDom = isDomObject(options.canvasSelectorDom) ? options.canvasSelectorDom || "" ; 
    // options.canvasSelectorDom = isDomObject(options.canvasSelectorDom) || $(options.canvasSelectorDom)[0] ; 

    options.font = (options.font).join(" ");
    options.fillStyle = (options.fillStyle).join(" ");


    options.textString = options.textString || "";
 
    var canvas = options.canvasSelectorDom;
    var context =  canvas.getContext(options.canvasContext);
    context.font =options.font;
    context.fillStyle = options.fillStyle;  
    context.fillText(options.fillText.textString, options.fillText.x, options.fillText.y); 


    var dataUrl = canvas.toDataURL();
    var uniquetime = new Date().getUTCMilliseconds();
    var img = $('<img>'); //Equivalent: $(document.createElement('img'))
    img.attr('src', dataUrl);
    img.attr('text-signature-timestamp', uniquetime);
    img.attr('id', "text-signature-" + uniquetime);
    img.appendTo(options.canvasTargetDom)
}
