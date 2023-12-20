console.log('shreyas hellow');

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`

    document.body.appendChild(newPara);
}


async function fetchWeatherDetails(){
    try{
        let city = 'goa';

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lq=${city}&appid={d1845658f92b31c64bd94f06f7188c9c}`);
        const data = await response.json;    
        renderWeatherInfo(data);
    }
    catch(err){
        // handle the error here
        console.log('Error found in catch');
    }
    
}  

async function getCustomWeatherDetails(){
    try{
    let lattitude = 15.234;
    let longitude = 12.3123;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lq=${lattitude}${longitude}&appid={d1845658f92b31c64bd94f06f7188c9c}`);
    let data = await result.json;

    console.log(data);
    }
    catch(err){
        console.log('Error found',err);
    }
    
}



function renderBTC(data){
    let container = document.createElement('div');
    container.classList.add('container');
    container.style.width = '400px';
    container.style.height = '300px';
    container.style.margin = '0 auto';

    document.body.append(container);

    let btcHeading = document.createElement('h1');
    btcHeading.textContent = data.chartName;
    btcHeading.style.textAlign ='center';

    let currency = document.createElement('h2');
    currency.textContent = `Below Price is in ${data.bpi.USD.code}`;
    currency.style.textAlign='center';

    let priceBTC = document.createElement('p');
    priceBTC.textContent = `$ ${data.bpi.USD.rate}`;
    priceBTC.style.color = 'yellowgreen';
    priceBTC.style.fontStyle = 'bold';
    priceBTC.style.border = '1px solid blue';
    priceBTC.style.textAlign = 'center';
    priceBTC.style.padding = '10px 0';


    let timeBTC = document.createElement('p');
    timeBTC.textContent = `Updated at ${data.time.updated}`;
    timeBTC.style.width = '100%';


    container.appendChild(btcHeading);
    container.appendChild(currency);
    container.appendChild(priceBTC);
    container.appendChild(timeBTC);
    
}

async function BTC(){
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json();

    let name = data.chartName;
    let code = data.bpi.USD.code;
    let price = data.bpi.USD.rate;
    let time = data.time.updated;
    console.log(data,name,code,price,time);
    renderBTC(data); 
}



