export async function fetchGitHubStats(username: string) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Failed to fetch GitHub stats");
        const data = await res.json();
        return {
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}
