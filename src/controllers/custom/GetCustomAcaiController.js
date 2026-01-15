export const GetCustomAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetCustomAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
