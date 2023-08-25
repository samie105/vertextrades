import mongoose from "mongoose";
const mongoURI = process.env.CONNECTION_STRING;

// Establish the connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log when successfully connected
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Log any errors during connection
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB:", err);
});

// Define Mongoose schema for your form data
const userSchema = new mongoose.Schema({
  name: String,
  country: String,
  dob: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  depositHistory: [Number],
  withdrawalHistory: [Number],
  withdrawalPin: { type: String, unique: true },
  taxCodePin: { type: String, unique: true },
  autoTrades: Boolean,
  isVerified: Boolean,
  verificationCode: String,
  codeExpiry: Date,
  emailVerified: { type: Boolean, default: false },
  // ... Add more fields as needed
});

// Check if the model already exists before defining it
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
