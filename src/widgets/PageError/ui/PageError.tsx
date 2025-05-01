import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Suspense } from 'react';

interface PageErrorProps {
    className?: string;
}

const reloadPage = () => {
    location.reload()
}

export const PageError = ({className}: PageErrorProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Упс! Что то пошло не так.')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>        
    );
};