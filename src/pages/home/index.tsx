import { useEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { axiosInstance } from 'services/api'

interface Iprovince {
    isLoading: boolean
    items: {
        province_id: string
        province: string
    }[]
}
interface Icity {
    isLoading: boolean
    items: {
        isLoading: boolean
        city_id: string
        province_id: string
        province: string
        type: string
        city_name: string
        postal_code: string
    }[]
}

export default function Home() {
    const [province, setProvince] = useState<Iprovince>({
        isLoading: false,
        items: [],
    })
    const [city, setCity] = useState<Icity>({
        isLoading: false,
        items: [],
    })

    const [selectedProvince, setSelectedProvince] = useState<string | null>(
        null
    )
    const [selectedCity, setSelectedCity] = useState<string | null>(null)

    useEffect(() => {
        console.log('fetchProvince')

        const fetchProvince = () => {
            setProvince({
                ...province,
                isLoading: true,
            })

            axiosInstance.get('/province').then((response) => {
                setProvince({
                    isLoading: false,
                    items: response.data.rajaongkir.results,
                })
            })
        }

        if (province.isLoading) {
            return
        } else {
            fetchProvince()
        }
    }, [])

    useEffect(() => {
        const fetchCity = () => {
            setCity({
                ...city,
                isLoading: true,
            })

            axiosInstance
                .get(`/city?province=${selectedProvince}`)
                .then((response) => {
                    console.log({ response })
                    setCity({
                        isLoading: false,
                        items: response.data.rajaongkir.results,
                    })
                })
        }

        if (selectedProvince) fetchCity()
    }, [selectedProvince])

    // useEffect(() => {
    //     axiosInstance
    //         .post('/cost', {
    //             origin: '457',
    //             destination: '402',
    //             weight: '1000',
    //             courier: 'jne',
    //         })
    //         .then((res) => console.log({ res }))
    // }, [])

    return (
        <div className='container '>
            <h3>Origin</h3>
            <Space>
                <Select
                    style={{ width: '100%' }}
                    loading={province.isLoading}
                    showSearch
                    placeholder='Select a person'
                    optionFilterProp='children'
                    onChange={(value: string) => setSelectedProvince(value)}
                    options={province.items.map((item) => ({
                        value: item.province_id,
                        label: item.province,
                    }))}
                    filterOption={(input, option) =>
                        (option?.label ?? '')
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                />
                <Select
                    style={{ width: '100%' }}
                    disabled={!selectedProvince}
                    loading={city.isLoading}
                    showSearch
                    placeholder='Select a person'
                    optionFilterProp='children'
                    onChange={(value: string) => setSelectedCity(value)}
                    options={city.items.map((item) => ({
                        value: item.city_id,
                        label: item.city_name,
                    }))}
                    filterOption={(input, option) =>
                        (option?.label ?? '')
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                />
            </Space>
        </div>
    )
}
