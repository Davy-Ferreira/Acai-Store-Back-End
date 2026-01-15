export const GetOrderReviewController = (req, res) => {
  return res.status(200).json({
    ok: true,
    controller: "GetOrderReviewController",
    route: req.originalUrl,
    message: "Tudo certo ✅"
  });
};
