import {classNames} from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../../model/items';
import { memo } from 'react';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

const areEqual = (prevProps: SidebarItemProps, nextProps: SidebarItemProps) => {
    debugger
    if (prevProps.item !== nextProps.item || prevProps.collapsed !== nextProps.collapsed) {
        console.log('item НЕ РАВНЫ!')
        return false;
    }
    console.log('item РАВНЫ!')
    return true;
};

const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    return (
        <AppLink 
            theme={AppLinkTheme.SECONDARY} 
            to={item.path} 
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
};

export default memo(SidebarItem, areEqual)