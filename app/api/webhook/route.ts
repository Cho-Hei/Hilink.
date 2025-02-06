import { NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("Stripe secret key is not defined");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req: Request, res: Response) {
    // const buf = await buffer(req);
    // const buf = await buffer(req.body);
    const body = await req.text();
    // const sig = req.headers["stripe-signature"]!;
    const sig = req.headers.get("stripe-signature");

    let event;

    try {
        if (!process.env.STRIPE_WEBHOOK_SECRET) {
            throw new Error("Stripe webhook key is not defined");
        }
        if (!sig) {
            throw new Error("Stripe signature is not defined");
        }
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        // const errorMessage = err instanceof Error ? err.message : "Unknown error";
        // res.status(400).send(`Webhook Error: ${errorMessage}`);
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    if (event.type === "payment_intent.succeeded") {
        const session = event.data.object;
        console.log(`💰  Payment received!`);
    } else {
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // res.status(200).send("Received");
    return NextResponse.json({ received: true }, { status: 200 });
}
