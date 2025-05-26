import Button from "./components/Button"
import User from "./components/User"

const App = () => {
    return (
        <div>

            <User name="Alex" age={29} isStudent={true} />
            <Button 
                label="My Lucky Button"
                disabled={false}
                onClick={() => {
                    alert("This is first alert")
                }}
            />
            <Button 
                label="My Lucky Button"
                disabled={true}
                onClick={() => {
                    alert("This is second alert")
                }}
            />
            {/* <User>
                <p>Hello there</p>
            </User> */}
        </div>
    )
}

export default App