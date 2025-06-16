import { BugButton } from "app/providers/ErrorBoundary"
import { Counter } from "entities/Counter"
import { useState } from "react";
import { useTranslation } from "react-i18next"
import { Input } from "shared/ui/Input/Input"

export default function MainPage() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <div>
      {/* <BugButton></BugButton> */}
      {t("Главная страница")}
      <Input 
        value={value} 
        onChange={onChange}
        placeholder={'Введите текст'}
      >
      </Input>
    </div>
  )
}
