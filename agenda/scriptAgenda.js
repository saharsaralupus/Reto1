document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendarios');
  var calendarios = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Evento 1',
        start: '2024-07-10',
        end: '2024-07-11'
      },
      {
        title: 'Evento 2',
        start: '2024-07-12',
        end: '2024-07-15'
      },
      {
        title: 'Evento 3',
        start: '2024-07-16T10:00:00',
        end: '2024-07-17T12:00:00'
      },
      {
        title: 'Evento 4',
        start: '2024-07-19T10:00:00',
        end: '2024-07-24T12:00:00'
      }
    ]
  });
  calendarios.render();
});