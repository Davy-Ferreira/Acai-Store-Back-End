export const SetStandardAcaiIngredientsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "SetStandardAcaiIngredientsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
