import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }

    }, [onClose, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }
    
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
        
    );
};