export const CreateReviewController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "CreateReviewController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
