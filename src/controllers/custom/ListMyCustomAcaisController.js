export const ListMyCustomAcaisController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListMyCustomAcaisController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
