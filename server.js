import "dotenv/config";

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    return res.send("Hi Everyone...");
});

app.listen(PORT, () => console.log('server in running on PORT ${PORT}'));