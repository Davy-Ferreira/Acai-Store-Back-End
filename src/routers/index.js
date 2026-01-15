import express from "express";

const router = express.Router();

import {RouterController} from "../controllers/index.js";

// ==================== ROTAS DE USUÁRIO ====================
router.post("/auth/register" , RouterController.RegisterUserController);

export default router;