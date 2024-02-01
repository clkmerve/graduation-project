const express = require("express");
const router = express.Router();
const stripe = require('stripe')(`sk_test_51OYU9xKpiKwShdhdulrwNNVnge1qh51BcLALaI7ZZ4X9xT5plzosZcYh5tgjybWOQkHUUOutX2po9bd4FDREc6EU00Efo6KD04`);
router.post("/", async (req, res) => {
    const { products, user, cargoFee } = req.body;
    const lineItems = products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      }));
      if (cargoFee !== 0) {
        lineItems.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: "Hızlı Kargo",
            },
            unit_amount: cargoFee * 100,
          },
          quantity: 1,
        });
      }
      try {
        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:3000/succes`,
        });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe Session Creation Error:", error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;