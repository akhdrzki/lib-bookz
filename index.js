import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";

import cors from "cors"

const app = express();

app.use(
  cors()
)
app.use(cookieParser());
app.use(session({
  secret: 'halogays'
}))
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
import kolPribadiRoute from "./routes/koleksiPribadiRoute.js";
import ulasanBukuRoute from "./routes/ulasanBukuRoute.js";
import katBukuRelasiRoute from "./routes/kategoriBukuRelasiRoute.js";

app.use(bukuRoute, userRoute, katBukuRoute, peminjamanRoute, kolPribadiRoute, ulasanBukuRoute, katBukuRelasiRoute)


const PORT = "8001"
app.listen(PORT, () => console.log("server running on", PORT) )


