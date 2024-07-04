document.addEventListener('DOMContentLoaded', function () {
    const oneWayBtn = document.getElementById('one-way-btn');
    const roundTripBtn = document.getElementById('round-trip-btn');
    const returnDateGroup = document.getElementById('return-date-group');

    oneWayBtn.addEventListener('click', function () {
        oneWayBtn.classList.add('active');
        roundTripBtn.classList.remove('active');
        returnDateGroup.style.display = 'none';
    });

    roundTripBtn.addEventListener('click', function () {
        roundTripBtn.classList.add('active');
        oneWayBtn.classList.remove('active');
        returnDateGroup.style.display = 'block';
    });
});
