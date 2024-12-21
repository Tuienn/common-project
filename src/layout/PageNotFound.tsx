import { Result } from "antd"

const PageNotFound: React.FC = () => {
  return (
    <Result status="404" title={404} className="hidden w-1 p-1 pb-1 pt-2" />
  )
}

export default PageNotFound
