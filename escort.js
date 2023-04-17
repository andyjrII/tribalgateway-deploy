//Fuction to calculate the cost of the services on the escort service section
const services = document.querySelectorAll('[name="service"]');
        const cart = document.getElementById('cart');
        const total = document.getElementById('total');
        const successMessage = document.getElementById('success-message');
        let subtotal = 0;
        let tax = 0;
        let discount = 0;
      
        services.forEach(service => {
          service.addEventListener('change', updateCart);
        });
      
        function updateCart() {
          cart.innerHTML = '';
          subtotal = 0;
          tax = 0;
          services.forEach(service => {
            if (service.checked) {
              const name = service.value;
              const price = parseInt(service.dataset.price);
              const li = document.createElement('li');
              li.textContent = `${name} - $${price}`;
              cart.appendChild(li);
              subtotal += price;
            }
          });
          tax = subtotal * 0.1;
          total.textContent = `Total: $${subtotal + tax - discount}`;
        }
      
        function applyDiscount() {
          const discountCode = document.getElementById('discount').value;
          if (discountCode === 'SAVE10') {
            discount = subtotal * 0.1;
            total.textContent = `Total: $${subtotal + tax - discount}`;
            successMessage.style.display = 'block';
          } else {
            alert('Invalid discount code');
          }
        }
      
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
          if (subtotal === 0) {
            event.preventDefault();
            alert('Please select at least one service');
          } else {
            const discountCode = document.getElementById('discount').value;
            if (discountCode !== '') {
              if (discountCode !== 'SAVE10') {
                event.preventDefault();
                alert('Invalid discount code');
              }
            }
          }
        });