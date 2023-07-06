import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

function Home() {
  const { user } = useAuthContext();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async function () {
      //send authorisation headers to verify the user
      const res = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await res.json();
      setData(json.msg);
      console.log(json);
    }

    if (user)
      fetchData();
  })

  return (
    <>
      {data ? <h1>{data}</h1> : <h3>This is a Home page</h3>}
    </>
  )
}

export default Home