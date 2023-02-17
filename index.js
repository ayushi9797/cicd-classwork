const app = require("express")()

app.get("/",(req,res)=>[
    res.send("hello")
])
app.listen(8080,()=>{
    console.log('app is live on 8080');
})