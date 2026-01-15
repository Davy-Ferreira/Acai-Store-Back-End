export const GetOrderController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetOrderController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
