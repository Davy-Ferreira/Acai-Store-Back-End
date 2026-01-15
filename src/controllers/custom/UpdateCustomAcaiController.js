export const UpdateCustomAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateCustomAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
