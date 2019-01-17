// init GitHub

const github = new GitHub();

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
            }   
        })
    } else {
        // Clear profile 
    }
});