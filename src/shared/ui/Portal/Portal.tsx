import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Portal.module.scss';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.getElementById('storybook-root') || document.body,
    } = props
    return createPortal(children, element)
};