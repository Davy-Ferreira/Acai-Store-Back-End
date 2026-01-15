export const ListStandardAcaiReviewsController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "ListStandardAcaiReviewsController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
