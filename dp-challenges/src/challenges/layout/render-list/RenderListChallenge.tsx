import { clothing, electronics, homeGoods } from "./data"
import ProductInfo from "./ProductInfo"
import RenderList from "./RenderList"

const RenderListChallenge = () => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <RenderList
                data={electronics}
                resourceName="product"
                listItem={ProductInfo}
            />

            <RenderList
                data={clothing}
                resourceName="product"
                listItem={ProductInfo}
            />

            <RenderList
                data={homeGoods}
                resourceName="product"
                listItem={ProductInfo}
            />
        </div>
    )
}

export default RenderListChallenge