import './App.css'
import Footer from './component/Footer';
import SectionFilm from './component/SectionFilm'
import TopBar from './component/TopBar'
import TvShows from './component/TvShows'


function App() {


  return (
    <>
      <TopBar />
      <TvShows />
      <SectionFilm title="Trending Now" filmTitle="Star Wars"></SectionFilm>
      <SectionFilm title="Watch it Again"  filmTitle="Harry Potter"></SectionFilm>
      <SectionFilm title="New Releases"  filmTitle="Naruto"></SectionFilm>
      <Footer/>
    </>
  );
}

export default App
