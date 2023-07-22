import { useEffect, useState } from 'react'
import { Select } from 'antd'
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
interface IareaProps {
    onChange: (value: string) => void
}

export const Area: React.FC<IareaProps> = ({ onChange }) => {
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
                    setCity({
                        isLoading: false,
                        items: response.data.rajaongkir.results,
                    })
                })
        }

        if (selectedProvince) fetchCity()
    }, [selectedProvince])

    return (
        <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4 '>
            <Select
                size='large'
                className='w-full'
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
                size='large'
                className='w-full'
                disabled={!selectedProvince}
                loading={city.isLoading}
                showSearch
                placeholder='Select a person'
                optionFilterProp='children'
                onChange={(value: string) => {
                    setSelectedCity(value)
                    onChange(value)
                }}
                options={city.items.map((item) => ({
                    value: item.city_id,
                    label: `${item.type} ${item.city_name}`,
                }))}
                filterOption={(input, option) =>
                    (option?.label ?? '')
                        .toLowerCase()
                        .includes(input.toLowerCase())
                }
            />
        </div>
    )
}
