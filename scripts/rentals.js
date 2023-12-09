    // Fetch JSON data and create table
    fetch('data/rental_prices.json')
      .then(response => response.json())
      .then(data => {
        const rentalData = data['Max Rental Pricing'];
        const tableBody = document.querySelector('#rentalTable tbody');

        rentalData.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item['Rental Type']}</td>
            <td>${item['Max. Persons']}</td>
            <td>${item['Reservation Half Day (3 hrs)']}</td>
            <td>${item['Reservation Full Day']}</td>
            <td>${item['Walk-In Half Day (3 hrs)']}</td>
            <td>${item['Walk-In Full Day']}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));