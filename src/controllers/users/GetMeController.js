export const GetMeController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetMeController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
