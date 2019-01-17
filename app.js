// init GitHub

const github = new GitHub;
const ui = new UI;

//  Search input 
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
       github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show UI
            } else {
                // Show profile
                ui.showProfile(data.profile);
            }   
        })
    } else {
        // Clear profile 
    }
});