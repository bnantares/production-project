import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { t } from 'i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className? : string
}

export const Navbar = memo(({className}: NavbarProps) => {
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
        {isAuthModal && (
          <LoginModal
            isOpen={isAuthModal}
            onClose={onCloseModal}
          />
        )}
    </div>
  )
});