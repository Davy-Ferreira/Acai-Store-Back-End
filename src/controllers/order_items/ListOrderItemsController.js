export const ListOrderItemsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListOrderItemsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
