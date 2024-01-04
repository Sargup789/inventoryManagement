import { Button, Typography, Box, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { v4 as uuidv4 } from 'uuid';
import { ProductData } from "../../pages/products";
import ProductTable from "./ProductTable";
import AddProductDialog from "./AddProduct";

const queryClient = new QueryClient();

const ProductIndex = () => {
    const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
    const [productDialogData, setProductDialogData] = useState({});
    const [shopsData, setShopsData] = useState([])
    const [productsData, setProductsData] = useState([])
    const [selectedShop, setSelectedShop] = useState("");
    const [isViewMode, setIsViewMode] = useState(false);

    useEffect(() => {
        const shopLocalStorageData = localStorage.getItem('shopsData');
        console.log(shopLocalStorageData, 'shopLocalStorageData')
        const shopsData = JSON.parse(shopLocalStorageData || '[]');
        setShopsData(shopsData)

    }, [])

    useEffect(() => {
        const productLocalStorageData = localStorage.getItem('productsData');
        console.log(productLocalStorageData, 'productLocalStorageData')
        const productsData = JSON.parse(productLocalStorageData || '[]');
        const productsForAShop = productsData.filter((product: any) => product.shopId === selectedShop);
        setProductsData(productsForAShop)
    }, [
        selectedShop
    ])

    const editProduct = (row: ProductData) => {
        setProductDialogData(row);
        setAddProductDialogOpen(true);
    };

    const viewProduct = (row: ProductData) => {
        setProductDialogData(row);
        setAddProductDialogOpen(true);
        setIsViewMode(true);
    }

    const handleClose = () => {
        setAddProductDialogOpen(false);
        setProductDialogData({});
        setIsViewMode(false);
    };

    const onSubmit = async (data: any) => {
        const productLocalStorageData = localStorage.getItem('productsData');
        console.log(productLocalStorageData, 'productLocalStorageData')
        const productsData = JSON.parse(productLocalStorageData || '[]');
        console.log(productsData, 'shopsData')
        const productsForAShop = productsData.filter((product: any) => product.shopId === data.shopId);
        if (Object.keys(productDialogData).length > 0) {
            const { id, ...rest } = data;
            try {
                const productIndex = productsForAShop.findIndex((product: any) => product.id === id);
                productsForAShop[productIndex] = rest;
                console.log(productsForAShop, 'updated productsForAShop')
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const newProductId = uuidv4();
                data.id = newProductId;
                productsForAShop.push(data);
                console.log(productsForAShop, 'updated shopsData')
            } catch (error) {
                console.error(error);
            }
        }
        //update productsData from productsForAShop
        const finalproducts = productsData.filter((product: any) => product.shopId !== data.shopId).concat(productsForAShop);
        console.log(finalproducts, productsData.filter((product: any) => product.shopId !== data.shopId), productsData, productsForAShop, 'final data')
        localStorage.setItem('productsData', JSON.stringify(finalproducts));
        handleClose();
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-6">
                <Typography align="right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: '10px' }}>
                    </div>
                    <Typography align='left' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Select
                                value={selectedShop}
                                onChange={(e: any) => setSelectedShop(e.target.value)}
                                label="Select Shop"
                                size='small'
                                placeholder='Select Shop'
                                sx={{ minWidth: 200, marginTop: '10px' }}
                            >
                                <MenuItem value="">Select Shop</MenuItem>
                                {shopsData?.map((option: any) => (
                                    <MenuItem key={option.key} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button
                                style={{
                                    borderRadius: 15,
                                    backgroundColor: "#127688",
                                    // padding: "18px 36px",
                                    fontSize: "13px"
                                }}
                                variant="contained"
                                onClick={() => setAddProductDialogOpen(true)}
                            >
                                Add Product
                            </Button>
                        </Box>
                    </Typography>
                </Typography>
                <br />
                <ProductTable
                    productData={productsData}
                    // deleteShop={deleteShop}
                    viewProduct={viewProduct}
                    editProduct={editProduct}
                />
                {addProductDialogOpen && <AddProductDialog
                    open={addProductDialogOpen}
                    isViewMode={isViewMode}
                    productDialogData={productDialogData}
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                />}
            </div>
        </QueryClientProvider>
    );
};

export default ProductIndex;


