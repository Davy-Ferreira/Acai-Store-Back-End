export const UpdateMeController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateMeController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
