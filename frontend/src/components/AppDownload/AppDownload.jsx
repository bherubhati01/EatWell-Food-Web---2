import { assets } from '../../assets/assets'
import './AppDownload.css'

function AppDownload() {
  return (
    <div className="app-download" id='app-download'>
        <p>For Batter experience Download <br /> EatWell App </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
        </div>
    </div>
  )
}

export default AppDownload