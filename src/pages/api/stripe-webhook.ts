import { defineEndpoint } from "astro:api";
import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });

export const POST = defineEndpoint(async ({ request }) => {
  const sig = request.headers.get("stripe-signature");
  const rawBody = await request.text(); // Necesario para validar firma

  try {
    const event = stripe.webhooks.constructEvent(rawBody, sig, import.meta.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_details.email;
      
      // Llamar a la API de Google Calendar
      const meetingLink = await createGoogleMeet(customerEmail);
      
      return new Response(JSON.stringify({ success: true, meetingLink }), { status: 200 });
    }
  } catch (error) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }
});
