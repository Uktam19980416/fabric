import {FC} from 'react'
import news1 from '../../assets/images/adult-blur-close-up-267394-637x357.png'
import news2 from '../../assets/images/daniel-korpai-1074289-unsplash-637x357.png'
import news3 from '../../assets/images/billetto-editorial-334686-unsplash-637x357.png'
import { News } from './News'
import { useTranslation } from 'react-i18next'

export const NewsData: FC = () => {
  const { t } = useTranslation();
  const datas = [
    {
      id: 1,
      img: news1,
      date: t("home.news.data.date"),
      title: t("home.news.data.title"),
      text: t("home.news.data.text")
    },
    {
      id: 2,
      img: news2,
      date: t("home.news.data.date"),
      title: t("home.news.data.title"),
      text: t("home.news.data.text")
    },
    {
      id: 3,
      img: news3,
      date: t("home.news.data.date"),
      title: t("home.news.data.title"),
      text: t("home.news.data.text")
    },
  ]
  return <News datas={datas} />
}
