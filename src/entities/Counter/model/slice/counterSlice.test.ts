
import { counterActions, counterReducer } from "./counterSlice"
import { CounterSchema } from "../types/counterSchema"


describe('counterSlice.test', () => {
    test('Expect value to increase by 1', () => {
        const state:CounterSchema = {
            value: 10
        }
        expect(
            counterReducer(state as CounterSchema, counterActions.increment())
        )
        .toEqual({ value: 11 })
    })
    test('Expect value to decrease by 1', () => {
        const state:CounterSchema = {
            value: 10
        }
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement())
        )
        .toEqual({ value: 9 })
    })
    test('Should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        )
        .toEqual({ value: 1 })
    })
})