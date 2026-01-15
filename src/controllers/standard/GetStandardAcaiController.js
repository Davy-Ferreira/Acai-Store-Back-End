export const GetStandardAcaiController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetStandardAcaiController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
