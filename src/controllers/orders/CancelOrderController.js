export const CancelOrderController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CancelOrderController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
