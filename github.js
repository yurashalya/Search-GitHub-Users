class GitHub {
    constructor () {
        this.client_id = '6dd56eb5de644b0afb89';
        this.client_secret = 'bb56cc8aa4b37f4ab6be9db29d08361513b6ffd7';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$
        {this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}