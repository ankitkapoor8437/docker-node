const  express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json({message: " Hello from Docker!!"})
})

const PORT = 9000;

app.listen(9000 || PORT , ()=>console.log(`Server is running on Port ${PORT}`))