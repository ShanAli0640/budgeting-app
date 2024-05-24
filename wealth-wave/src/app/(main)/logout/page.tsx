import Layout from '../../../components/Layout/index';
export default function logout() {
    return (
        <Layout>
            <a href="/api/auth/logout">Logout</a>
        </Layout>
    )
}
