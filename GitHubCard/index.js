import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entry = document.querySelector('.cards');

axios.get('https://api.github.com/users/robertmasters')
.then(good => {
  // console.log(good.data)
  const gitCard = githubStuff(good.data)
  entry.appendChild(gitCard)
  
})
.catch(bad => {
  console.log(bad)
  debugger
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



const followersArray = [
  'https://api.github.com/users/fibonacci85',
  'https://api.github.com/users/sean-birmingham',
  'https://api.github.com/users/kubes2020',
  'https://api.github.com/users/joshwhitwell',
  'https://api.github.com/users/andremichalowski'

];

const getData = function(gitUrl){
  axios.get(gitUrl)
  .then(good => {
    // console.log(good.data)
    
    const gitCard = githubStuff(good.data)
    entry.appendChild(gitCard)

  })
  .catch(bad => {
    console.log(bad)
    debugger
  })
}

followersArray.forEach(item => {
  //console.log(item)
  getData(item)
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function githubStuff(singleObject){
  //creating elements
  const divCard = document.createElement('div')
  const imgUser = document.createElement('img')
  const divCardInfo = document.createElement('div')
  const h3UserName = document.createElement('h3')
  const pUsersName = document.createElement('p')
  const pLocation = document.createElement('p')
  const pProfile = document.createElement('p')
  const aGitProfile = document.createElement('a')
  const pFollowers = document.createElement('p')
  const pFollowing = document.createElement('p')
  const pBio = document.createElement('p')

//assigning content to elements
  imgUser.src = singleObject.avatar_url
  h3UserName.textContent = ` ${singleObject.login}`
  pUsersName.textContent = singleObject.name
  pLocation.textContent = singleObject.location
  pProfile.textContent = 'Profile: '
  aGitProfile.src = singleObject.html_url
  aGitProfile.textContent = singleObject.html_url
  pFollowers.textContent = `Followers: ${singleObject.following}`
  pFollowing.textContent = `Following: ${singleObject.followers}`
  pBio.textContent = `Bio: ${singleObject.bio}`

//making classes
  divCard.classList.add('card')
  h3UserName.classList.add('name')
  divCardInfo.classList.add('card-info')
//appending
  divCard.appendChild(imgUser)
  divCard.appendChild(divCardInfo)
  divCardInfo.appendChild(h3UserName)
  divCardInfo.appendChild(pUsersName)
  divCardInfo.appendChild(pLocation)
  divCardInfo.appendChild(pProfile)
  pProfile.appendChild(aGitProfile)
  divCardInfo.appendChild(pFollowers)
  divCardInfo.appendChild(pFollowing)
  divCardInfo.appendChild(pBio)

  return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
