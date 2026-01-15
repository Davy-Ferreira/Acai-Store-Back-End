export const UpdateIngredientController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateIngredientController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
