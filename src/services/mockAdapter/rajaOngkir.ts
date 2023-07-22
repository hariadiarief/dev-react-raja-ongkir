import MockAdapter from 'axios-mock-adapter/types'

export const province = (mockAdapter: MockAdapter) => {
    mockAdapter.onGet('/province').reply(200, {
        rajaongkir: {
            query: [],
            status: {
                code: 200,
                description: 'OK',
            },
            results: [
                {
                    province_id: '1',
                    province: 'Bali',
                },
                {
                    province_id: '2',
                    province: 'Bangka Belitung',
                },
                {
                    province_id: '3',
                    province: 'Banten',
                },
                {
                    province_id: '4',
                    province: 'Bengkulu',
                },
                {
                    province_id: '5',
                    province: 'DI Yogyakarta',
                },
                {
                    province_id: '6',
                    province: 'DKI Jakarta',
                },
                {
                    province_id: '7',
                    province: 'Gorontalo',
                },
                {
                    province_id: '8',
                    province: 'Jambi',
                },
                {
                    province_id: '9',
                    province: 'Jawa Barat',
                },
                {
                    province_id: '10',
                    province: 'Jawa Tengah',
                },
                {
                    province_id: '11',
                    province: 'Jawa Timur',
                },
                {
                    province_id: '12',
                    province: 'Kalimantan Barat',
                },
                {
                    province_id: '13',
                    province: 'Kalimantan Selatan',
                },
                {
                    province_id: '14',
                    province: 'Kalimantan Tengah',
                },
                {
                    province_id: '15',
                    province: 'Kalimantan Timur',
                },
                {
                    province_id: '16',
                    province: 'Kalimantan Utara',
                },
                {
                    province_id: '17',
                    province: 'Kepulauan Riau',
                },
                {
                    province_id: '18',
                    province: 'Lampung',
                },
                {
                    province_id: '19',
                    province: 'Maluku',
                },
                {
                    province_id: '20',
                    province: 'Maluku Utara',
                },
                {
                    province_id: '21',
                    province: 'Nanggroe Aceh Darussalam (NAD)',
                },
                {
                    province_id: '22',
                    province: 'Nusa Tenggara Barat (NTB)',
                },
                {
                    province_id: '23',
                    province: 'Nusa Tenggara Timur (NTT)',
                },
                {
                    province_id: '24',
                    province: 'Papua',
                },
                {
                    province_id: '25',
                    province: 'Papua Barat',
                },
                {
                    province_id: '26',
                    province: 'Riau',
                },
                {
                    province_id: '27',
                    province: 'Sulawesi Barat',
                },
                {
                    province_id: '28',
                    province: 'Sulawesi Selatan',
                },
                {
                    province_id: '29',
                    province: 'Sulawesi Tengah',
                },
                {
                    province_id: '30',
                    province: 'Sulawesi Tenggara',
                },
                {
                    province_id: '31',
                    province: 'Sulawesi Utara',
                },
                {
                    province_id: '32',
                    province: 'Sumatera Barat',
                },
                {
                    province_id: '33',
                    province: 'Sumatera Selatan',
                },
                {
                    province_id: '34',
                    province: 'Sumatera Utara',
                },
            ],
        },
    })
}

export const city_province3 = (mockAdapter: MockAdapter) => {
    mockAdapter.onGet('/city?province=3').reply(200, {
        rajaongkir: {
            query: {
                province: '3',
            },
            status: {
                code: 200,
                description: 'OK',
            },
            results: [
                {
                    city_id: '106',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kota',
                    city_name: 'Cilegon',
                    postal_code: '42417',
                },
                {
                    city_id: '232',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kabupaten',
                    city_name: 'Lebak',
                    postal_code: '42319',
                },
                {
                    city_id: '331',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kabupaten',
                    city_name: 'Pandeglang',
                    postal_code: '42212',
                },
                {
                    city_id: '402',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kabupaten',
                    city_name: 'Serang',
                    postal_code: '42182',
                },
                {
                    city_id: '403',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kota',
                    city_name: 'Serang',
                    postal_code: '42111',
                },
                {
                    city_id: '455',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kabupaten',
                    city_name: 'Tangerang',
                    postal_code: '15914',
                },
                {
                    city_id: '456',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kota',
                    city_name: 'Tangerang',
                    postal_code: '15111',
                },
                {
                    city_id: '457',
                    province_id: '3',
                    province: 'Banten',
                    type: 'Kota',
                    city_name: 'Tangerang Selatan',
                    postal_code: '15435',
                },
            ],
        },
    })
}

export const cost = (mockAdapter: MockAdapter) => {
    mockAdapter.onPost('/cost').reply(200, {
        rajaongkir: {
            query: {
                origin: '457',
                destination: '402',
                weight: 1000,
                courier: 'jne',
            },
            status: {
                code: 200,
                description: 'OK',
            },
            origin_details: {
                city_id: '457',
                province_id: '3',
                province: 'Banten',
                type: 'Kota',
                city_name: 'Tangerang Selatan',
                postal_code: '15435',
            },
            destination_details: {
                city_id: '402',
                province_id: '3',
                province: 'Banten',
                type: 'Kabupaten',
                city_name: 'Serang',
                postal_code: '42182',
            },
            results: [
                {
                    code: 'jne',
                    name: 'Jalur Nugraha Ekakurir (JNE)',
                    costs: [
                        {
                            service: 'OKE',
                            description: 'Ongkos Kirim Ekonomis',
                            cost: [
                                {
                                    value: 13000,
                                    etd: '3-6',
                                    note: '',
                                },
                            ],
                        },
                        {
                            service: 'REG',
                            description: 'Layanan Reguler',
                            cost: [
                                {
                                    value: 15000,
                                    etd: '2-3',
                                    note: '',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    })
}
