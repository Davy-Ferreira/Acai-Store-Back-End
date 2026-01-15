export const CreateOrderController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CreateOrderController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
