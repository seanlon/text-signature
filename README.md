

### Text-Signature

### What is this for? 


This package is for you to immediately convert a working  text value into a generated image signature.
This image signature can be in any style depending on the font you used like cursive ,robotic, themed or more depending on your choice. It has also other parameters for tuning.


### Why & Where i need this for?  

*  You may use this as an-antiscrapping tool to prevent people from attempting to pledgerize or extract your data.
*  You may automatically generate image signature for email purpose or sign-off letter notes.
* You can save time to re-write the generation scripts by directly using this.

###   Where can I find working examples or DEMO?
https://seanlon.github.io/text-signature/
[![N|Example](https://github.com/seanlon/text-signature/blob/master/animation.gif)](https://seanlon.github.io/text-signature/)

###   Where can I donate or contact owner?

[![N|Donate](https://www.paypalobjects.com/webstatic/mktg/logo/PP_AcceptanceMarkTray-NoDiscover_243x40.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GYS2WN8WXLPC4)

Thank you! It will motivate me to write more codes! :]


###   How to use it?
How to use it?


1) Import it via any AMD or UMD.

###    
```sh
    TextSignature = require('text-signature')
``` 

###  
2) Instantiate it. Check the example parameter below..

###    
```sh  
    //#custom fonts to load 
    var optionsParameter = {
            width: 300,
            height: 300,
            paddingX: 100,
            paddingY: 100,
            canvasTargetDom: ".js-canvasTargetDom",
            font:  ["50px", "'Homemade Apple'"],
            color: "blue",
            textString: "Your Text HERE",
            customFont: { 
              name: "'Homemade Apple'", 
              url: "http://fonts.googleapis.com/css?family=Homemade+Apple"  
            }
    };
    
    textSignature = new TextSignature(optionsParameter);
``` 

###  
3) Re-use it.
```sh
    textSignature.generateImage(optionsParameter);

    //get base64 image source data 
    textSignature.getImageData( ) ;

```  



###   Parameters Explanation
 ```sh 
    width: 300, //the width of the image output
    height: 300,//the height of the image output
    paddingX: 100,//the start x position of of the text image output
    paddingY: 100,//the start y position of of the text image output
    
    // The canvas Dom that the image will be rendered into, if blank image
    // will be rendered in  popup new window
    canvasTargetDom: ".js-canvasTargetDom",
    
    //the css fonts styling as per w3 standard of html css style="font: .."
    font:  ["50px", "'Homemade Apple'"],
    
    //the text color"
    color: "blue",
    
    //the text value or message"
    textString: "Your Text HERE",
    
    
    //the load any custom font from external resources"
    customFont: { 
      name: "'Homemade Apple'", 
      url: "http://fonts.googleapis.com/css?family=Homemade+Apple"  
    }
 
```  

###   Report a bug  ?
Send it to LSeanLon@gmail.com
 