// AUTO-GERADO por padronizar_pastas_controllers.py
// Pastas padronizadas (minúsculas): auth, users, items, standard, custom, orders, order_items, reviews

// auth
import { GoogleAuthController } from "./auth/GoogleAuthController.js";
import { LoginUserController } from "./auth/LoginUserController.js";
import { RegisterUserController } from "./auth/RegisterUserController.js";

// users
import { GetMeController } from "./users/GetMeController.js";
import { UpdateMeController } from "./users/UpdateMeController.js";

// items
import { CreateIngredientController } from "./ingredients/CreateIngredientController.js";
import { DeleteIngredientController } from "./ingredients/DeleteIngredientController.js";
import { GetIngredientController } from "./ingredients/GetIngredientController.js";
import { ListIngredientsController } from "./ingredients/ListIngredientsController.js";
import { UpdateIngredientController } from "./ingredients/UpdateIngredientController.js";

// standard
import { CreateStandardAcaiController } from "./standard/CreateStandardAcaiController.js";
import { DeleteStandardAcaiController } from "./standard/DeleteStandardAcaiController.js";
import { GetStandardAcaiController } from "./standard/GetStandardAcaiController.js";
import { GetStandardAcaiIngredientsController } from "./standard/GetStandardAcaiIngredientsController.js";
import { ListStandardAcaisController } from "./standard/ListStandardAcaisController.js";
import { SetStandardAcaiIngredientsController } from "./standard/SetStandardAcaiIngredientsController.js";
import { UpdateStandardAcaiController } from "./standard/UpdateStandardAcaiController.js";

// custom
import { CreateCustomAcaiController } from "./custom/CreateCustomAcaiController.js";
import { DeleteCustomAcaiController } from "./custom/DeleteCustomAcaiController.js";
import { GetCustomAcaiController } from "./custom/GetCustomAcaiController.js";
import { GetCustomAcaiIngredientsController } from "./custom/GetCustomAcaiIngredientsController.js";
import { ListMyCustomAcaisController } from "./custom/ListMyCustomAcaisController.js";
import { SetCustomAcaiIngredientsController } from "./custom/SetCustomAcaiIngredientsController.js";
import { UpdateCustomAcaiController } from "./custom/UpdateCustomAcaiController.js";

// orders
import { CancelOrderController } from "./orders/CancelOrderController.js";
import { CreateOrderController } from "./orders/CreateOrderController.js";
import { GetOrderController } from "./orders/GetOrderController.js";
import { ListMyOrdersController } from "./orders/ListMyOrdersController.js";
import { UpdateOrderStatusController } from "./orders/UpdateOrderStatusController.js";

// order_items
import { AddOrderItemController } from "./order_items/AddOrderItemController.js";
import { ListOrderItemsController } from "./order_items/ListOrderItemsController.js";
import { RemoveOrderItemController } from "./order_items/RemoveOrderItemController.js";
import { UpdateOrderItemController } from "./order_items/UpdateOrderItemController.js";

// reviews
import { CreateReviewController } from "./reviews/CreateReviewController.js";
import { GetOrderReviewController } from "./reviews/GetOrderReviewController.js";
import { ListMyReviewsController } from "./reviews/ListMyReviewsController.js";
import { ListStandardAcaiReviewsController } from "./reviews/ListStandardAcaiReviewsController.js";

export const RouterController = {
  GoogleAuthController,
  LoginUserController,
  RegisterUserController,
  GetMeController,
  UpdateMeController,
  CreateIngredientController,
  DeleteIngredientController,
  GetIngredientController,
  ListIngredientsController,
  UpdateIngredientController,
  CreateStandardAcaiController,
  DeleteStandardAcaiController,
  GetStandardAcaiController,
  GetStandardAcaiIngredientsController,
  ListStandardAcaisController,
  SetStandardAcaiIngredientsController,
  UpdateStandardAcaiController,
  CreateCustomAcaiController,
  DeleteCustomAcaiController,
  GetCustomAcaiController,
  GetCustomAcaiIngredientsController,
  ListMyCustomAcaisController,
  SetCustomAcaiIngredientsController,
  UpdateCustomAcaiController,
  CancelOrderController,
  CreateOrderController,
  GetOrderController,
  ListMyOrdersController,
  UpdateOrderStatusController,
  AddOrderItemController,
  ListOrderItemsController,
  RemoveOrderItemController,
  UpdateOrderItemController,
  CreateReviewController,
  GetOrderReviewController,
  ListMyReviewsController,
  ListStandardAcaiReviewsController,
};
