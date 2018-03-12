const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

rp("https://reddit.com/r/popular.json")
    .then(html => {
        let articles = JSON.parse(html).data.children;
        let objects = [];

        articles.forEach((item) => {
            let object = {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author,
                subreddit: item.data.subreddit
            }
            objects.push(object);
        });

        fs.writeFile("reddit.json", JSON.stringify(objects), (err) => {
            if (err) console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });