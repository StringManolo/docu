/* This commentaries are made by hand to be processed by https://github.com/StringManolo/docu */

/* lang -> javascript
* name -> fwl
* title -> FWL - Documentation
* filetype -> ES6 module
* description -> FWL (Function Web Language) is a javascript ES6 module code geneator. Is intended to write full featured documentation and generate html, markdown and bbcode.
* summary -> Library to create documents in html, markdown and bbcode.
*/

/* function -> fwl
* summary -> Bind the library methods to the object
* param -> obj -> Object -> Object to bind the methods to
* return -> undefined
* example -> import fwl from "./fwl.mjs";
fwl(global);
create(
h1 `Example`,
p `This is a paragraph`
hr ``
text(`This is a template using javascript variables ${new Date()}`)
)
*/
const fwl = obj => {

  /* property -> obj.documentType
  * summary -> Specify what document to make
  * values -> "html","markdown","bbcode"
  * example -> obj.documentType = "html" // create outputs html
obj.documentType = "markdown" // create outputs markdown instead
obj.documentType = "bbcode" // create outputs bbcode instead
  */
  obj.documentType = "html";

  /* method -> obj.create
  * summary -> Print and return the generated code for the chosen document
  * param -> (...s) -> String -> String/s to print
  * return -> str -> String -> All the strings
  * example -> create (
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
  */
  obj.create = (...s) => {
    let str = "";
    for (let i in s) {
      if (!/REMOVETHISLINE/g.test(s[i])) {
        str += `${s[i]}\n`;
      }
    }
    console.log(str);
    return str;
  }


  /* method -> obj.html
  * summary -> Only add the string to generated html if HTML document.
  * param -> s -> String -> HTML code to include
  * return -> s -> String -> Html code
  * example -> html `<!DOCTYPE html>
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
  */
  obj.html = s => {
    switch(obj.documentType) {
      case "html" : return s;
      case "markdown" : return "REMOVETHISLINE";
      case "bbcode" : return "REMOVETHISLINE";
    }
  }

  /* method -> obj.title
  * summary -> Add title tag to generated html
  * param -> s -> String -> Document title
  * return -> code -> String -> String between title tags (html)
  * example -> title `Documentation`
  */
  obj.title = s => {
    switch(obj.documentType) {
      case "html" : return `<title>${s}</title>`;
      case "markdown" : return "REMOVETHISLINE";
      case "bbcode" : return "REMOVETHISLINE";
    }
  }

  /* method -> obj.text
  * summary -> Add text to the document
  * param -> s -> String -> Text to add.
  * return -> s -> String -> Text code
  * example -> text `This text will be shown in generated documents`
  */
  obj.text = s => {
    switch(obj.documentType) {
      case "html" : return `<span>${s}</span>`;
      case "markdown" : return `${s}`;
      case "bbcode" : return `${s}`;
    }
  }

  /* method -> obj.p
  * summary -> Add text in a paragraph to the document
  * param -> s -> String -> Text to insert
  * return -> s -> String -> Paragraph code
  * example -> p `My text`
  */
  obj.p = s => {
    switch(obj.documentType) {
      case "html" : return `<p>${s}</p>`;
      case "markdown" : return `  \n${s}  \n`;
      case "bbcode" : return `\n${s}\n`;
    }
  }

  /* method -> obj.br
  * summary -> Add a linebreak
  * param -> s -> String -> Text to prepend the linebreak
  * return -> s -> String -> Linebreak code
  * example -> br `This text is line break terminated`
  */
  obj.br = (s="") => {
    switch(obj.documentType) {
      case "html" : return `${s}<br />`;
      case "markdown" : return `${s}  \n`;
      case "bbcode" : return `${s}\n`;
    }
  }

  /* method -> obj.h1
  * summary -> Add text as h1
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h1 `Documentation`
  */
  obj.h1 = s => {
    switch(obj.documentType) {
      case "html" : return `<h1>${s}</h1>`;
      case "markdown" : return `# ${s}`;
      case "bbcode" : return `[size=18pt][b]${s}[/b][/size]\n`; //`[h1]${s}[/h1]`;
    }
  }

  /* method -> obj.h2
  * summary -> Add text as h2
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h2 `Articles`
  */
  obj.h2 = s => {
    switch(obj.documentType) {
      case "html" : return `<h2>${s}</h2>`;
      case "markdown" : return `## ${s}`;
      case "bbcode" : return `[size=16pt][b]${s}[/b][/size]\n`; //`[h2]${s}[/h2]`;
    }
  }

  /* method -> obj.h3
  * summary -> Add text as h1
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h3 `Article Title`
  */
  obj.h3 = s => {
    switch(obj.documentType) {
      case "html" : return `<h3>${s}</h3>`;
      case "markdown" : return `### ${s}`;
      case "bbcode" : return `[size=15pt][b]${s}[/b][/size]\n`; //`[h3]${s}[/h3]`;
    }
  }

  /* method -> obj.h4
  * summary -> Add text as h1
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h4 `Article Content Title`
  */
  obj.h4 = s => {
    switch(obj.documentType) {
      case "html" : return `<h4>${s}</h4>`;
      case "markdown" : return `#### ${s}`;
      case "bbcode" : return `[size=13pt][b]${s}[/b][/size]\n`; //`[h4]${s}[/h4]`;
    }
  }

  /* method -> obj.h5
  * summary -> Add text as h1
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h5 `Part of the article`
  */
  obj.h5 = s => {
    switch(obj.documentType) {
      case "html" : return `<h5>${s}</h5>`;
      case "markdown" : return `##### ${s}`;
      case "bbcode" : return `[size=11pt][b]${s}[/b][/size]`; //`[h5]${s}[/h5]`;
    }
  }

  /* method -> obj.h6
  * summary -> Add text as h1
  * param -> s -> String -> Heading text
  * return -> s -> String -> Heading code
  * example -> h6 `Small title`
  */
  obj.h6 = s => {
    switch(obj.documentType) {
      case "html" : return `<h6>${s}</h6>`;
      case "markdown" : return `###### ${s}`;
      case "bbcode" : return `[size=9pt][b]${s}[/b][/size]`; //`[h6]${s}[/h6]`;
    }
  }

  /* method -> obj.link
  * summary -> Create a clickable link
  * param -> s -> String -> Link text + space + url
  * return -> s -> String -> Clickable link code
  * example -> link `StringManolo Github Account Link https://github.com/StringManolo`
  */
  obj.link = s => {
    let s1, s2;
    if (/ /g.test(s[0])) {
      let aux = s[0].split(" ");
      s1 = aux.splice(aux.length - 1);
      s2 = aux.join(" ");
    } else {
      s1 = s[0];
    }
    switch(obj.documentType) {
      case "html" : return `<a href="${s1}">${s2}</a>`;
      case "markdown" : return `[${s2}](${s1})`;
      case "bbcode" : return `[url=${s1}]${s2}[/url]`;
    }
  }

  /* method -> obj.image
  * summary -> Create a image
  * param -> s -> String -> Alt text + space + url
  * return -> s -> String -> Image code
  * example -> image `google favicon https://google.com/favicon.ico`
  */
  obj.image = s => {
    let s1, s2;
    if (/ /g.test(s[0])) {
      let aux = s[0].split(" ");
      s1 = aux.splice(aux.length - 1);
      s2 = aux.join(" ");
    } else {
      s1 = s[0];
    }
    switch(obj.documentType) {
      case "html" : return `<img src="${s1}" alt="${s2}">`;
      case "markdown" : return `![${s2}](${s1})`;
      case "bbcode" : return `[img alt=${s2}]${s1}[/img]`;
    }
  }

  /* method -> obj.code
  * summary -> Create a highlighted code block
  * param -> s -> String -> Code. First line is only the language name
  * return -> s -> String -> Code block.
  * example -> code `#include <iostream>

int main() {
  std::cout << "Hello World!" << std::endl;
  return 0;
}`
  */
  obj.code = s => {
    let s1, s2;
    if (typeof(s) != "string") {
      s = s[0];
    }
    if (/(\r\n|\r|\n)/g.test(s)) {
      let aux = s.split("\n");
      s1 = aux.splice(0, 1);
      s2 = aux.join("\n");
    } else {
      if (/ /g.test(s)) {
        let aux = s.split(" ");
        s1 = aux.splice(aux.length - 1);
        s2 = aux.join(" ");
      } else {
        s1 = s;
      }
    }
    switch(obj.documentType) {
      case "html" : return `<pre><code lang="${s1}">${htmlEntities(s2)}</code></pre>`;
      case "markdown" : return "```" + s1 + "\n" + s2 + "\n```";
      case "bbcode" : return `[code=${s1}]${s2}[/code]`;
    }
  }

  /* method -> obj.bold
  * summary -> Make text bold
  * param -> s -> String -> Text
  * return -> s -> String -> Bold text
  * example -> bold `important`;
  */
  obj.bold = s => {
    switch(obj.documentType) {
      case "html" : return `<b>${s}</b>`;
      case "markdown" : return `**${s}**`;
      case "bbcode" : return `[b]${s}[/b]`;
    }
  }

  /* method -> obj.italic
  * summary -> Make text italic
  * param -> s -> String -> Text
  * return -> s -> String -> Italized text
  * example -> italic `cool`
  */
  obj.italic = s => {
    switch(obj.documentType) {
      case "html" : return `<i>${s}</i>`;
      case "markdown" : return `_${s}_`;
      case "bbcode" : return `[i]${s}[/i]`;
    }
  }

  /* method -> obj.underline
  * summary -> Underline the text
  * param -> s -> String -> Text
  * return -> s -> String -> Underlined text (markdown returns normal text)
  * example -> underline `underlined text`
  */
  obj.underline = s => {
    switch(obj.documentType) {
      case "html" : return `<u>${s}</u>`;
      case "markdown" : return `${s}`;
      case "bbcode" : return `[u]${s}[/u]`;
    }
  }

  /* method -> obj.list
  * summary -> Create a dotted list of items
  * param -> s -> String -> Comma separated list of items
  * return -> s -> String -> List code
  * example -> list `car,bike,plane,truck,bus`
  */
  obj.list = s => {
    /* TODO escapedcomma not working as intended */
    let aux = replaceAll(s[0], "\\\\,", "ESCAPEDCOMMA").split(",");
    for (let i in aux) {
      aux[i] = replaceAll(aux[i], "ESCAPEDCOMMA", ",");
    }

    let str = "";
    switch(obj.documentType) {
      case "html": {
        str += "<ul>\n";
        for(let i in aux) {
          str += `<li>${aux[i]}</li>\n`;
        }
        str += "</ul>";
      }
      return str;

      case "markdown": {
        for(let i in aux) {
          str += `- ${aux[i]}\n`;
        }
      }
      return str.substr(0, str.length-1);

      case "bbcode": {
        str += "[list]\n";
        for(let i in aux) {
          str += `[li]${aux[i]}[/li]\n`;
        }
        str += "[/list]";
      }
      return str;
    }
  }

  /* method -> obj.olist
  * summary -> Create a numeric list of items
  * param -> s -> String -> Comma separated list of items
  * return -> s -> String -> List code
  * example -> olist `Press the button,Wait 5 seconds,Press the button again,done`
  */
  obj.olist = s => {
    let aux = replaceAll(s[0], "\\\\,", "ESCAPEDCOMMA").split(",");
    for (let i in aux) {
      aux[i] = replaceAll(aux[i], "ESCAPEDCOMMA", ",");
    }

    let str = "";
    switch(obj.documentType) {
      case "html": {
        str += "<ol>\n";
        for(let i in aux) {
          str += `<li>${aux[i]}</li>\n`;
        }
        str += "</ol>";
      }
      return str;

      case "markdown": {
        for(let i = 0; i < aux.length; ++i) {
          str += `${+i + 1}. ${aux[i]}\n`;
        }
      }
      return str.substr(0, str.length-1);

      case "bbcode": {
        str += "[list]\n";
        for(let i in aux) {
          str += `[li]${aux[i]}[/li]\n`;
        }
        str += "[/list]";
      }
      return str;
    }
  }

  /* method -> obj.hr
  * summary -> Add a horizontal line separator
  * param -> ()
  * return -> s -> String -> Horizontal separator code
  * example -> hr ``
  */
  obj.hr = () => {
    switch(obj.documentType) {
      case "html" : return `<hr>`;
      case "markdown" : return `\n---  \n`;
      case "bbcode" : return `\n[hr]\n`;
    }
  }

  /* method -> obj.quote
  * summary -> Create a quoted block
  * param -> s -> String -> Text block
  * return -> s -> String -> Quoted block
  * example -> quote `"This text is being quoted"`
  */
  obj.quote = s => {
    let aux = "";
    if (obj.documentType == "markdown") {
      s = s[0].split("\n");
      for (let i in s) {
        aux += "> " + s[i] + "\n";
      }
      aux.substr(0, aux.length - 1);
    }

    switch(obj.documentType) {
      case "html" : return `<blockquote>${s}</blockquote>`;
      case "markdown" : return aux;
      case "bbcode" : return `[quote]${s}[/quote]`;
    }
  }

  /* method -> obj.table
  * summary -> Create a table
  * param -> s -> String -> | separated list
  * return -> s -> String -> Table code
  * example -> table `item | price
bag | 12€
shoes | 3€`
  */
  obj.table = s => {
    s = s[0].split("\n");
    let aux = [];
    for (let i = 0; i < s.length; ++i) {
      aux.push(s[i].split(" | "));
    }
    let str = "";
    switch(obj.documentType) {
      case "html": {
        str += "<table style='border:1px solid #555'>\n";
        for (let i = 0; i < aux.length; ++i) {
          if (i == 0) {
            str += "<tr>";
            for (let j in aux[i]) {
              str += `<th>${aux[i][j]}</th>`;
            }
            str += "</tr>\n";
          } else {
            str += "<tr>";
            for (let j in aux[i]) {
              str += `<td>${aux[i][j]}</td>`;
            }
            str += "</tr>\n";
          }
        }
        str += "</table>";
        return str;
      }

      case "markdown": {
        for (let i = 0; i < aux.length; ++i) {
          for (let j in aux[i]) {
            str += `| ${aux[i][j]} `;
          }
          str += "| \n";

          if (i == 0) {
            for (let j in aux[i]) {
              str += `| --- `;
            }
            str += "|\n";
          }
        }
        return str;
      }

      case "bbcode": {
        str += "[table]\n";
        for (let i = 0; i < aux.length; ++i) {
          if (i == 0) {
            str += "[tr]";
            for (let j in aux[i]) {
              //str += `[th]${aux[i][j]}[/th]`;
              str += `[td]${aux[i][j]}[/td]`;
            }
            str += "[/tr]\n";
          } else {
            str += "[tr]";
            for (let j in aux[i]) {
              str += `[td]${aux[i][j]}[/td]`;
            }
            str += "[/tr]\n";
          }
        }
        str += "[/table]";
        return str;
      }
    }
  }

  /* method -> obj.style_tables
  * summary -> Add tables css if generating a html document
  * param -> ()
  * return -> s -> String -> CSS style code
  * example -> style_tables ``
  */
  obj.style_tables = () => {
    switch(obj.documentType) {
      case "html" : return `<style>
table {
  margin-bottom: 24px;
  border-spacing: 0;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
} table th {
  padding: 3px 10px;
  background-color: #ddd;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
} table td {
  padding: 3px 10px;
  border-top: none;
  border-left: 1px solid black;
  border-bottom: none;
  border-right: 1px solid black;
}
</style>`;
      case "markdown" : return "REMOVETHISLINE";
      case "bbcode" : return "REMOVETHISLINE";
    }
  }

  /* method -> obj.style_default
  * summary -> Add document css if generating a html document
  * param -> ()
  * return -> s -> String -> CSS style code
  * example -> style_default``
  */
  obj.style_default = () => {
    switch(obj.documentType) {
      case "html" : return `<style>
html {
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: middle;
  text-size-adjust: none; /* Fix Android Big Text */
  touch-action: manipulation; /* Disable double tap zoom on touch devices to allow fast touch actions */
} body {
  padding-bottom: 16px; /* Some Android screens cover bottom viewport */
  background-color: #eee;
  color: #555;
} code {
  display: block;
  color: #ccc;
  font-family: "Courier New", monospace;
  white-space: pre;
  overflow: auto;
  margin-bottom: 8px;
  padding: 10px;
  opacity: 0.9;
  color: #f82;
  background-color: #222;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1px solid black;
} blockquote {
  background-color: #eee;
  color: #333;
  border-top: 2px solid black;
  padding: 4px;
} table {
  margin-left: 4px;
  border-spacing: 0;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  border-radius: 2px;
} table th {
  padding: 3px 10px;
  background-color: #ddd;                                                border-top: none;                                                      border-left: none;
  border-right: none;                                                    border-bottom: 1px solid black;
} p {
  margin: 0;
} h5 {
  margin: 18px 0 -14px 0;
} 

</style>`;
      case "markdown" : return "REMOVETHISLINE";
      case "bbcode" : return "REMOVETHISLINE";
    }
  }

}

