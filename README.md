# Nailsxlexie

A warm, editorial nail studio website concept for Nailsxlexie in Bulawayo.

## Stack
- Next.js App Router
- React 19
- TypeScript
- Custom responsive CSS
- Lucide icons

## Features
- Responsive desktop and mobile layouts
- Brand wordmark SVG
- Hero video treatment with still-image fallback
- Services and enquiry shortcuts
- Portfolio gallery using Alex's supplied nail photos
- Click-to-expand gallery lightbox
- Appointment request form that prepares a WhatsApp message
- FAQ accordion
- Instagram and WhatsApp contact shortcuts

## Before launch
1. Add Alex's WhatsApp number to `WHATSAPP_NUMBER` in `app/page.tsx` (international format, digits only, e.g. `2637XXXXXXXX`).
2. Confirm the Instagram handle in `INSTAGRAM_URL`.
3. Confirm the exact service menu, prices, booking hours and appointment address.
4. Replace the sample Pexels stock video with Alex's own process video when available.

The booking form currently opens WhatsApp with a pre-filled appointment request; it does not store bookings or automatically confirm appointments.