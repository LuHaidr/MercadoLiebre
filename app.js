const express = require("express");
const app = express();
const path = require("path"); //unificar rutas de los distintos sistemas operativos


const publicPath = path.resolve (__dirname, "./public")
app.use (express.static(publicPath));

// or app.use(express.static(path.resolve(__dirname, 'public'))

app.get ("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});