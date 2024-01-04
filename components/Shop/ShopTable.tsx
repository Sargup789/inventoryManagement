import { ShopData } from '../../pages/shop';
import { EditOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

interface Props {
    shopData: ShopData[];
    // deleteShop: (id: string) => void;
    editShop: (data: ShopData) => void;
    viewShop: (data: ShopData) => void;
}

export default function Shop({
    shopData, editShop, viewShop
}: Props) {

    console.log(shopData, 'shopdata')

    if (!shopData) return (<div></div>)

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Description</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Latitude</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Longitude</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Address</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shopData.map((row) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align='center'>{row.description}</TableCell>
                                    <TableCell align='center'>{row.latitude}</TableCell>
                                    <TableCell align='center'>{row.longitude}</TableCell>
                                    <TableCell align='center'>{row.address}</TableCell>
                                    <TableCell align='center'>
                                        <Tooltip title="View" followCursor>
                                            <IconButton
                                                size="small"
                                                onClick={() => viewShop(row as ShopData)}
                                                children={<RemoveRedEyeOutlined fontSize="small" />}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Edit" followCursor>
                                            <IconButton
                                                size="small"
                                                onClick={() => editShop(row as ShopData)}
                                                children={<EditOutlined fontSize="small" />}
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