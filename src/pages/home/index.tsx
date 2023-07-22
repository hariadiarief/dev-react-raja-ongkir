import { Button, Divider, Input, Select, Space, Table } from 'antd'
import { Area } from 'components'
import { useState } from 'react'
import { axiosInstance } from 'services/api'

interface Icost {
    isLoading: boolean
    data: any
}

type Tcourier = 'jne' | 'pos' | 'tiki' | null

const courierOption = [
    {
        value: 'jne',
        label: 'JNE',
    },
    {
        value: 'pos',
        label: 'POS',
    },
    {
        value: 'tiki',
        label: 'TIKI',
    },
]

export default function Home() {
    const [originCity, setOriginCity] = useState<string | null>(null)
    const [destinationCity, setDestinationCity] = useState<string | null>(null)

    const [courier, setCourier] = useState<Tcourier>(null)
    const [wight, setWight] = useState<number>(0)

    const [cost, setCost] = useState<Icost>({
        isLoading: false,
        data: null,
    })

    const columns = [
        {
            title: 'Service',
            dataIndex: 'service',
            key: 'service',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Price',
            dataIndex: ['cost'],
            key: 'value',
            render: (text: any) => (
                <span>
                    {new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                    }).format(text[0].value)}
                </span>
            ),
        },
        {
            title: 'Estimation (Day)',
            dataIndex: 'cost',
            render: (text: any) => <span>{text[0].etd}</span>,
        },
        {
            title: 'Note',
            dataIndex: 'cost',
            render: (text: any) => <span>{text[0]?.note}</span>,
        },
    ]

    const calculateCost = () => {
        setCost({ ...cost, isLoading: true })
        axiosInstance
            .post('/cost', {
                origin: originCity,
                destination: destinationCity,
                weight: wight,
                courier: courier,
            })
            .then((response) => {
                setCost({ isLoading: false, data: response.data.rajaongkir })
            })
    }

    return (
        <div className='container '>
            <Space direction='vertical' size={12} className='w-full'>
                <h1>Cek Ongkir</h1>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4 '>
                    <div className='w-full'>
                        <h3>Kurir</h3>
                        <Select
                            size='large'
                            className='w-full'
                            showSearch
                            placeholder='Select a person'
                            optionFilterProp='children'
                            onChange={(value: Tcourier) => setCourier(value)}
                            filterOption={(input, option) =>
                                (option?.label ?? '')
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                            }
                            options={courierOption}
                        />
                    </div>
                    <div className='w-full'>
                        <h3>Berat</h3>
                        <Input
                            addonAfter='gram'
                            type='number'
                            defaultValue={wight}
                            onChange={(e) => setWight(parseInt(e.target.value))}
                            size='large'
                            className='w-full'
                            placeholder='wight'
                        ></Input>
                    </div>
                </div>

                <h3>Origin</h3>
                <Area onChange={(value: string) => setOriginCity(value)} />
                <h3>Destination</h3>
                <Area onChange={(value: string) => setDestinationCity(value)} />

                <div className='flex justify-end'>
                    <Button
                        loading={cost.isLoading}
                        disabled={
                            !originCity ||
                            !destinationCity ||
                            !courier ||
                            !wight
                        }
                        size='large'
                        onClick={calculateCost}
                        className='w-full md:w-52'
                    >
                        Hitung
                    </Button>
                </div>
            </Space>
            {cost.data === null ? null : (
                <>
                    <Divider />
                    <Table
                        loading={cost.isLoading}
                        dataSource={cost.data?.results[0].costs}
                        columns={columns}
                    />
                </>
            )}
        </div>
    )
}
