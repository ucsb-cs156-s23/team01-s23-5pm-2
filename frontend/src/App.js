import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/Towns/AvilaBeachPage";
import LosAlamosPage from "main/pages/Towns/LosAlamosPage";
import ArroyoGrandePage from "main/pages/Towns/ArroyoGrandePage";

import "bootstrap/dist/css/bootstrap.css";
import RestaurantCreatePage from "main/pages/Restaurants/RestaurantCreatePage";
import RestaurantEditPage from "main/pages/Restaurants/RestaurantEditPage";
import RestaurantIndexPage from "main/pages/Restaurants/RestaurantIndexPage";
import RestaurantDetailsPage from "main/pages/Restaurants/RestaurantDetailsPage";

import MovieCreatePage from "main/pages/Movies/MovieCreatePage";
import MovieEditPage from "main/pages/Movies/MovieEditPage";
import MovieIndexPage from "main/pages/Movies/MovieIndexPage";
import MovieDetailsPage from "main/pages/Movies/MovieDetailsPage";

import BookCreatePage from "main/pages/Books/BookCreatePage";
import BookEditPage from "main/pages/Books/BookEditPage";
import BookIndexPage from "main/pages/Books/BookIndexPage";
import BookDetailsPage from "main/pages/Books/BookDetailsPage";

import EnergyDrinkIndexPage from "main/pages/Energy Drinks/EnergyDrinkIndexPage";
import EnergyDrinkCreatePage from "main/pages/Energy Drinks/EnergyDrinkCreatePage";
import EnergyDrinkEditPage from "main/pages/Energy Drinks/EnergyDrinkEditPage";
import EnergyDrinkDetailsPage from "main/pages/Energy Drinks/EnergyDrinkDetailsPage";


function App() {

  const reload = () => window.location.reload();

  return (
    <BrowserRouter basename="/team01-s23-5pm-2">
      <Routes>
        <Route path="/storybook-static" onEnter={reload}/>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        
        <Route exact path="/restaurants/create" element={<RestaurantCreatePage />} />
        <Route exact path="/restaurants/edit/:id" element={<RestaurantEditPage />} />
        <Route exact path="/restaurants/details/:id" element={<RestaurantDetailsPage />} />
        <Route exact path="/restaurants/" element={<RestaurantIndexPage />} />

        <Route exact path="/movies/create" element={<MovieCreatePage />} />
        <Route exact path="/movies/edit/:id" element={<MovieEditPage />} />
        <Route exact path="/movies" element={<MovieIndexPage/>} />
        <Route exact path="/movies/details/:id" element={<MovieDetailsPage/>} />
      
        <Route exact path="/books/create" element={<BookCreatePage/>}/>
        <Route exact path="/books/edit/:id" element={<BookEditPage/>}/>
        <Route exact path="/books" element={<BookIndexPage/>}/>
        <Route exact path="/books/details/:id" element={<BookDetailsPage/>} />

        <Route exact path="/energydrinks" element={<EnergyDrinkIndexPage/>}/>
        <Route exact path="/energydrinks/create" element={<EnergyDrinkCreatePage/>}/>
        <Route exact path="energydrinks/edit/:id" element={<EnergyDrinkEditPage/>}/>
        <Route exact path="/energydrinks/details/:id" element={<EnergyDrinkDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
