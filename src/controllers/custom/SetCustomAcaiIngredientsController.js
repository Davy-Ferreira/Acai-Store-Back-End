export const SetCustomAcaiIngredientsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "SetCustomAcaiIngredientsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
