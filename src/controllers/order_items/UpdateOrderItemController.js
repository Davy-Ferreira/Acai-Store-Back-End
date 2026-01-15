export const UpdateOrderItemController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "UpdateOrderItemController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
