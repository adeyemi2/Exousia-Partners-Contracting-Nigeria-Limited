const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const productsServices = [
    {
        title: 'Construction Project Management',
        description: 'Exousia Partners Contracting offers top-notch construction project management services. Our team ensures that your projects are completed on time, within budget, and to the highest standards of quality. We handle everything from initial planning to final execution, providing comprehensive solutions for all your construction needs.',
        image: 'https://res.cloudinary.com/demo/image/upload/v1616217615/sample.jpg'
    },
    {
        title: 'Earthmoving Operations',
        description: 'Our earthmoving operations are designed to move large quantities of earth and materials efficiently and safely. Exousia Partners Contracting utilizes state-of-the-art equipment and experienced operators to perform earthmoving tasks, ensuring minimal disruption and maximum productivity on your construction site.',
        image: 'https://res.cloudinary.com/demo/image/upload/v1616217615/sample.jpg'
    },
    {
        title: 'Geological Explorations and Drilling',
        description: 'We provide comprehensive geological exploration and drilling services. Our team of experts conducts thorough surveys and drills to gather essential geological data, aiding in the planning and execution of construction projects. Exousia Partners Contracting ensures precise and accurate results for all your geological needs.',
        image: 'https://res.cloudinary.com/demo/image/upload/v1616217615/sample.jpg'
    }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products-services', (req, res) => {
    res.json(productsServices);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
