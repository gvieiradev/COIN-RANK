const COINS = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '344a3adc84msh3e8d8a4dbcb3949p1128edjsn69239b543c44',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

const getCoins = async ()=>{
	try{
		const response = await fetch(COINS,options);
		
		if (response.status === 200){

			const data = await response.json();
			// COINS
			let btcCoins = data.data.coins[0].rank;
			let ethCoins = data.data.coins[1].rank;
			let usdtCoins = data.data.coins[2].rank;
			let usdcCoins = data.data.coins[3].rank;
			let bnbCoins = data.data.coins[4].rank;
			
			document.getElementById("btcCoins").innerHTML = btcCoins;
			document.getElementById("ethCoins").innerHTML = ethCoins;
			document.getElementById("usdtCoins").innerHTML = usdtCoins;
			document.getElementById("usdcCoins").innerHTML = usdcCoins;
			document.getElementById("bnbCoins").innerHTML = bnbCoins;

			document.getElementById("btc").innerHTML = data.data.coins[0].name;
			document.getElementById("eth").innerHTML = data.data.coins[1].name;
			document.getElementById("usdt").innerHTML = data.data.coins[2].name;
			document.getElementById("usdc").innerHTML = data.data.coins[3].name;
			document.getElementById("bnb").innerHTML = data.data.coins[4].name;

			document.getElementById("btcS").innerHTML = data.data.coins[0].symbol;
			document.getElementById("ethS").innerHTML = data.data.coins[1].symbol;
			document.getElementById("usdtS").innerHTML = data.data.coins[2].symbol;
			document.getElementById("usdcS").innerHTML = data.data.coins[3].symbol;
			document.getElementById("bnbS").innerHTML = data.data.coins[4].symbol;
			
			document.getElementById("btcM").innerHTML = data.data.coins[0].marketCap;
			document.getElementById("ethM").innerHTML = data.data.coins[1].marketCap;
			document.getElementById("usdtM").innerHTML = data.data.coins[2].marketCap;
			document.getElementById("usdcM").innerHTML = data.data.coins[3].marketCap;
			document.getElementById("bnbM").innerHTML = data.data.coins[4].marketCap;

			document.getElementById("btc24").innerHTML = data.data.coins[0].change;
			document.getElementById("eth24").innerHTML = data.data.coins[1].change;
			document.getElementById("usdt24").innerHTML = data.data.coins[2].change;
			document.getElementById("usdc24").innerHTML = data.data.coins[3].change;
			document.getElementById("bnb24").innerHTML = data.data.coins[4].change;
			
		}else if(response.satatus === 401){
			console.log('Key wrong')
		}
	}
	catch(error){
		console.log(error);
	}
}

getCoins();
