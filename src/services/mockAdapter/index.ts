import { axiosInstance } from 'services/api'
import MockAdapter from 'axios-mock-adapter'
import { city_province3, cost, province } from './rajaOngkir'

interface IenableMockAdapter {
    isEnabled: boolean
    delayResponse?: number
}

export const enableMockAdapter = ({
    isEnabled,
    delayResponse = 500,
}: IenableMockAdapter) => {
    if (isEnabled) {
        console.log('Axios Mock Adapter diaktifkan.')

        const mockAdapter = new MockAdapter(axiosInstance, {
            delayResponse,
        })

        /**
         * path      : /province
         */
        province(mockAdapter)

        /**
         * path      : /city?province=3
         */
        city_province3(mockAdapter)

        /**
         * path      : /cost
         */
        cost(mockAdapter)
    }
}
