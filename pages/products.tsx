import Layout from "../components/general/Layout";
import ProductIndex from "../components/Product";

export interface ProductData {
    id: string;
    shopId: string;
    name: string;
    description: string;
    price: string;
    tag: string;
    available: string;
}

interface ShopIndexProps {
    productData: ProductData[];
}

const Products: React.FC<ShopIndexProps> = ({ productData }) => {
    return (
        <Layout>
            <ProductIndex productData={productData}/>
        </Layout>
    )
}

export default Products