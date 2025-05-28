import { BugButton } from "app/providers/ErrorBoundary"
import { Counter } from "entities/Counter"
import { useTranslation } from "react-i18next"

export default function MainPage() {
  const { t } = useTranslation()

  return (
    <div>
      {/* <BugButton></BugButton> */}
      {t("Главная страница")}
      {/* <Counter/> */}
    </div>
  )
}
