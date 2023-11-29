import { useState } from 'react'
import Button from '@components/Button'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card shadow-sm">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default Home
