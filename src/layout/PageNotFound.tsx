import { Result } from "antd"
import { useTranslation } from "react-i18next"

const PageNotFound: React.FC = () => {
  const { t } = useTranslation("pageNotFound")
  return (
    <Result status="404" title={404} className="mt-10" subTitle={t("button")} />
  )
}

export default PageNotFound
