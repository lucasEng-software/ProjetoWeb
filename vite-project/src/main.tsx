import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import  {Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User} from 'phosphor-react'

import twitterLogo from './assets/logo-twitter.svg'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className = "logo" src={twitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home
            </a>
          <a  href="">
            <Hash />
            Explore
          </a>
          <a  href="">
            <Bell />
            Notification
          </a>
          <a  href="">
            <Envelope />
            Messages
          </a>
          <a  href="">
            <BookmarkSimple />  
            Bookmarks
          </a>
          <a  href="">
            <FileText />
            Lists
          </a>
          <a  href="">
            <User />  
            Profile
          </a>
          <a  href="">
            <DotsThreeCircle />  
            More
          </a>
        </nav>
        <button className="new-tweet" type="button">
          Publicar
        </button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Página Inicial
            <Sparkle />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/59840153?v=4" alt="perfil-foto"></img>
              <textarea id="tweet" placeholder="O que está acontecendo?" />  
            </label>
            <button type="submit">Publicar</button>
          </form>
          <div className="separator"/>
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
