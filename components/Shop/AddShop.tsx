import { HighlightOff } from "@mui/icons-material";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import { ShopData } from "../../pages/shop";

interface ShopDialogProps {
    open: boolean;
    handleClose: () => void;
    shopDialogData: ShopData | {};
    onSubmit: (data: ShopData) => void;
}

const AddShopDialog: React.FC<ShopDialogProps> = ({
    open,
    handleClose,
    shopDialogData,
    onSubmit, }) => {
    const isEditMode = Object.keys(shopDialogData).length > 0;

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
                    {isEditMode ? "Edit" : "Add"} Shop
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
                    initialValues={shopDialogData}
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
                                            <Typography className="label">Bio/About</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter description"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="address">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">
                                                Address
                                            </Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter address"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                <Field name="latitude">
                                    {({ input }) => (
                                        <Box>
                                            <Typography className="label">Latitude</Typography>
                                            <TextField
                                                {...input}
                                                fullWidth
                                                size="small"
                                                placeholder="Enter latitude"
                                            />
                                        </Box>
                                    )}
                                </Field>
                                    <Field name="longitude">
                                        {({ input }) => (
                                            <Box>
                                                <Typography className="label">Longitude</Typography>
                                                <TextField
                                                    {...input}
                                                    fullWidth
                                                    size="small"
                                                    placeholder="Enter longitude"
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

export default AddShopDialog;
