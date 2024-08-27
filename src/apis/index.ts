const LOCAL_URL = 'http://localhost:3000';

export async function getPosts() {
    return await fetch(`${LOCAL_URL}/posts`, {method: 'GET'});
}