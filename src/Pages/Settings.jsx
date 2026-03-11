import Navbar from "../Components/Navbar";
import simplehaz from "../kepek/feketeHaz.svg"
import messages from "../kepek/feketeKomment.svg"
import settings from "../kepek/feketeSettings.svg"
import people from "../kepek/feketePeople.svg"

export default function Settings() {

    return (
        <div className="background">
                <Navbar homeI={simplehaz} messagesI={messages} settingsI={settings} peopleI={people}/>
                <div>EZ EGY BEÁLLITAS??</div>
        </div>
    )
}