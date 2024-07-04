document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const from = urlParams.get('from');
    const to = urlParams.get('to');
    const departure = urlParams.get('departure');
    const returnDate = urlParams.get('return') || 'N/A';
    const ticketClass = urlParams.get('class');
    const tickets = parseInt(urlParams.get('tickets'));

    document.getElementById('confirm-from').textContent = from;
    document.getElementById('confirm-to').textContent = to;
    document.getElementById('confirm-departure').textContent = departure;
    document.getElementById('confirm-return').textContent = returnDate;
    document.getElementById('confirm-class').textContent = ticketClass;
    document.getElementById('confirm-tickets').textContent = tickets;

    const prices = {
        'sleeper': 150,
        'ac': 500,
        'first-class': 350,
        '2ac': 700,
        '3ac': 1000
    };

    const totalPrice = prices[ticketClass] * tickets;
    document.getElementById('confirm-price').textContent = totalPrice.toFixed(2);

    const noMealsBtn = document.getElementById('no-meals-btn');
    const noMealsMessage = document.getElementById('no-meals-message');

    noMealsBtn.addEventListener('click', function () {
        noMealsMessage.style.display = 'block';
    });
});
