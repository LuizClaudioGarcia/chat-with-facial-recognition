import Controller from "../controllers/text.js";

import { Router } from "express";

const routes = new Router();

routes.post("/firstRoute", Controller.firstRoute);

module.exports = routes;
