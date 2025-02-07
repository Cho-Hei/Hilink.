import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("Stripe secret key is not defined");
        }
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const session_id = params.id;
        // console.log(session_id + " is the ID");
        if (!session_id.startsWith("cs_")) {
            throw Error("Incorrect CheckoutSession ID.");
        }
        const checkout_session = await stripe.checkout.sessions.retrieve(session_id);
        console.log(checkout_session);
        // res.status(200).json(checkout_session);

        return NextResponse.json({ session: checkout_session }, { status: 200 });
    } catch (error) {
        // res.status(500).json({ statusCode: 500, message: err.message });
        console.error(error);
        return NextResponse.json({ session: undefined }, { status: 500 });
    }
}
