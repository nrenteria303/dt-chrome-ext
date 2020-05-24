const uls = document.getElementsByTagName('ul'),
      lis = document.getElementsByTagName('li'),
      ps = document.getElementsByTagName('p'),
      spans = document.getElementsByTagName('span'),
      as = document.getElementsByTagName('a'),
      qs = document.getElementsByTagName('q'),
      figcaptions = document.getElementsByTagName('figcaption'),
      h1s = document.getElementsByTagName('h1'),
      h2s = document.getElementsByTagName('h2'),
      h3s = document.getElementsByTagName('h3'),
      h4s = document.getElementsByTagName('h4'),
      h5s = document.getElementsByTagName('h5'),
      h6s = document.getElementsByTagName('h6'),
      divs = document.getElementsByTagName('div');
 
let nodeListArr = [uls, lis, ps, spans, as, qs, figcaptions, h1s, h2s, h3s, h4s, h5s, h6s, divs];

function replaceLoop(nodeList, index, originalText, count, regex, newStr = "Tiny Dinky Daffy") {
    for (let j = 0; j < count; j++) {
        var newText = originalText.replace(regex, newStr);
        nodeList[index].innerHTML = newText;
    }
}

function replaceDT(arr) {
    arr.forEach(nodeList => {
        for (let i = 0; i < nodeList.length; i++) {
            var text = nodeList[i].innerHTML;
            if (text.includes("realDonaldTrump")) {
                let regex = /realDonaldTrump/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex, "tiniestDinkyDaffy");
            } else if (text.includes("Donald J. Trump")) {
                let regex = /Donald J. Trump/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex);
            } else if (text.includes("Donald John Trump")) {
                let regex = /Donald John Trump/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex);
            } else if (text.includes("DONALD J. TRUMP")) {
                let regex = /DONALD J. TRUMP/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex);
            } else if (text.includes("DONALD J TRUMP")) {
                let regex = /DONALD J TRUMP/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex);
            } else if (text.includes("DONALD TRUMP")) {
                let regex = /DONALD TRUMP/g;
                replaceLoop(nodeList, i, text, text.match(regex).length);
            } else if (text.includes("Donald Trump")) {
                let regex = /Donald Trump/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex);
            } else if (text.includes("Trump")) {
                let regex = /Trump/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex, "Dinky Daffy");
            } else if (text.includes("TRUMP")) {
                let regex = /TRUMP/g;
                replaceLoop(nodeList, i, text, text.match(regex).length, regex, "Dinky Daffy");
            }
        }
    });
    if (document.title.toLowerCase().includes("donald trump")) {
        document.title = document.title.replace("Donald Trump", "Tiny Dinky Daffy");
        document.title = document.title.replace("DONALD TRUMP", "Tiny Dinky Daffy");
    } else if (document.title.toLowerCase().includes("donald j. trump") || document.title.toLowerCase().includes("donald j trump")) {
        document.title = document.title.replace("Donald J. Trump", "Tiny Dinky Daffy");
        document.title = document.title.replace("DONALD J. TRUMP", "Tiny Dinky Daffy");
    } else if (document.title.toLowerCase().includes("donald j trump") || document.title.toLowerCase().includes("donald j trump")) {
        document.title = document.title.replace("Donald J Trump", "Tiny Dinky Daffy");
        document.title = document.title.replace("DONALD J TRUMP", "Tiny Dinky Daffy");
    } else if (document.title.toLowerCase().includes("trump")) {
        document.title = document.title.replace("Trump", "Dinky Daffy");
        document.title = document.title.replace("TRUMP", "Dinky Daffy");
    }
}

replaceDT(nodeListArr);

window.addEventListener("scroll", function() {
    replaceDT(nodeListArr);
});
