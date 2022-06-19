import { Router } from "express";
import { createOfferseController } from "./controllers/createOfferseController";

const offerseRouter: Router = Router();

offerseRouter
    .route('/api/offerses')
    .post(createOfferseController)
       
export default offerseRouter;