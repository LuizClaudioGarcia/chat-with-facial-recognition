import Controller from "../controllers/text.js";
import { Router } from "express";

const routes = new Router();

// Define a rota
routes.post("/firstRoute", Controller.firstRoute);

// Exporta o Router
export default routes;
