export const GetStandardAcaiIngredientsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetStandardAcaiIngredientsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
