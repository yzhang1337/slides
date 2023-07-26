const fs = require('fs');
const path = require('path');

// specify the directory you want to use
const dirPath = path.resolve(__dirname, 'public'); 

fs.readdir(dirPath, (err, files) => {
    if(err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    } 

    let html = "<html>\n<body>\n";

    files.forEach((file, index) => {
        if(path.extname(file) === ".html") {
            html += `<a href="${file}">${file}</a><br>\n`;
        }
    });

    html += "</body>\n</html>";

    fs.writeFile('public/index.html', html, (err) => {
        if (err) throw err;
    });
});
