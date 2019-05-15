const fetch = require('node-fetch');

const order = { orderId: 1234567, orderValue: 123.99 };

function setPutCall() {
    setTimeout(() => {
        fetch('http://localhost/orders/',
            {
                method: 'put',
                body: JSON.stringify(order),
                headers: { 'Content-Type': 'application/json'}
        });
        
        setPutCall();
    }, Math.floor(Math.random()*2000));
}

function setGetCall() {
    setTimeout(() => {
        fetch('http://localhost/orders/1234567')
            .then(res => res.json())
            .then(json => console.log(json));
        
        setGetCall();
    }, Math.floor(Math.random()*2000));
}

setPutCall();
setGetCall();