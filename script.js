document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products-services')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'product-service';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="description">
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                    </div>
                `;
                content.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
