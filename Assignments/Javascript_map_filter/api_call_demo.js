
// fetch("https://api.github.com/search/repositories?q=topic:ruby+topic:rails").then(response=>{console.log(response.json());}).catch("Failed to Fetch");

fetch('https://api.github.com/users/KrunalLathiya')
.then(response => response.json())
.then(data => {
  console.log(data.filter(d=>d.email)) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))