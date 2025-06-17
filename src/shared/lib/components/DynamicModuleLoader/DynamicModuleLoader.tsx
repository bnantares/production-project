import {classNames} from 'shared/lib/classNames/classNames';
import cls from './DynamicModuleLoader.module.scss';
import { FC, useEffect } from 'react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props;

    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};