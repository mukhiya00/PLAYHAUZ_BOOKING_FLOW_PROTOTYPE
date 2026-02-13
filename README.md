# playhauz



## Booking Flow (Prototype)
This build includes a multi-step booking flow:
- booking.html (Zone -> Room -> Add-ons -> Details -> Confirm)
- receipt.html (Token receipt + download + mailto email button)

### Important
This is a front-end prototype (works on GitHub Pages).
Real payment & automatic email require integration:
- EmailJS (client-side), or
- Formspree (forms), or
- A backend server (Node/Python) + SMTP/SendGrid, and
- Payment gateway (Stripe/Razorpay).
