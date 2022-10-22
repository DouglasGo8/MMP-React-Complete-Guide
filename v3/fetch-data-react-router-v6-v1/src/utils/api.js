const __addr = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const resp = await fetch(__addr + "/posts");

  if (!resp.ok) {
    throw { message: "Failed to fetch posts.", status: 500 };
  }

  return resp.json();
}

export async function getPost(id) {
  const resp = await fetch(__addr + "/posts/" + id);

  if (!resp.ok) {
    throw { message: "Failed to fetch post.", status: 500 };
  }
  return resp.json();
}

export async function savePost(post) {
  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    throw { message: "Invalid input data provided.", status: 422 };
  }

  const response = await fetch(__addr + "/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw { message: "Could not save post.", status: 500 };
  }
}
