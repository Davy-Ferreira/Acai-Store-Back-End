export const LoginUserController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "LoginUserController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
