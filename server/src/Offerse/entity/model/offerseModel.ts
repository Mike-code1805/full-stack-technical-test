import mongoose from "mongoose";
import { offerseSchemma } from "../schema/offerseSchema";
import { Offerse } from "../types/Offerse";


export const offerseModel = mongoose.model<Offerse>('Offerse', offerseSchemma);