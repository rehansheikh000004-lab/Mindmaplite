import mongoose from "mongoose";

const mindMapSchema = new mongoose.Schema({
  userId: String,
  title: String,
  nodes: [{ text: String }]
});

export default mongoose.models.MindMap || mongoose.model("MindMap", mindMapSchema);
