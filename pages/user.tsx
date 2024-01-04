import Layout from "../components/general/Layout";
import UserIndex from "../components/User";

export interface UserData {
    id: string;
    username: string;
    password: string;
    role: string;
    allowedApplication: string;
}

interface UserIndexProps {
    userData: UserData[];
}

const Shop: React.FC<UserIndexProps> = ({ userData }) => {
    return (
        <Layout>
            <UserIndex userData={userData} />
        </Layout>
    )
}

export default Shop