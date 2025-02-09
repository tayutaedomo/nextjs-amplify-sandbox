import ClientComponent from "./components/client-counter"
import ClientPosts from "./components/client-posts"
import { Post } from "./types"

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = (await res.json()) as Post[]
  return data
}

export default async function SsrClientPage() {
  const currentTime = new Date().toLocaleTimeString()
  const posts = await fetchPosts()

  return (
    <div className="p-4">
      <h1>Current Time: {currentTime}</h1>

      <div className="my-2">
        <ClientComponent />
      </div>

      <div className="my-2">
        <ClientPosts posts={posts} />
      </div>
    </div>
  )
}
