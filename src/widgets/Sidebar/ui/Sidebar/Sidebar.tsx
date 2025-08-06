import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const [test, setTest] = useState('');

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    console.log(SidebarItemsList)

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem 
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);
    

    return (
        <div
            data-testid="sidebar" 
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >   
            <div className={cls.items}>
                <button onClick={() => {setTest(test + 1)}}>test</button>
                {itemsList}
            </div>
            <Button 
                data-testid="sidebar-toggle" 
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    );
});