export const DeleteStandardAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "DeleteStandardAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
