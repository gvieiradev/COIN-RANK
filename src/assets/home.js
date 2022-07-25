const HOME = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&imePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=12&offset=0'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '344a3adc84msh3e8d8a4dbcb3949p1128edjsn69239b543c44',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const getHome = async ()=>{
	try{
		const response = await fetch(HOME,options);
		
		if (response.status === 200){
			// HOME
			const data = await response.json();
			
			let btc = data.data.coins[0].price;
			let eth = data.data.coins[1].price;
			let dot = data.data.coins[11].price;

			document.getElementById("btc").innerHTML = btc;
			document.getElementById("eth").innerHTML = eth;
			document.getElementById("dot").innerHTML = dot;
			
		}else if(response.satatus === 401){
			console.log('Key wrong')
		}
	}
	catch(error){
		console.log(error);
	}
}

getHome();
