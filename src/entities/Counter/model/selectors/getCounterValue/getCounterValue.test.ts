import { DeepPartial } from "@reduxjs/toolkit"
import { getCounterValue } from "./getCounterValue"
import { StateSchema } from "app/providers/StoreProvider"
import { stat } from "fs"

describe('getCounterValue.test', () => {
    test('Get correct value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 15
            }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(15)
    })
})