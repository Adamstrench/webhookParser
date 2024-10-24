import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
const customerWebhookURL = "https://hooks.slack.com/triggers/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";
const ibanWebhookURL = "https://hooks.slack.com/triggers/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";
const threeDSWebhookURL = "https://hooks.slack.com/triggers/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";
const rtfWebhookURL = "https://hooks.slack.com/triggers/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";
let tempRequest;

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/customer', function (req, res) {
    JSON.stringify(req.body, null, "\t"); // stringify with tabs inserted at each level
    JSON.stringify(req.body, null, 4);    // stringify with 4 spaces at each level
    let responseObject = {"text": JSON.stringify(req.body, null, "\t")};
    tempRequest = responseObject;
    console.log("POST Request received");
    fetch(customerWebhookURL, {
    method: "POST",
    body: JSON.stringify(tempRequest),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    res.status(200).send("Sending to Slack");

});

app.post('/iban', function (req, res) {
    JSON.stringify(req.body, null, "\t"); // stringify with tabs inserted at each level
    JSON.stringify(req.body, null, 4);    // stringify with 4 spaces at each level
    let responseObject = {"text": JSON.stringify(req.body, null, "\t")};
    tempRequest = responseObject;
    console.log("POST Request received");
    fetch(ibanWebhookURL, {
    method: "POST",
    body: JSON.stringify(tempRequest),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    res.status(200).send("Sending to Slack");

});

app.post('/3ds', function (req, res) {
    JSON.stringify(req.body, null, "\t"); // stringify with tabs inserted at each level
    JSON.stringify(req.body, null, 4);    // stringify with 4 spaces at each level
    let responseObject = {"text": JSON.stringify(req.body, null, "\t")};
    tempRequest = responseObject;
    console.log("POST Request received");
    fetch(threeDSWebhookURL, {
    method: "POST",
    body: JSON.stringify(tempRequest),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    res.status(200).send("Sending to Slack");

});

app.post('/rtf', function (req, res) {
    JSON.stringify(req.body, null, "\t"); // stringify with tabs inserted at each level
    JSON.stringify(req.body, null, 4);    // stringify with 4 spaces at each level
    let responseObject = {"text": JSON.stringify(req.body, null, "\t")};
    tempRequest = responseObject;
    console.log("POST Request received");
    fetch(rtfWebhookURL, {
    method: "POST",
    body: JSON.stringify(tempRequest),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    res.status(200).send("Sending to Slack");

});

app.get('/', function (req, res) {
    console.log("GET Request received");
    res.status(404).send("This endpoint only supports POST requests.");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

