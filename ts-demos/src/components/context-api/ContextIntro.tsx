import MyProvider from "./context/myContext"
import ContextCounter from "./ContextCounter"

const ContextIntro = () => {
    return (
        <MyProvider>
            <div>
                ContextIntro
                <ContextCounter />
            </div>
        </MyProvider>
    )
}

export default ContextIntro