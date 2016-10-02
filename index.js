// Copyright (c) 4-digit year, Company or Person's Name

// Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

$ = require(jquery);
var textSignature = {};

textSignature = function(options) {
    var self = this;
    self.isInitiated = false;
    self.imageData = null;

    this.init = function() {
        //inject custom font face from external url   
        $('head').find("#text-signature").remove();
        var linkElem = $('<link rel="stylesheet">');
        linkElem.attr('id', "text-signature");
        $('head').append(linkElem);

        linkElem.attr('href', options.customFont.url);
        if (linkElem[0].addEventListener) {
            linkElem[0].addEventListener('load', function() {

                // wait abit longer and call again -  if first time
                self.generateImage(options);
                if (!self.isInitiated) {
                    setTimeout(function() {
                        self.generateImage(options);
                    }, 2800);
                }

                self.isInitiated = true;
            }, false);
        }

    }
    this.formatInput = function(options) {
        //handle errror 
        if (!options || options == undefined) {
            throw "text-singature: parameter cannot be null or empty";
        }
        if (!options.font) {
            throw "text-singature: parameter font cannot be empty";
        }
        if (!options.fillStyle) {
            throw "text-singature: parameter fillStyle cannot be empty";
        }
        if (!options.textString) {
            throw "text-singature: parameter textString cannot be empty";
        }

        options.font = (options.font) || ["12px", "Arial"];
        options.font = (options.font).join(" ");

        options.fillStyle = (options.color) || "black";
        options.textString = options.textString || "Text-Signature !";
        options.paddingX = options.paddingX || 0;
        options.paddingY = options.paddingY || 0;

        return options;

    };


    this.generateImage = function(options) {

        //parameter sanity and defaults
        options = this.formatInput(options);

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
        self.imageData = dataUrl;
        
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
    this.getImageData = function( ) {
        return self.imageData;
    };
    this.isDomObject = function(obj) {
        return (obj.tagName ? "true" : "false");
    };

    this.ping = function() {
        console.log("Yup. text-singature is working");
    };

    this.init();
};




module.exports = textSignature
