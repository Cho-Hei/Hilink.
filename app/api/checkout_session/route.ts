import { NextResponse, type NextRequest } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    const item = await req.json();

    const lineItems = [];

    lineItems.push({
        price_data: {
            currency: "usd",
            product_data: {
                name: item.name,
            },
            unit_amount: item.price * 100,
        },
        quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
        line_items: [...lineItems],
        mode: "payment",
        success_url: `${process.env.NEXT_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_BASE_URL}/cancel`,
    });

    return NextResponse.json(session);
    // return res.status(200).json({ session });
}
