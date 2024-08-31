jQuery(document).ready(function($) {
    $.get('/wp-json/tribe/events/v1/events', function(data) {
        var eventsHtml = '';
        data.events.forEach(function(event) {
            eventsHtml += '<div class="event">';
            eventsHtml += '<p><a class="event-date">' + formatDate(event.start_date);

            var startDate = event.start_date.split(' ')[0];
            var endDate = event.end_date.split(' ')[0];

            if (endDate && endDate !== startDate) {
                eventsHtml += ' - ' + formatDate(event.end_date);
            }
	    
            eventsHtml += '</a> <a class="event-title">' + event.title + '</a>'
            eventsHtml += '</p>';
            eventsHtml += '</div>';
        });
        $('.events-container').html(eventsHtml);
    });

    // Format date as "DD. MMM"
    function formatDate(dateStr) {
        var date = new Date(dateStr);
        var day = String(date.getDate()).padStart(2, '0'); 
        var month = date.toLocaleString('en-US', { month: 'short' }); 
        return `${day}. ${month}`;
    }
});
