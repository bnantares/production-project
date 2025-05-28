import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { t } from 'i18next';

interface NavbarProps {
    className? : string
}

export const Navbar = ({className}: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <Button 
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onToggleModal}
        >
            {t('Войти')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio explicabo sit nostrum vel illo! Laboriosam velit minima nam eos architecto. Quaerat eligendi, saepe perferendis pariatur cumque atque excepturi sunt.
        </Modal>  
    </div>
  )
}