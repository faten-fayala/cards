import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions/CounterAction'
import Card from "./Card";
import Carousel from "./Carousel";
const App2 = () => {
  const [keyword, setKeyword] = useState(0)
  const [showNavigation, setShowNavigation] = useState(false)
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: 2,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: 3,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: 4,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: 5,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ].map((slide, index) => {
    console.log(slide)
    return { ...slide, onClick : () => console.log(index) };
  });
  return (
    <div className="">
      <h1>fffff{keyword}</h1>
    <Carousel

      cards={cards}
      height="500px"
      width="30%"
      margin="0 auto"
      offset={2}
      showArrows={false}
    //  showNavigation={showNavigation}
    />
  </div>
  )
}

export default App2