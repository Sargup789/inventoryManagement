import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        const shopsData = localStorage.getItem('shopsData');
        const productsData = localStorage.getItem('productsData');
        if (!shopsData) localStorage.setItem('shopsData', JSON.stringify([]))
        if (!productsData) localStorage.setItem('productsData', JSON.stringify([]))
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover
            />
        </QueryClientProvider>
    );
}