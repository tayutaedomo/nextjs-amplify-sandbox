import { Post } from "../types"
import ClientPosts from "./client-posts"

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = (await res.json()) as Post[]
  return data
}

export default async function ServerPosts() {
  const posts = await fetchPosts()

  return (
    <div>
      <div className="my-2">
        <ClientPosts posts={posts} />
      </div>
    </div>
  )
}
