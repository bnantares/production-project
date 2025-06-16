import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { t } from 'i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className? : string
}

export const Navbar = ({className}: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, []) 

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <Button 
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onShowModal}
        >
            {t('Войти')}
        </Button>
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
        {/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio explicabo sit nostrum vel illo! Laboriosam velit minima nam eos architecto. Quaerat eligendi, saepe perferendis pariatur cumque atque excepturi sunt.
        </Modal>   */}
    </div>
  )
}