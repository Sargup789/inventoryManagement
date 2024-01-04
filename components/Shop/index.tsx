import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AddShopDialog from "./AddShop";
import { v4 as uuidv4 } from 'uuid';
import ShopTable from "./ShopTable";
import { ShopData } from "../../pages/shop";

type Props = {
    shopData: ShopData[];
};

const queryClient = new QueryClient();

const ShopIndex = ({ shopData }: Props) => {
    const [addShopDialogOpen, setAddShopDialogOpen] = useState(false);
    const [shopDialogData, setShopDialogData] = useState({});

    const shopLocalStorageData = localStorage.getItem('shopsData');
        console.log(shopLocalStorageData, 'shopLocalStorageData')
        const shopsData = JSON.parse(shopLocalStorageData || '[]');

    const editShop = () => {
        setShopDialogData({});
        setAddShopDialogOpen(true);
    };

    const handleClose = () => {
        setAddShopDialogOpen(false);
        setShopDialogData({});
    };

    const onSubmit = async (data: any) => {
        console.log(shopsData, 'shopsData')
        if (Object.keys(shopDialogData).length > 0) {
            const { id, ...rest } = data;
            try {
                const shopsData = JSON.parse(shopLocalStorageData || '{}');
                const shopIndex = shopsData.findIndex((shop: any) => shop.id === id);
                shopsData[shopIndex] = rest;
                console.log(shopsData, 'updated shopsData')
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const newShopId = uuidv4();
                data.id = newShopId;
                shopsData.push(data);
                console.log(shopsData, 'updated shopsData')
            } catch (error) {
                console.error(error);
            }
        }
        localStorage.setItem('shopsData', JSON.stringify(shopsData));
        handleClose();
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-6">
                <Typography align="right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: '10px' }}>
                    </div>
                    <Typography align='left' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button
                            style={{
                                borderRadius: 15,
                                backgroundColor: "#127688",
                                // padding: "18px 36px",
                                fontSize: "13px"
                            }}
                            variant="contained"
                            onClick={() => setAddShopDialogOpen(true)}
                        >
                            Add Shop
                        </Button>
                    </Typography>
                </Typography>
                <br />
                <ShopTable
                    shopData={shopsData}
                    // deleteShop={deleteShop}
                    editShop={editShop}
                />
                <AddShopDialog
                    open={addShopDialogOpen}
                    shopDialogData={shopDialogData}
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                />
            </div>
        </QueryClientProvider>
    );
};

export default ShopIndex;


