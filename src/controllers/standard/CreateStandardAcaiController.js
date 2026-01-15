export const CreateStandardAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CreateStandardAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
