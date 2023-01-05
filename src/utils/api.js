export async function fetcher(url, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();
  return data;
}

export async function getUserData(token) {
  const userResponse = await fetcher("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  return userResponse;
}
