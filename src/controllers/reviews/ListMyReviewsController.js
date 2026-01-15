export const ListMyReviewsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListMyReviewsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
