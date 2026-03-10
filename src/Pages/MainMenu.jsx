import Navbar from "../Components/Navbar";
import FillHouse from "../kepek/fillHouse.png"
import messages from "../kepek/message.png"
import settings from "../kepek/settings.png"
import people from "../kepek/people.png"

export default function MainMenu() {

    return (
        <div>
                <Navbar homeI={FillHouse} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>EZ EGY FOMENU??</div>
        </div>
    )
}