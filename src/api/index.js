import config from './config.js'
const apiKey = config.apiKey // == const { apiKey } = config 
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=venezuela&api_key=ca37cbcdd9463bd48e8a8dd7457cc078&format=json`

export default function getArtists(country){
	const url = URL.replace(':country', country )
	return fetch(url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}