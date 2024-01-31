document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const orderForm = document.getElementById('orderForm');
    const orderList = document.getElementById('orderList');

    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email }),
            });

            const newUser = await response.json();
            displayUser(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    });

    orderForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const userId = document.getElementById('userId').value;

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product, quantity, userId }),
            });

            const newOrder = await response.json();
            displayOrder(newOrder);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    });

    const fetchAndDisplayUsers = async () => {
        try {
            const response = await fetch('/api/users');
            const users = await response.json();
            users.forEach(displayUser);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchAndDisplayOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const orders = await response.json();
            orders.forEach(displayOrder);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const displayUser = (user) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(listItem);
    };

    const displayOrder = (order) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product: ${order.product}, Quantity: ${order.quantity}, User ID: ${order.userId}`;
        orderList.appendChild(listItem);
    };

    fetchAndDisplayUsers();
    fetchAndDisplayOrders();
});
