  
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
  
  
  
##### _property_ **obj.documentType**  
Specify what document to make  
Values: "html","markdown","bbcode"  
  
  
  
##### _method_ **obj.create**  
Print and return the generated code for the chosen document  
Argument: **(...s)** _String_   String/s to print  
Return: **str** _String_   All the strings  
  
  
  
##### _method_ **obj.html**  
Only add the string to generated html  
Argument: **s** _String_   HTML code to include  
Return: **s** _String_   Html code  
  
  
  
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

