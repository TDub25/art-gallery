import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './Components/dataSlice'
import { logger } from './Components/middleware'

export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [ logger ]
})