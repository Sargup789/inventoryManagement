import { HighlightOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Dialog,
    MenuItem,
    Select,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import { ProductData } from "../../pages/products";

interface ProductDialogProps {
    open: boolean;
    handleClose: () => void;
    productDialogData: ProductData | {};
    onSubmit: (data: ProductData) => void;
}

const AddProductDialog: React.FC<ProductDialogProps> = ({
    open,
    handleClose,
    productDialogData,
    onSubmit, }) => {
    const isEditMode = Object.keys(productDialogData).length > 0;

    const shopLocalStorageData = localStorage.getItem('shopsData');
    console.log(shopLocalStorageData, 'shopLocalStorageData')
    const shopsData = JSON.parse(shopLocalStorageData || '[]');

    return (
        <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {isEditMode ? "Edit" : "Add"} Product
                </Box>
                <IconButton
                    children={<HighlightOff />}
                    color="inherit"
                    onClick={handleClose}
                    sx={{ transform: "translate(8px, -8px)" }}
                />
            </DialogTitle>
            <DialogContent>
                <Form
                    initialValues={productDialogData}
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    my: 3,
                                    mx: 1,
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                                    gap: 3,
                                }}
                            >
                                <Field name="shopId">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Shop Name</Typography>
                                            <Select {...input} fullWidth>
                                                {shopsData?.map((option: any) => (
                                                    <MenuItem key={option.key} value={option.id}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </Box>
                                    )}
                                </Field>
                                <Field name="name">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Name</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter name"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="description">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Description</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter description"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="price">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">
                                                Price
                                            </Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter price"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="tag">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Tags</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter tag"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="available">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Available Count</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter availbale count"
                                            />
                                        </Box>
                                    )}
                                </Field>
                            </Box>
                            <DialogActions>
                                <Button
                                    style={{
                                        borderRadius: 15,
                                        backgroundColor: "#127688",
                                        fontSize: "13px"
                                    }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </DialogActions>
                        </form>
                    )}
                />
            </DialogContent>
        </Dialog>
    );
};

export default AddProductDialog;
