import Navbar from "../Components/Navbar";
import simplehaz from '../kepek/pirosHaz.png'
import messages from "../kepek/fillMessage.png"
import settings from "../kepek/settings.png"
import people from "../kepek/people.png"

export default function Messages() {

    return (
        <div>
                <Navbar homeI={simplehaz} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>EZ EGY ÜZENEET?</div>
        </div>
    )
}