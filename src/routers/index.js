import express from "express";
const router = express.Router();

import { RouterController } from "../controllers/index.js";

// ==================== AUTH / USERS ====================
router.post("/auth/register", RouterController.RegisterUserController);
router.post("/auth/login", RouterController.LoginUserController);
router.post("/auth/google", RouterController.GoogleAuthController);

router.get("/users/me", RouterController.GetMeController);
router.put("/users/me", RouterController.UpdateMeController);

// ==================== INGREDIENTS ======================
router.post("/ingredients", RouterController.CreateIngredientController);
router.get("/ingredients", RouterController.ListIngredientsController);
router.get("/ingredients/:id", RouterController.GetIngredientController);
router.put("/ingredients/:id", RouterController.UpdateIngredientController);
router.delete("/ingredients/:id", RouterController.DeleteIngredientController);

// ==================== STANDARD AÇAÍS ===================
router.post("/standard-acais", RouterController.CreateStandardAcaiController);
router.get("/standard-acais", RouterController.ListStandardAcaisController);
router.get("/standard-acais/:id", RouterController.GetStandardAcaiController);
router.put("/standard-acais/:id", RouterController.UpdateStandardAcaiController);
router.delete("/standard-acais/:id", RouterController.DeleteStandardAcaiController);

router.get("/standard-acais/:id/ingredients", RouterController.GetStandardAcaiIngredientsController);
router.put("/standard-acais/:id/ingredients", RouterController.SetStandardAcaiIngredientsController);

// ==================== CUSTOM AÇAÍ ======================
router.post("/custom-acais", RouterController.CreateCustomAcaiController);
router.get("/custom-acais", RouterController.ListMyCustomAcaisController);
router.get("/custom-acais/:id", RouterController.GetCustomAcaiController);
router.put("/custom-acais/:id", RouterController.UpdateCustomAcaiController);
router.delete("/custom-acais/:id", RouterController.DeleteCustomAcaiController);

router.get("/custom-acais/:id/ingredients", RouterController.GetCustomAcaiIngredientsController);
router.put("/custom-acais/:id/ingredients", RouterController.SetCustomAcaiIngredientsController);

// ==================== ORDERS ===========================
router.post("/orders", RouterController.CreateOrderController);
router.get("/orders", RouterController.ListMyOrdersController);
router.get("/orders/:id", RouterController.GetOrderController);

router.patch("/orders/:id/status", RouterController.UpdateOrderStatusController);
router.post("/orders/:id/cancel", RouterController.CancelOrderController);

// ==================== ORDER ITEMS ======================
router.get("/orders/:orderId/items", RouterController.ListOrderItemsController);
router.post("/orders/:orderId/items", RouterController.AddOrderItemController);
router.put("/orders/:orderId/items/:itemId", RouterController.UpdateOrderItemController);
router.delete("/orders/:orderId/items/:itemId", RouterController.RemoveOrderItemController);

// ==================== REVIEWS ==========================
router.post("/orders/:orderId/review", RouterController.CreateReviewController);
router.get("/orders/:orderId/review", RouterController.GetOrderReviewController);

router.get("/reviews/me", RouterController.ListMyReviewsController);
router.get("/standard-acais/:id/reviews", RouterController.ListStandardAcaiReviewsController);

export default router;