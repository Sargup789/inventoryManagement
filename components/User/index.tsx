import { Button, Typography } from "@mui/material"
import { useState } from "react";
// import AddUserDialog from "./AddUserDialog";
// import UserTable from "./Usertable"
import { UserData } from "../../pages/user";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
    userData: UserData[];
}

const queryClient = new QueryClient();

const UserIndex = ({ userData }: Props) => {
    const [addUserDialogOpen, setAddUserDialogOpen] = useState(false);
    const [userDialogData, setUserDialogData] = useState<UserData | {}>({});

    const handleClose = () => {
        setAddUserDialogOpen(false);
        setUserDialogData({});
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-6">
                <Typography align='right' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ marginLeft: '10px' }}>
                    </div>
                    <Button
                        style={{
                            borderRadius: 15,
                            backgroundColor: "#E96820",
                            // padding: "18px 36px",
                            fontSize: "13px"
                        }}
                        variant="contained"
                        onClick={() => setAddUserDialogOpen(true)}
                    >
                        Add User
                    </Button>
                </Typography>
                <br />
                {/* <UserTable
                    userData={userData}
                    deleteUser={deleteUser}
                    page={page}
                    size={size}
                    setPage={setPage}
                    setSize={setSize}
                />
                <AddUserDialog
                    open={addUserDialogOpen}
                    userDialogData={userDialogData}
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                /> */}
            </div>
        </QueryClientProvider>
    )
}

export default UserIndex