export const AddOrderItemController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "AddOrderItemController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
