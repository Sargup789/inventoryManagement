import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const DashboardIndex = () => {
    const router = useRouter()
    return (
        <QueryClientProvider client={queryClient}>
            <div className="m-6" style={{ textAlign: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#127688', fontSize: '500%' }}>
                    Assignment
                </span>
            </div>
        </QueryClientProvider>
    )
}

export default DashboardIndex