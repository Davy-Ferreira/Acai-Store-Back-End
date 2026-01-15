export const GetIngredientController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetIngredientController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
