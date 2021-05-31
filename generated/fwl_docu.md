  
code: javascript  
# fwl
---  
### ES6 module
---  
#### FWL (Function Web Language) is a javascript ES6 module code geneator. Is intended to write full featured documentation and generate html, markdown and bbcode.
---  
Library to create documents in html, markdown and bbcode.  
  
  
  
##### [24](#24)  
Bind the library methods to the object  
Argument: **obj** _Object_   Object to bind the methods to  
Return: _undefined_   
```javascript
import fwl from "./fwl.mjs";
fwl(global);
create(
h1 `Example`,
p `This is a paragraph`
hr ``
text(`This is a template using javascript variables ${new Date()}`)
)
```  
  
  
##### [33](#33)  
Specify what document to make  
Values: "html","markdown","bbcode"  
```javascript
obj.documentType = "html" // create outputs html
obj.documentType = "markdown" // create outputs markdown instead
obj.documentType = "bbcode" // create outputs bbcode instead
```  
  
  
##### [58](#58)  
Print and return the generated code for the chosen document  
Argument: **(...s)** _String_   String/s to print  
Return: **str** _String_   All the strings  
```javascript
create (
html `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">`,

title `FWL`,

html `</head>
<body>`,

h1 `FWL (Function Web Language)`,

h3 `FWL is a simple "language" designed to build webpages and documents in html, markdown, bbcode...`,

html `</body>
</html>`
);
```  
  
  
##### [92](#92)  
Only add the string to generated html if HTML document.  
Argument: **s** _String_   HTML code to include  
Return: **s** _String_   Html code  
```javascript
html `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
`
const startingBodyTag = "<body>";
const endingBodyTag = "</body>";

create (
html (startingBodyTag),
h1 `Hello`,
html (endingBodyTag)
`);

// This will generate only the h1 tag in markdown and bbcode
// and will add the body tags if the document is html
```  
  
  
##### [106](#106)  
Add title tag to generated html  
Argument: **s** _String_   Document title  
Return: **code** _String_   String between title tags (html)  
```javascript
title `Documentation`
```  
  
  
##### [120](#120)  
Add text to the document  
Argument: **s** _String_   Text to add.  
Return: **s** _String_   Text code  
```javascript
text `This text will be shown in generated documents`
```  
  
  
##### [134](#134)  
Add text in a paragraph to the document  
Argument: **s** _String_   Text to insert  
Return: **s** _String_   Paragraph code  
```javascript
p `My text`
```  
  
  
##### [148](#148)  
Add a linebreak  
Argument: **s** _String_   Text to prepend the linebreak  
Return: **s** _String_   Linebreak code  
```javascript
br `This text is line break terminated`
```  
  
  
##### [162](#162)  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h1 `Documentation`
```  
  
  
##### [176](#176)  
Add text as h2  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h2 `Articles`
```  
  
  
##### [190](#190)  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h3 `Article Title`
```  
  
  
##### [204](#204)  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h4 `Article Content Title`
```  
  
  
##### [218](#218)  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h5 `Part of the article`
```  
  
  
##### [232](#232)  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
```javascript
h6 `Small title`
```  
  
  
##### [246](#246)  
Create a clickable link  
Argument: **s** _String_   Link text + space + url  
Return: **s** _String_   Clickable link code  
```javascript
link `StringManolo Github Account Link https://github.com/StringManolo`
```  
  
  
##### [271](#271)  
Create a image  
Argument: **s** _String_   Alt text + space + url  
Return: **s** _String_   Image code  
```javascript
image `google favicon https://google.com/favicon.ico`
```  
  
  
##### [298](#298)  
Create a highlighted code block  
Argument: **s** _String_   Code. First line is only the language name  
Return: **s** _String_   Code block.  
```javascript
code `#include <iostream>

int main() {
  std::cout << "Hello World!" << std::endl;
  return 0;
}`
```  
  
  
##### [334](#334)  
Create a highlighted code block  
Argument: **s** _String_   Code. First line is only the language name  
Return: **s** _String_   Code block.  
```javascript
code `#include <iostream>

int main() {
  std::cout << "Hello World!" << std::endl;
  return 0;
}`
```  
  
  
##### [365](#365)  
Make text bold  
Argument: **s** _String_   Text  
Return: **s** _String_   Bold text  
```javascript
bold `important`;
```  
  
  
##### [379](#379)  
Make text italic  
Argument: **s** _String_   Text  
Return: **s** _String_   Italized text  
```javascript
italic `cool`
```  
  
  
##### [393](#393)  
Underline the text  
Argument: **s** _String_   Text  
Return: **s** _String_   Underlined text (markdown returns normal text)  
```javascript
underline `underlined text`
```  
  
  
##### [407](#407)  
Create a dotted list of items  
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
```javascript
list `car,bike,plane,truck,bus`
```  
  
  
##### [452](#452)  
Create a numeric list of items  
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
```javascript
olist `Press the button,Wait 5 seconds,Press the button again,done`
```  
  
  
##### [497](#497)  
Add a horizontal line separator  
Argument: **()**  
Return: **s** _String_   Horizontal separator code  
```javascript
hr ``
```  
  
  
##### [511](#511)  
Create a quoted block  
Argument: **s** _String_   Text block  
Return: **s** _String_   Quoted block  
```javascript
quote `"This text is being quoted"`
```  
  
  
##### [536](#536)  
Create a table  
Argument: **s** _String_   | separated list  
Return: **s** _String_   Table code  
```javascript
table `item | price
bag | 12€
shoes | 3€`
```  
  
  
##### [612](#612)  
Add tables css if generating a html document  
Argument: **()**  
Return: **s** _String_   CSS style code  
```javascript
style_tables ``
```  
  
  
##### [646](#646)  
Add document css if generating a html document  
Argument: **()**  
Return: **s** _String_   CSS style code  
```javascript
style_default``
```  
  
  
##### [712](#712)  
Replace all ocurrences of a string from the text  
Argument: **str** _String_   Text to replace findings from  
Argument: **pattern** _String_   Text (coverted to regular expression) to replace  
Argument: **newStr** _String_   New text to replaced findings for  
Return: **s** _String_   Text with all ocurrences replaced  
```javascript
replaceAll("hello Manolo, hello", "hello", "bye");
```  
  
  
##### [726](#726)  
Convert all characters to HTML entities to avoid text being interpretated as code  
Argument: **s** _String_   Code to covert to HTML entities  
Return: **a** _String_   HTML entities  
```javascript
htmlEntities("My favourite tag is <iframe src='javascript:alert(1337)'></iframe>");
```  
  

