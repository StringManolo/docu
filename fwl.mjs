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
t(`This is a template using javascript variables ${new Date()}`)
)
*/
const fwl = obj => {

  /* property -> obj.documentType
  * summary -> Specify what document to make
  * values -> "html","markdown","bbcode"
  */
  obj.documentType = "html";

  /* method -> obj.create
  * summary -> Print and return the generated code for the chosen document
  * param -> (...s) -> String -> String/s to print
  * return -> str -> String -> All the strings
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
  * summary -> Only add the string to generated html
  * param -> s -> String -> HTML code to include
  * return -> s -> String -> Html code
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
      case "html" : return `<pre><code lang="${s1}">${s2}</code></pre>`;
      case "markdown" : return "```" + s1 + "\n" + s2 + "\n```";
      case "bbcode" : return `[code=${s1}]${s2}[/code]`;
    }
  }

  /* method -> obj.bold
  * summary -> Make text bold
  * param -> s -> String -> Text
  * return -> s -> String -> Bold text
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
  text-rendering: optimizeLegibility; /* Improve text */
  margin-bottom: 4px; /* Some Android screens cover bottom viewport */
  touch-action: manipulation; /* Disable double tap zoom on touch devices to allow fast touch actions */
} body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 12px;
} code {
  display: block;
  color: #ccc;
  font-family: "Courier New", monospace;
  white-space: pre;
  overflow: auto;
  margin-bottom: 8px;
  padding: 3px;
  opacity: 0.9;
  color: #f76;
  font-weight: 600;
  text-shadow: -1px 1px 0 0 hsl(20, 100%, 16%),
    -2px 2px 0 0 hsl(20, 100%, 16%),
    -3px 3px 0 0 hsl(20, 100%, 16%),
    -4px 4px 0 0 hsl(20, 100%, 16%),
    -5px 5px 0 0 hsl(20, 100%, 16%),
    -6px 6px 0 0 hsl(20, 100%, 16%);
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
*/
const replaceAll = (str, pattern, newStr) => {
  const reg = new RegExp(pattern, "g");
  while (reg.test(str)) {
    str = str.replace(reg, newStr);
  }
  return str;
}

export default fwl;
