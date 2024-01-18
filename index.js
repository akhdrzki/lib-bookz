import express from "express";
import bodyParser from "body-parser";
import session from "express-session";



const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('hello world')
})

// routes 
import userRoute from "./routes/usersRoute.js";
import bukuRoute from "./routes/bukuRoute.js";
import katBukuRoute from "./routes/kategoriBukuRoute.js";
import peminjamanRoute from "./routes/peminjamanRoute.js";

app.use(bukuRoute, userRoute, katBukuRoute, peminjamanRoute )


const PORT = "8000"
app.listen(PORT, () => console.log("server running on", PORT) )
