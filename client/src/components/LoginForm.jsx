/* eslint-disable no-unused-vars */
import { useState } from 'react'
import axios from 'axios'
const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  console.log('🐝 ~ error', error)


  const handleSubmit = async(e) => {
    e.preventDefault()

    const authObject = { 'Project-ID': '972e7304-2997-4597-8bf2-c3903788a5d8', 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
      setError('')
    } catch (err) {
      setError('Oops, incorrect credentials.')
    }
  }


 

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input className='input' placeholder='username' type='text' value={username} onChange={(e)=> setUsername(e.target.value)} required />
          <input className='input' placeholder='password' type='text' value={password} onChange={(e)=> setPassword(e.target.value)} required />
          <div align='center'> 
            <button type='submit' className='button'>
              <span> Start Chatting </span>
            </button>
          </div>
          <h2 className='error'>{error}</h2>
        </form>

      </div>
    </div>
  )
}

export default LoginForm
