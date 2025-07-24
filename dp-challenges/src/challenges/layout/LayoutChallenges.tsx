// import Content from "./dashboard/Content"
// import Footer from "./dashboard/Footer"
// import Header from "./dashboard/Header"
// import Sidebar from "./dashboard/Sidebar"
// import SplitScreen from "./dashboard/SplitScreen"

import RenderListChallenge from "./render-list/RenderListChallenge"

const LayoutChallenges = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Split Screen Challenge */}
            {/* <Header />
            <SplitScreen
                leftWeight={18}
                rightWeight={81}
            >
                <Sidebar />
                <Content />
            </SplitScreen>
            <Footer /> */}


            {/* Render List Challenge */}
            <RenderListChallenge />
        </div>
    )
}

export default LayoutChallenges