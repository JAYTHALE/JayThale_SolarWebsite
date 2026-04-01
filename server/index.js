
// const express = require("express")
// const mongoose = require("mongoose")
// const cookieParser = require("cookie-parser")
// const cors = require("cors")
// const path = require("path")
// require("dotenv").config({ path: "./.env" })

// const app = express()

// app.use(cookieParser())
// app.use(express.json())

// app.use(cors({
//     origin: true,
//     credentials: true
// }))

// app.use('/api/v1/auth', require('./routes/auth.routes'))
// app.use('/api/v1/admin', require('./routes/contact.routes'))

// app.use("*", (req, res) => {
//     res.status(404).json({ message: "Resource Not Found" })
// })

// app.use((err, req, res, next) => {
//     console.log(err)
//     res.status(500).json({ message: "SERVER ERROR", error: err.message })
// })


// mongoose.connect(process.env.MONGO_URL)
// mongoose.connection.once("open", () => {
//     console.log("MONGO CONNECTED🔗")
//     app.listen(process.env.PORT, console.log("SERVER RUNNING 🏃‍♂️"))
// })




const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config({ path: "./.env" });

const app = express();


app.use(helmet());

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 50,
    message: { message: "Too many requests, please try again later." },
});
app.use(limiter);

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/admin", require("./routes/contact.routes"));
app.use("/api/v1", require("./routes/upload.routes"));

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" });
});

app.use((err, req, res, next) => {
    console.error("🔥 SERVER ERROR:", err);
    res.status(500).json({
        message: "SERVER ERROR",
        error: err.message,
    });
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("✅ MONGO CONNECTED");
        app.listen(process.env.PORT, () => {
            console.log(`🚀 SERVER RUNNING ON PORT ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MONGO CONNECTION FAILED:", err.message);
    });

