export const GetCustomAcaiIngredientsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetCustomAcaiIngredientsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
