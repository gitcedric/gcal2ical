function convertAndDownload(event) {
    event.preventDefault();
    const embedUrl = document.getElementById("calendarUrl").value;
    const match = embedUrl.match(/src=([^&]+)/);

    if (!match) {
        document.getElementById("result").innerText = "Invalid Google Calendar embed URL.";
        return;
    }

    const calendarId = match[1];
    const icsUrl = `https://calendar.google.com/calendar/ical/${calendarId}/public/basic.ics`;
    
    window.open(icsUrl, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,width=800,height=600");
}
