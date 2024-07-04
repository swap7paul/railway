document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const lunchBox = parseInt(urlParams.get('lunch-box')) || 0;
    const dosa = parseInt(urlParams.get('dosa')) || 0;
    const idli = parseInt(urlParams.get('idli')) || 0;
    const waterBottle = parseInt(urlParams.get('water-bottle')) || 0;

    const foodSummary = document.getElementById('food-summary');
    const mealPrices = {
        'lunch-box': 250,
        'dosa': 50,
        'idli': 40,
        'water-bottle': 10
    };

    let totalMealPrice = 0;

    const addFoodItem = (name, quantity, price, image) => {
        if (quantity > 0) {
            totalMealPrice += quantity * price;

            const foodItem = document.createElement('div');
            foodItem.classList.add('food-item');

            const foodImg = document.createElement('img');
            foodImg.src = image;
            foodImg.alt = name;
            foodItem.appendChild(foodImg);

            const foodDetails = document.createElement('div');
            foodDetails.classList.add('details');

            const foodName = document.createElement('h3');
            foodName.textContent = name;
            foodDetails.appendChild(foodName);

            const foodQuantity = document.createElement('p');
            foodQuantity.textContent = `Quantity: ${quantity}`;
            foodDetails.appendChild(foodQuantity);

            foodItem.appendChild(foodDetails);
            foodSummary.appendChild(foodItem);
        }
    };

    addFoodItem('Lunch Box', lunchBox, mealPrices['lunch-box'], 'img/lunch_box.jpg');
    addFoodItem('Dosa', dosa, mealPrices['dosa'], 'img/dosa.webp');
    addFoodItem('Idli', idli, mealPrices['idli'], 'img/idli.jpeg');
    addFoodItem('Water Bottle', waterBottle, mealPrices['water-bottle'], 'img/water_bottle.webp');

    document.getElementById('confirm-meal-price').textContent = totalMealPrice.toFixed(2);

    const ticketTotalPrice = parseFloat(urlParams.get('totalPrice'));
    const totalPriceIncludingMeals = ticketTotalPrice + totalMealPrice;
    document.getElementById('confirm-total-price').textContent = totalPriceIncludingMeals.toFixed(2);
});
