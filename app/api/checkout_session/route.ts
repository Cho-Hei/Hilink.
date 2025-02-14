import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("Stripe secret key is not defined");
        }
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: e }, { status: 500 });
    }

    // return res.status(200).json({ session });
}
