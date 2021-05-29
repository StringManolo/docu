  
code: javascript  
# fwl
---  
### ES6 module
---  
##### FWL (Function Web Language) is a javascript ES6 module code geneator. Is intended to write full featured documentation and generate html, markdown and bbcode.
---  
Library to create documents in html, markdown and bbcode.  
  
  
_function _**fwl**  
Bind the library methods to the object.  
Argument: **obj** _Object_  Object to bind the methods to.  
Return: _undefined_  
  
  
_property _**obj.documentType**  
Specify what document to make.  
Values: "html","markdown","bbcode".  
  
  
_method _**obj.create**  
Print and return the generated code for the chosen document  
Argument: **(...s)** _String_  String/s to print  
Return: **str** _String_  All the strings  
  
  
_method _**obj.html**  
Only add the string to generated html  
Argument: **s** _String_  HTML code to include.  
Return: **s** _String_  Html code.  
  
  
_method _**obj.title**  
Add title tag to generated html  
Argument: **s** _String_  Document title  
Return: **code** _String_  String between title tags (html)  

