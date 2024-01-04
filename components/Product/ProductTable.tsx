import { DeleteOutline, EditOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { ProductData } from '../../pages/products';

interface Props {
    productData: ProductData[];
    // deleteShop: (id: string) => void;
    editProduct: (data: ProductData) => void;
}

export default function Product({
    productData, editProduct,
}: Props) {

    if (!productData) return (<div></div>)

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Description</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Price</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Tag</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Available</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productData.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align='center'>{row.description}</TableCell>
                                    <TableCell align='center'>{row.price}</TableCell>
                                    <TableCell align='center'>{row.tag}</TableCell>
                                    <TableCell align='center'>{row.available}</TableCell>
                                    <TableCell align='center'>
                                        <Tooltip title="View" followCursor>
                                            <IconButton
                                                size="small"
                                                onClick={() => { }}
                                                children={<RemoveRedEyeOutlined fontSize="small" />}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Edit" followCursor>
                                            <IconButton
                                                size="small"
                                                onClick={() => editProduct(row as ProductData)}
                                                children={<EditOutlined fontSize="small" />}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Delete" followCursor>
                                            <IconButton
                                                size="small"
                                                onClick={() => { }}
                                                children={<DeleteOutline fontSize="small" />}
                                            />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}