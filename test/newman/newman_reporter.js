const newman = require("newman");
 
const collections = { 
    "wrike": require("./WRIKE.postman_collection.json"),
};

for (let i of Object.keys(collections)){
    newman.run({
        collection: collections[i],
        reporters: "html",
        reporter: {
            html: {
                export: `reports/${i}.html`
            }
        }
    }).on("start", function () { 
        console.log("running a collection...");
    }).on("done", function (err, summary) {
        if (err || summary.error) {
            console.error("collection run encountered an error.");
        }
        else {
            console.log("collection run completed.");
        }
    });
};