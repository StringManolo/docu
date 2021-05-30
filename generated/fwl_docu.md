  
code: javascript  
# fwl
---  
### ES6 module
---  
##### FWL (Function Web Language) is a javascript ES6 module code geneator. Is intended to write full featured documentation and generate html, markdown and bbcode.
---  
Library to create documents in html, markdown and bbcode.  
  
  
  
##### _function_ **fwl**  
Bind the library methods to the object  
Argument: **obj** _Object_   Object to bind the methods to  
Return: _undefined_   
```javascript
&#105;mp&#111;rt&#32;fwl&#32;fr&#111;m&#32;&#34;&#46;/fwl&#46;mj&#115;&#34;;
fwl&#40;gl&#111;b&#97;l&#41;;
cr&#101;&#97;t&#101;&#40;
h1&#32;&#96;&#69;x&#97;mpl&#101;&#96;,
p&#32;&#96;Th&#105;&#115;&#32;&#105;&#115;&#32;&#97;&#32;p&#97;r&#97;gr&#97;ph&#96;
hr&#32;&#96;&#96;
t&#40;&#96;Th&#105;&#115;&#32;&#105;&#115;&#32;&#97;&#32;t&#101;mpl&#97;t&#101;&#32;&#117;&#115;&#105;ng&#32;j&#97;v&#97;&#115;cr&#105;pt&#32;v&#97;r&#105;&#97;bl&#101;&#115;&#32;$&#123;n&#101;w&#32;D&#97;t&#101;&#40;&#41;&#125;&#96;&#41;
&#41;
```  
  
  
##### _property_ **obj.documentType**  
Specify what document to make  
Values: "html","markdown","bbcode"  
```javascript
&#111;bj&#46;d&#111;c&#117;m&#101;ntTyp&#101;&#32;=&#32;&#34;html&#34;&#32;//&#32;cr&#101;&#97;t&#101;&#32;&#111;&#117;tp&#117;t&#115;&#32;html
&#111;bj&#46;d&#111;c&#117;m&#101;ntTyp&#101;&#32;=&#32;&#34;m&#97;rkd&#111;wn&#34;&#32;//&#32;cr&#101;&#97;t&#101;&#32;&#111;&#117;tp&#117;t&#115;&#32;m&#97;rkd&#111;wn&#32;&#105;n&#115;t&#101;&#97;d
&#111;bj&#46;d&#111;c&#117;m&#101;ntTyp&#101;&#32;=&#32;&#34;bbc&#111;d&#101;&#34;&#32;//&#32;cr&#101;&#97;t&#101;&#32;&#111;&#117;tp&#117;t&#115;&#32;bbc&#111;d&#101;&#32;&#105;n&#115;t&#101;&#97;d
```  
  
  
##### _method_ **obj.create**  
Print and return the generated code for the chosen document  
Argument: **(...s)** _String_   String/s to print  
Return: **str** _String_   All the strings  
```javascript
cr&#101;&#97;t&#101;&#32;&#40;
html&#32;&#96;&#60;&#33;D&#79;CTYP&#69;&#32;html&#62;
&#60;html&#62;
&#60;h&#101;&#97;d&#62;
&#60;m&#101;t&#97;&#32;ch&#97;r&#115;&#101;t=&#34;&#117;tf-8&#34;&#62;&#96;,

t&#105;tl&#101;&#32;&#96;FWL&#96;,

html&#32;&#96;&#60;/h&#101;&#97;d&#62;
&#60;b&#111;dy&#62;&#96;,

h1&#32;&#96;FWL&#32;&#40;F&#117;nct&#105;&#111;n&#32;W&#101;b&#32;L&#97;ng&#117;&#97;g&#101;&#41;&#96;,

h3&#32;&#96;FWL&#32;&#105;&#115;&#32;&#97;&#32;&#115;&#105;mpl&#101;&#32;&#34;l&#97;ng&#117;&#97;g&#101;&#34;&#32;d&#101;&#115;&#105;gn&#101;d&#32;t&#111;&#32;b&#117;&#105;ld&#32;w&#101;bp&#97;g&#101;&#115;&#32;&#97;nd&#32;d&#111;c&#117;m&#101;nt&#115;&#32;&#105;n&#32;html,&#32;m&#97;rkd&#111;wn,&#32;bbc&#111;d&#101;&#46;&#46;&#46;&#96;,

html&#32;&#96;&#60;/b&#111;dy&#62;
&#60;/html&#62;&#96;
&#41;;
```  
  
  
##### _method_ **obj.html**  
Only add the string to generated html if HTML document.  
Argument: **s** _String_   HTML code to include  
Return: **s** _String_   Html code  
```javascript
html&#32;&#96;&#60;&#33;D&#79;CTYP&#69;&#32;html&#62;
&#60;html&#62;
&#60;h&#101;&#97;d&#62;
&#60;m&#101;t&#97;&#32;ch&#97;r&#115;&#101;t=&#34;&#117;tf-8&#34;&#62;
&#60;/h&#101;&#97;d&#62;
&#96;
c&#111;n&#115;t&#32;&#115;t&#97;rt&#105;ngB&#111;dyT&#97;g&#32;=&#32;&#34;&#60;b&#111;dy&#62;&#34;;
c&#111;n&#115;t&#32;&#101;nd&#105;ngB&#111;dyT&#97;g&#32;=&#32;&#34;&#60;/b&#111;dy&#62;&#34;;

cr&#101;&#97;t&#101;&#32;&#40;
html&#32;&#40;&#115;t&#97;rt&#105;ngB&#111;dyT&#97;g&#41;,
h1&#32;&#96;H&#101;ll&#111;&#96;,
html&#32;&#40;&#101;nd&#105;ngB&#111;dyT&#97;g&#41;
&#96;&#41;;

//&#32;Th&#105;&#115;&#32;w&#105;ll&#32;g&#101;n&#101;r&#97;t&#101;&#32;&#111;nly&#32;th&#101;&#32;h1&#32;t&#97;g&#32;&#105;n&#32;m&#97;rkd&#111;wn&#32;&#97;nd&#32;bbc&#111;d&#101;
//&#32;&#97;nd&#32;w&#105;ll&#32;&#97;dd&#32;th&#101;&#32;b&#111;dy&#32;t&#97;g&#115;&#32;&#105;f&#32;th&#101;&#32;d&#111;c&#117;m&#101;nt&#32;&#105;&#115;&#32;html
```  
  
  
##### _method_ **obj.title**  
Add title tag to generated html  
Argument: **s** _String_   Document title  
Return: **code** _String_   String between title tags (html)  
  
  
  
##### _method_ **obj.text**  
Add text to the document  
Argument: **s** _String_   Text to add.  
Return: **s** _String_   Text code  
  
  
  
##### _method_ **obj.p**  
Add text in a paragraph to the document  
Argument: **s** _String_   Text to insert  
Return: **s** _String_   Paragraph code  
  
  
  
##### _method_ **obj.br**  
Add a linebreak  
Argument: **s** _String_   Text to prepend the linebreak  
Return: **s** _String_   Linebreak code  
  
  
  
##### _method_ **obj.h1**  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h2**  
Add text as h2  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h3**  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h4**  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h5**  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.h6**  
Add text as h1  
Argument: **s** _String_   Heading text  
Return: **s** _String_   Heading code  
  
  
  
##### _method_ **obj.link**  
Create a clickable link  
Argument: **s** _String_   Link text + space + url  
Return: **s** _String_   Clickable link code  
  
  
  
##### _method_ **obj.image**  
Create a image  
Argument: **s** _String_   Alt text + space + url  
Return: **s** _String_   Image code  
  
  
  
##### _method_ **obj.code**  
Create a highlighted code block  
Argument: **s** _String_   Code. First line is only the language name  
Return: **s** _String_   Code block.  
  
  
  
##### _method_ **obj.bold**  
Make text bold  
Argument: **s** _String_   Text  
Return: **s** _String_   Bold text  
  
  
  
##### _method_ **obj.italic**  
Make text italic  
Argument: **s** _String_   Text  
Return: **s** _String_   Italized text  
  
  
  
##### _method_ **obj.underline**  
Underline the text  
Argument: **s** _String_   Text  
Return: **s** _String_   Underlined text (markdown returns normal text)  
  
  
  
##### _method_ **obj.list**  
Create a dotted list of items  
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
  
  
  
##### _method_ **obj.olist**  
Create a numeric list of items  
Argument: **s** _String_   Comma separated list of items  
Return: **s** _String_   List code  
  
  
  
##### _method_ **obj.hr**  
Add a horizontal line separator  
Argument: **()**  
Return: **s** _String_   Horizontal separator code  
  
  
  
##### _method_ **obj.quote**  
Create a quoted block  
Argument: **s** _String_   Text block  
Return: **s** _String_   Quoted block  
  
  
  
##### _method_ **obj.table**  
Create a table  
Argument: **s** _String_   | separated list  
Return: **s** _String_   Table code  
  
  
  
##### _method_ **obj.style_tables**  
Add tables css if generating a html document  
Argument: **()**  
Return: **s** _String_   CSS style code  
  
  
  
##### _method_ **obj.style_default**  
Add document css if generating a html document  
Argument: **()**  
Return: **s** _String_   CSS style code  
  
  
  
##### _function_ **replaceAll**  
Replace all ocurrences of a string from the text  
Argument: **str** _String_   Text to replace findings from  
Argument: **pattern** _String_   Text (coverted to regular expression) to replace  
Argument: **newStr** _String_   New text to replaced findings for  
Return: **s** _String_   Text with all ocurrences replaced  
  
  
  
##### _function_ **htmlEntities**  
Convert all characters to HTML entities to avoid text being interpretated as code  
Argument: **s** _String_   Code to covert to HTML entities  
Return: **a** _String_   HTML entities  

