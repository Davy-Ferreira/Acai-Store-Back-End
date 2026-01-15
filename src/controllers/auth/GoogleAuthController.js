export const GoogleAuthController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GoogleAuthController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
