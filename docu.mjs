import fs from "fs";
import fwl from "./fwl.mjs";

fwl(global);

if (!process.argv[2]) {
  console.log(`Usage: 

`);
  process.exit(0);
}

if (process.argv[3]) {
  documentType = process.argv[3];
}

const filename = process.argv[2];

let code;
try {
  code = fs.readFileSync(filename, { encoding: "utf-8" });
} catch(e) {
  console.log(`Unable to load the file: ${e}`);
  process.exit(0);
}

let stringContext = false;
let commentContext = false;
let commentStartPos = false;
let comments = [];
for (let i in code) {
  if (code[i - 1] != "\\" && code[i] == '"' || code[i] == "'" || code[i] == "`") {
    if (commentContext == false) {
      switch(code[i]) {
        case '"': 
          stringContext = (stringContext == '"' ? false : '"');
        break;

        case "'":
          stringContext = (stringContext == "'" ? false : "'");
        break;

        case "`":
          stringContext = (stringContext == "`" ? false : "`");
      }
    }
  } else if(code[i] == "/" && code[1 + +i] == "*") {
    if (stringContext == false) {
      commentContext = true;
      commentStartPos = i; 
    }
  } else if(code[i] == "*" && code[1 + +i] == "/") {
    if (stringContext == false) {
      if (commentStartPos) {
        comments.push(code.substring(commentStartPos, +i + 2));
        commentStartPos = false;
        stringContext = false;
        commentContext = false;
      }
    }
  }
}


let lang = "unknown";
const processParts = part => {
  let aux = "";
  switch(part[0]) {
    case "lang":
      lang = part[1];
      return p (`code: ${part[1]}`);

    case "title": 
      t = title (`${part[1]}`);
    break;

    case "name": return h1 (`${part[1]}`) + hr ``;
    case "filetype": return h3 (`${part[1]}`) + hr ``;
    case "description": return h5 (`${part[1]}`) + hr ``;

    case "function":
    case "property":
    case "method": return p("") + italic (`${part[0]} `) + bold (`${part[1]}`) + br("");

    case "summary": return br (`${part[1]}`);

    case "return":
      if(part.length > 3) {
        return  "Return: " + bold (`${part[1]}`) + " " + italic (`${part[2]}`) + br (`  ${part[3]}`);
      } else if (part.length < 4) {
        return "Return: " + italic (`${part[2]}`) + br ("");
      }
    break;

    case "param": return  "Argument: " + bold (`${part[1]}`) + " " +	 italic (`${part[2]}`) + br (`  ${part[3]}`);

    case "values": return br (`Values: ${part[1]}`);


  }
  return "";
}

let premarkup = "",
premarkup2 = "",
markup = "",
t = "",
postmarkup = "";

if (documentType == "html") {
premarkup = html `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
`;
premarkup2 = html `</head>
<body>
`;
postmarkup = html `</body>
</html>`;
}

const parseComment = comment => {
  if (/(\n|\r\n)/g.test(comment)) {
    let lines = comment.split("\n");
    for (let i in lines) {
      if (/\-\>/g.test(lines[i])) {
        if (/\/\*/g.test(lines[i]) || /\*/g.test(lines[i])) {
          lines[i] = lines[i].split("*").splice(1, lines[i].length).join("*").trim();
          let parts = lines[i].split("->").map(part => part.trim());
          markup += processParts(parts);
        } else {
          //console.log("Not finding star");
        }
      } else {
        //console.log("Not finding arrow");
      }
    }
  } else {
    //console.log(`Not finding line breaks`);
  }
}


for (let i in comments) {
  parseComment(comments[i]);
}

const replaceAll = (str, pattern, newStr) => {
  while (pattern.test(str)) {
    str = str.replace(pattern, newStr);
  }
  return str;
}

let generated = (premarkup + t + premarkup2 + markup + style_default() + postmarkup);

generated = replaceAll(generated, /REMOVETHISLINE/g, "");

console.log(generated);
