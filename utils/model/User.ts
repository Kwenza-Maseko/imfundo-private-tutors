import { Schema, Document, model, models } from "mongoose";

// Define the user interface
interface IUser extends Document {
    firstname: string;
    lastname: string;
    email: string;
    createAt: Date;
}

// Define the schema
const UserSchema = new Schema<IUser>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

// Export the model (prevents re-registering)
const User = models.User || model<IUser>("User", UserSchema);

export default User;