import ClientComponent from "./components/client-counter"
import ServerPosts from "./components/server-posts"

export default async function SsrClientPage() {
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className="p-4">
      <h1>Current Time: {currentTime}</h1>

      <div className="my-2">
        <ClientComponent />
      </div>

      <div className="my-2">
        <ServerPosts />
      </div>
    </div>
  )
}
