import  {ArrowClockwise, ChatCircle, Heart} from 'phosphor-react'
import './Tweet.css'
export function Tweet(){
    return(
    
        <a href="#"  className="tweet">
            <img src="https://pbs.twimg.com/profile_images/1613739123365273600/mN3NOJE8_400x400.jpg"/>
            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>ari</strong>
                    <span>@ari_bez0</span>
                </div>
                <p>Eu amo muito o lucas, ele é incrível...</p>
                <div className="tweet-content-footer">
                    <button type="button" className="btn-comment">
                        <ChatCircle/>
                        20
                    </button>
                    <button type="button" className='btn-repost'>
                        <ArrowClockwise/>
                        20
                    </button>
                    <button type="button" className="btn-like">
                        <Heart/>
                        20
                    </button>
                </div>
            </div>
        </a>
    )
}