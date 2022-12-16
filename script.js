var marvelApiUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=ecee2df8000d06348ed5ffb65b5f2d9f'
var userFormEl = document.querySelector('#user-form');
var characterInputEl = document.querySelector('#character');
var marvelContainerEl = document.querySelector('#character-container')
var characterSearchTerm = document.querySelector('#character-search-term')

var formSubmitHandler = function (event) {
    event.preventDefault();

    var character = characterInputEl.value.trim();

    if (character) {
        getCharacter(character);

        marvelContainerEl.textContent = '';
        characterInputEl.value = '';
    } else {
        alert('Please enter a Marvel Character name');
    }
};

var getCharacter = function (character) {
    var marvelApiUrl = 'https://gateway.marvel.com:443/v1/public/characters?name='+ character + '&apikey=ecee2df8000d06348ed5ffb65b5f2d9f';
    
    fetch(marvelApiUrl)
        .then(function (response) {
            if(response.ok) {
                response.json().then(function (data) {
                   displayCharacters(data.items, character); 
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
};

var displayCharacters = function (character, searchTerm) {
    if (character.length === 0) {
        marvelContainerEl.textContent = 'No Characters found.';
        return;
    }
    characterSearchTerm.textContent = searchTerm;

    // The for loop will be needed to display multiple gifs array and character selection array
    for (var i = 0; i < character.length; i++) {
        var characterName = character[i].owner.login + '/' + repos[i].name;
    
        var repoEl = document.createElement('div');
        repoEl.classList = 'list-item flex-row justify-space-between align-center';
    
        var titleEl = document.createElement('span');
        titleEl.textContent = repoName;
    
        repoEl.appendChild(titleEl);
    
        var statusEl = document.createElement('span');
        statusEl.classList = 'flex-row align-center';
    
        if (repos[i].open_issues_count > 0) {
          statusEl.innerHTML =
            "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
        } else {
          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
    
}};


// Use the function below for TV, Movies, Comics, ect
var getFeaturedCharacters = function (character) {
    var apiUrl = 'https://gateway.marvel.com:443/v1/public/characters?apikey=ecee2df8000d06348ed5ffb65b5f2d9f' + character;
    
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayRepos(data.items, character);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    });
  };

userFormEl.addEventListener('submit', formSubmitHandler);


console.log(character)
console.log(getFeaturedCharacters)