export const UpdateStandardAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateStandardAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