/* function -> replaceAll
* summary -> Replace all ocurrences of a string from the text
* param -> str -> String -> Text to replace findings from
* param -> pattern -> String -> Text (coverted to regular expression) to replace
* param -> newStr -> String -> New text to replaced findings for
* return -> s -> String -> Text with all ocurrences replaced
* example -> replaceAll("hello Manolo, hello", "hello", "bye");
*/
const replaceAll = (str, pattern, newStr) => {
  const reg = new RegExp(pattern, "g");
  while (reg.test(str)) {
    str = str.replace(reg, newStr);
  }
  return str;
}

/* function -> htmlEntities
* summary -> Convert all characters to HTML entities to avoid text being interpretated as code
* param -> s -> String -> Code to covert to HTML entities
* return -> a -> String -> HTML entities
* example -> htmlEntities("My favourite tag is <iframe src='javascript:alert(1337)'></iframe>");
*/
const htmlEntities = s => {
  const r = "replace";
  const a = s[r](/ /g,"&#32;")[r](/!/g,"&#33;")[r](/"/g,"&#34;")[r](/%/g,"&#37;")[r](/'/g,"&#39;")[r](/\(/g,"&#40;")[r](/\)/g,"&#41;")[r](/</g,"&#60;")[r](/>/g,"&#62;")[r](/`/g,"&#96;")[r](/a/g,"&#97;")[r](/A/g,"&#65;")[r](/e/g,"&#101;")[r](/E/g,"&#69;")[r](/i/g,"&#105;")[r](/I/g,"&#73;")[r](/o/g,"&#111;")[r](/O/g,"&#79;")[r](/u/g,"&#117;")[r](/U/g,"&#85;")[r](/{/g,"&#123;")[r](/}/g,"&#125;")[r](/‘/g,"&#8216;")[r](/’/g,"&#8217")[r](/‚/g,"&#8218;")[r](/“/g,"&#8220;")[r](/”/g,"&#8221;")[r](/„/g,"&#8222;")[r](/′/g,"&#8242;")[r](/″/g,"&#8244;")[r](/‹/g,"&#8249;")[r](/›/g,"&#8250;")[r](/s/g,"&#115;")[r](/S/g,"&#83;")[r](/\./g,"&#46;");
  return a;
}

export default fwl;
