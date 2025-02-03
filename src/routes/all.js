import Controller from "../controllers/text.js";

import { Router } from "express";

const routes = new Router();

routes.post("/firstRoute2", Controller.firstRoute);

module.exports = routes;
