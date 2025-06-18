import axios from "axios";
import { StateSchema } from "app/providers/StoreProvider";
import { Dispatch } from "react"
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
    // Способ без Класса TestAsyncThunk.ts
    // @ts-ignore
    // let dispatch: Dispatch;
    // let getState: () => StateSchema

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('Successful request', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined)

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    // })

    // test('Request with 403 error', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined)

    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    // })

    test('Successful request', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(result.meta.requestStatus).toBe('fulfilled');
    })

    test('Request with 403 error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
    })
})