import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

// Allow frontend (5173) to access backend (5000)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  //credentials: true, // if you send cookies or auth headers (you can remove if no login)
}));

app.use(express.json());

// Routes
app.use("/api/v1/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

