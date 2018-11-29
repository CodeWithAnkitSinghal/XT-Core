'use strict'

//You have list of URL's, i want to make the http call for all urls nad you need to collect the user information
//in one 

var listURl = [
    'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random',
	'https://dog.ceo/api/breed/african/images/random'
]


const grabContent = url => fetch(url)
     .then(response => {
    
        return response.json()
})

Promise.all(listURl.map(grabContent))
    .then((res) => console.log(`${res.forEach((item) => {
console.log(item.message)
})}`)) 