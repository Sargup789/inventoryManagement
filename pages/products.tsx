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

const Products = () => {
    return (
        <Layout>
            <ProductIndex />
        </Layout>
    )
}

export default Products