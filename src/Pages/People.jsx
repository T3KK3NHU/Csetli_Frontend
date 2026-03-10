import Navbar from "../Components/Navbar";
import simplehaz from "../kepek/pirosHaz.png"
import messages from "../kepek/message.png"
import settings from "../kepek/settings.png"
import people from "../kepek/fillPeople.png"

export default function People() {

    return (
        <div>
                <Navbar homeI={simplehaz} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>Ez egy emberek??</div>
        </div>
    )
}