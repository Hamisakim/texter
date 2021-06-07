import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {


  if (!localStorage.getItem('username')) return <LoginForm/>
  return (
    <div>
      <ChatEngine 
        height='100vh'
        projectID='972e7304-2997-4597-8bf2-c3903788a5d8'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
      />

    </div>
  )
}

export default App
