export const CreateCustomAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CreateCustomAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
