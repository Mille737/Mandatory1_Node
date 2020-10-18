const express = require("express");
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});
app.get("/mainDocs", (req, res) => {
    return res.sendFile(__dirname + "/public/MainDocs/mainDocs.html");
});

app.listen(8080, (error) =>{
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port", 8080);
});
