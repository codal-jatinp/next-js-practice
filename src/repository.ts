"use server";

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await res.json()) as User[];
};

export const fetchPosts = async (userId: number) => {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  url.searchParams.set("userId", userId.toString());

  const res = await fetch(url);
  return (await res.json()) as Post[];
};

export const fetchPostById = async (postId: number): Promise<Post> => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );
  return await res.json();
};
