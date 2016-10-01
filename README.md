Text-Signature

What is this for?
This package is for you to immediately convert a working  text value into a generated image signature.
This image signature can be in any style depending like cursive ,robotic, themed or more depending on your choice.

Why & Where i need this for?
1) You may use this as an-antiscrapping tool to prevent people from attempting to pledgerize or extract your data.
2) You may automatically generate image signature for email purpose or sign-off letter notes.
3) You can save time to re-write the generation scripts by directly using this.

Where can I donate or contact owner?
Please email me at lseanlon@gmail.com for more information. 

How to use it?
===Step 1: ===

Import it via any AMD or UMD.
[CODE]
TextSignature = require('text-signature')

[/CODE]

===Step 2:===
Instantiate it.

[CODE]
var optionsParameter = {
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
textSignature = TextSignature(optionsParameter);
[/CODE]

===Step 3: ===
Re-use it.

[CODE]
textSignature.generateImage(optionsParameter)

[/CODE]



You can see the example page.