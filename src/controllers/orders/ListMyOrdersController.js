export const ListMyOrdersController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListMyOrdersController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
