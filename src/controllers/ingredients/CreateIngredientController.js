export const CreateIngredientController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CreateIngredientController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
