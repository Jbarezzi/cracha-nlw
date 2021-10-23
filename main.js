const linksSocialMedia = {
  github: 'Jbarezzi',
  youtube: 'CovilRPG',
  facebook: 'jbarezzi',
  twitter: 'JBarezzi',
  instagram: 'jbarezzi'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userGitName.textContent = data.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
