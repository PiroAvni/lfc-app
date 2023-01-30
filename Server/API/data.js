//import fetch from 'node-fetch';
const fetch = require('node-fetch');

const url = 'https://api-football-v1.p.rapidapi.com/v3/teams?name=liverpool';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e67f45540dmsh7e5fd2507dadc3cp19a187jsnbdfc75526260',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));


    export default fetch;