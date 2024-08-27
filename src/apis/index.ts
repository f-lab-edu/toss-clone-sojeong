const LOCAL_URL = 'http://localhost:3000';

export async function getPosts() {
    const response =  await fetch(`${LOCAL_URL}/posts`, {method: 'GET'})
    return response.json();
  
}