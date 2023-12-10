async function showData(query) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) throw new Error('Invalid input!');
    const json = await response.json();
    console.log(json)
  } catch(error) {
    console.log(error.message);
  }
}

queryAnswer = document.getElementById('query').value;
showData(queryAnswer);