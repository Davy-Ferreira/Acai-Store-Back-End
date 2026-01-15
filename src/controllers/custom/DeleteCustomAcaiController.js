export const DeleteCustomAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "DeleteCustomAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
