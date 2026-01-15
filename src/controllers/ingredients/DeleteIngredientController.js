export const DeleteIngredientController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "DeleteIngredientController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
