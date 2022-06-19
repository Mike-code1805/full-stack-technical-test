import express, { Application, NextFunction, Request, Response }  from "express";
import offerseRouter from "./offerse/OfferseRoutes";

const app: Application = express();

app.use(offerseRouter)

app.use(function(err:any, _req:Request, res:Response, next:NextFunction) {
    res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;