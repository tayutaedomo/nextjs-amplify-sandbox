import ClientComponent from "./components/client-counter"

export default function SsrClientPage() {
  const currentTime = new Date().toLocaleTimeString()

  return (
    <div className="my-4">
      <h1>Current Time: {currentTime}</h1>
      <ClientComponent />
    </div>
  )
}
