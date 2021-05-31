# docu.mjs
---  
### ES6 module
---  
##### Docu is a code geneator CLI tool. Is intended to generate documentation in html, markdown and bbcode from code commentaries.
---  
CLI tool to create documents from commentaries in html, markdown and bbcode.

##### Features:
- Generate output in 3 languages
- Keep all changes in one file
- Output to console to allow automatization
- Navigate directly to the lines by clicking
- Easy share (documentated functions or directly the code line)
- No 3° party dependencies
- Support multiple languages

##### Download:
> ```git clone https://github.com/StringManolo/docu && cd docu```

##### Usage:
> ```node docu.mjs myCodeFile html > documentation.html```
> ```node docu.mjs myCodeFile markdown > documentation.md```
> ```node docu.mjs myCodeFile bbcode > documentation.bbcode.txt```
> ```lynx --dump documentation.html > documentation.txt```

##### Example:
Use fwl.mjs file as a reference on how to comment your code..  
If you add an example, has to be the last paramter in your commentary.

