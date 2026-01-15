export const RemoveOrderItemController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "RemoveOrderItemController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
