import Navbar from "../Components/Navbar";
import simplehaz from "../kepek/pirosHaz.png"
import messages from "../kepek/message.png"
import settings from "../kepek/fillSettings.png"
import people from "../kepek/people.png"

export default function Settings() {

    return (
        <div>
                <Navbar homeI={simplehaz} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>EZ EGY BEÁLLITAS??</div>
        </div>
    )
}