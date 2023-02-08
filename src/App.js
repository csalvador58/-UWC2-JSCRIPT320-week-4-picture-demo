import './App.css';
import PictureSlideshow from './PictureSlideshow';

function App() {
  const pictures = [
    {
      imageUrl:'https://ychef.files.bbci.co.uk/1600x900/p07zmtzk.webp',
      description: 'Helen of Troy'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1570288685369-f7305163d0e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      description: 'panda bear lounging'
    },
    {
      imageUrl: 'https://en.bcdn.biz/Images/2021/3/7/86322861-c499-4c55-ad47-94d294115d79.jpg',
      description: 'no step on snek'
    },
    {
      imageUrl: 'https://media.giphy.com/media/qOhzfrkMzQO8U/giphy.gif',
      description: 'man on motorcycle'
    }
  ]
  return (
    <div className="App">
      <PictureSlideshow pictures={pictures} /> 
    </div>
  );
}

export default App;
