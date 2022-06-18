import mongoose from "mongoose";
import { Offerse } from "../types/Offerse";


const Schema = mongoose.Schema;

export const offerseSchemma = new Schema<Offerse>({
    name: { 
        type: String, 
        required: true, 
    },
    characteristics: [{
        type: String,
    }],
    created_at: { 
        type: Date,
        default: Date.now,
    },
    updated_at: { 
        type: Date,
        default: Date.now,
    }
});
