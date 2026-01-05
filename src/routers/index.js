import express from "express";

const router = express.Router();

import {RegisterUserController} from "../controllers/RegisterUserController.js";

// ==================== ROTAS DE USUÁRIO ====================
router.post("/auth/register" , RegisterUserController);

export default router;