document.addEventListener('DOMContentLoaded', () => {
  const xhttp = new XMLHttpRequest();
  const username = 'WigorCosta21';
  const endpoint = `https://api.github.com/users/${username}`;

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const response = JSON.parse(xhttp.responseText);
      console.log(response)
      displayUserData(response.name, response.login, response.avatar_url, response.followers, response.following, response.public_repos, response.html_url
      );
    }
  };

  xhttp.open('GET', endpoint);
  xhttp.send();



  const displayUserData = (name, username, avatar, followers, following, repositories, link) => {

    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar');
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const repositoriesElement = document.querySelector('#repositories')
    const linkElement = document.querySelector("#link")

    nameElement.textContent = name
    usernameElement.textContent = username
    avatarElement.src = avatar
    followersElement.textContent = followers
    followingElement.textContent = following
    repositoriesElement.textContent = repositories
    linkElement.href = link

  }

});
