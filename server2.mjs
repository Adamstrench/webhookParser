import express from 'express';
const app = express();
const PORT = 3000;
const webhookURL = "https://hooks.slack.com/triggers/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"
let tempRequest;

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    JSON.stringify(req.body, null, "\t"); // stringify with tabs inserted at each level
    JSON.stringify(req.body, null, 4);    // stringify with 4 spaces at each level
    let responseObject = {"text": JSON.stringify(req.body, null, "\t")};
    tempRequest = responseObject;
    console.log(responseObject);
    fetch(webhookURL, {
    method: "POST",
    body: JSON.stringify(tempRequest),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
  }
})
    res.send(200, responseObject);

});

app.get('/', function (req, res) {
    console.log(req.body);
    res.send(200);
});



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

