const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', function (e) {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('user not found','alert alert-danger')
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // clear profile
    ui.clearProfile();
  }
})