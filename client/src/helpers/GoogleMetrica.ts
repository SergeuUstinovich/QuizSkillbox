export function GoogleMetrica(
  eventName: string,
  courseName: string | null | undefined,
  directionName: string | null | undefined
) {
  window.dataLayer.push({
    event: eventName,
    event_params: {
      course_name: courseName,
      direction: directionName,
      page_url: "https://quiz.skillbox.by/",
    },
  });
}
