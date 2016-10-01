var textSignature = {} ;
textSignature =  function(options) { 

  //inject custom font face from external url   
    $('head').find("#text-signature").remove();
    var linkElem = $('<link rel="stylesheet">');
    linkElem.attr('id', "text-signature");
    $('head').append(linkElem);     

    linkElem.attr('href', options.customFont.url); 
    if (linkElem[0].addEventListener) {
        linkElem[0].addEventListener('load', function() { 
            textSignature.generateImage( options );
            textSignature.generateImage( options );
        }, false);
      }


};
textSignature.prototype.formatInput = function( options ) {
    options.font = (options.font) || ["12px", "Arial"];
    options.font = (options.font).join(" ");
    options.fillStyle = (options.color) || "black";
    options.textString = options.textString || "Text-Signature !";
    options.paddingX = options.paddingX || 0;
    options.paddingY = options.paddingY || 0;

    return options;

};

textSignature.prototype.generateImage = function( options ) {

	//parameter sanity and defaults
	options = textSignature.prototype.formatInput();

    var uniquetime = new Date().getUTCMilliseconds();

    //generate canvas
    var canvasSelectorDom = $('<canvas></canvas>');
    canvasSelectorDom.attr('width', options.width);
    canvasSelectorDom.attr('height', options.height);
    canvasSelectorDom.attr('id', "text-signature-" + uniquetime);
 

    var context = canvasSelectorDom[0].getContext("2d");
    context.font = options.font;
    context.fillStyle = options.fillStyle;
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


};

textSignature.prototype.isDomObject = function(obj) {
    return (obj.tagName ? "true" : "false");
} ; 

textSignature.prototype.ping = function() {
    console.log("Yup. text-singature is working");
} ; 

module.exports = textSignature
