import { getFestivalUrl } from "@/lib/config";
import type { Festival } from "@/lib/festivals";

export function generateGoogleCalendarUrl(festival: Festival): string {
  const learnUrl = getFestivalUrl(festival.id);
  const dateValue = festival.dateValue.replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `🎉 ${festival.name}`,
    dates: `${dateValue}/${dateValue}`,
    details: `${festival.description}\n\nLearn more: ${learnUrl}`,
    sf: "true",
    output: "xml",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateOutlookUrl(festival: Festival): string {
  const learnUrl = getFestivalUrl(festival.id);
  const dateValue = festival.dateValue.replace(/-/g, "");
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: `🎉 ${festival.name}`,
    startdt: dateValue,
    enddt: dateValue,
    body: `${festival.description}\n\nLearn more: ${learnUrl}`,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function generateICSFile(festival: Festival): string {
  const learnUrl = getFestivalUrl(festival.id);
  const dateStr = festival.dateValue.replace(/-/g, "");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NihaoHolidays//Festival//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    `SUMMARY:🎉 ${festival.name}`,
    `DESCRIPTION:${festival.description}\\n\\nLearn more: ${learnUrl}`,
    "BEGIN:VALARM",
    "TRIGGER:-P7D",
    "ACTION:DISPLAY",
    `DESCRIPTION:Reminder: ${festival.name} is in 7 days!`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadICS(festival: Festival): void {
  const icsContent = generateICSFile(festival);
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${festival.id}-festival.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
