export const ListStandardAcaisController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListStandardAcaisController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
