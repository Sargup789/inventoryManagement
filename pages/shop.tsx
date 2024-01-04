import Layout from "../components/general/Layout";
import ShopIndex from "../components/Shop";

export interface ShopData {
    id: string;
    name: string;
    description: string;
    latitude: string;
    longitude: string;
    address: string;
}

const Shop  = () => {
    return (
        <Layout>
            <ShopIndex  />
        </Layout>
    )
}

export default Shop