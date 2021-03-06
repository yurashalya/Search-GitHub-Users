class GitHub {
    constructor () {
        this.client_id = '6dd56eb5de644b0afb89';
        this.client_secret = 'bb56cc8aa4b37f4ab6be9db29d08361513b6ffd7';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}