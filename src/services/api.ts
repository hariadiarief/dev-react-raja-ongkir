import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { enableMockAdapter } from './mockAdapter'

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        key: process.env.REACT_APP_RAJA_ONGKIR_KEY,
    },
})

enableMockAdapter({ isEnabled: false })

axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        console.log('Logging the error', error)
        console.log('Logging message', error?.message)
        toast.error(error?.message || 'An unexpected error occured!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            // theme: 'dark',
        })
        return Promise.reject(error)
    }
)
