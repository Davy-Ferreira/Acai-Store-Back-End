export const UpdateOrderStatusController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateOrderStatusController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
