import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();


app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { title, price } = req.body;

  console.log("Request body:", req.body);

  
  if (!title || price === undefined || isNaN(Number(price))) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: title },
            unit_amount: Math.round(Number(price) * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe session error:", err); 
    res.status(500).json({ error: err.message });
  }
});


app.listen(5000, () => console.log("Server running on port 5000"));
