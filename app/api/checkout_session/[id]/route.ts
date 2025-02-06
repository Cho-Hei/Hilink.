import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const session_id = params.id;
        // const session_id = await req.json();
        console.log(session_id + " is the ID");
        console.log(
            "Fetching checkout session............................................................."
        );
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
