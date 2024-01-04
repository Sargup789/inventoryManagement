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

interface ShopIndexProps {
    shopData: ShopData[];
}

const Shop: React.FC<ShopIndexProps> = ({ shopData }) => {
    return (
        <Layout>
            <ShopIndex shopData={shopData} />
        </Layout>
    )
}

export default Shop