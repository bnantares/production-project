import { BugButton } from "app/providers/ErrorBoundary"
import { useTranslation } from "react-i18next"

export default function MainPage() {
  const { t } = useTranslation()

  return (
    <div>
      <BugButton></BugButton>
      {t("Главная страница")}
    </div>
  )
}
