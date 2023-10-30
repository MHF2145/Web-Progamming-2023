const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '5960b83cd2mshd7e9a1d33402aaep16e919jsnffb3f9e7a4b9',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  body: new URLSearchParams({
    source_language: 'en',
    target_language: 'id',
    text: 'What is your name?'
  })
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}