import { google } from "googleapis";

const calendar = google.calendar({
  version: "v3",
  auth: new google.auth.JWT(
    import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/calendar"]
  ),
});

export async function createGoogleMeet(email: string) {
  const event = {
    summary: "Videollamada con Manu",
    start: { dateTime: new Date().toISOString(), timeZone: "Europe/Madrid" },
    end: { dateTime: new Date(new Date().getTime() + 30 * 60 * 1000).toISOString(), timeZone: "Europe/Madrid" },
    attendees: [{ email }],
    conferenceData: { createRequest: { requestId: "meet-" + Date.now(), conferenceSolutionKey: { type: "hangoutsMeet" } } },
  };

  const res = await calendar.events.insert({
    calendarId: "primary",
    requestBody: event,
    conferenceDataVersion: 1,
  });

  return res.data.hangoutLink;
}
