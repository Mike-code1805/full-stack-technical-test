import { Router } from "express";
import { createOfferseController } from "./controllers/createOfferseController";
import { deleteOfferseByIdController } from "./controllers/deleteOfferseByIdController";
import { getAllOffersesController } from "./controllers/getAllOffersesController";
import { updateOfferseController } from "./controllers/updateOfferseController";

const offerseRouter: Router = Router();

offerseRouter
    .route('/api/offerses')
    .post(createOfferseController)
    .get(getAllOffersesController)
offerseRouter
    .route('/api/offerses/:id')
    .delete(deleteOfferseByIdController)
    .put(updateOfferseController)
export default offerseRouter;