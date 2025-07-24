import Left from './Left'
import Right from './Right'
import SplitScreen from './SplitScreen'

const LayoutPattern = () => {
    return (
        <>
            <SplitScreen leftWeight={15} rightWeight={80}>
                <Left />
                <Right />
            </SplitScreen>
        </>
    )
}

export default LayoutPattern