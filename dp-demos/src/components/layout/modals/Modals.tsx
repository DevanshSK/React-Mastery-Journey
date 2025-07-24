import { games } from "../render-list-pattern/data"
import GamesInfo from "./GamesInfo"
import Modal from "./Modal"

const Modals = () => {
    return (
        <div className="p-5">
            <Modal>
                <GamesInfo data={games} />
            </Modal>
        </div>
    )
}

export default Modals