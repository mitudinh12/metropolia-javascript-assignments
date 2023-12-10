const request = document.getElementById('query').value;
if (request !== '') {
  displayData(request);
} else {
  console.log('Enter a valid query.');
}

async function displayData(query) {
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const json = await response.json();
    if (json.result.length === 0) {
      console.log('No jokes found.');
    } else {
      document.getElementById('target').innerHTML = json.result.map(joke =>
          `<p>${joke.value}</p>`).join('');
    }
  } catch (error) {
    console.log(error.message);
  }

}



