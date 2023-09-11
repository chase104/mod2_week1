
// import "./styles.css";

import { useEffect, useState } from "react";

function App() {
    const [favoriteAnimal, setFavoriteAnimal] = useState("")
    const [newAnimal, setNewAnimal] = useState("")
    const [checkedLocalStorage, setCheckedLocalStorage] = useState(false)

    const handleSubmit = () => {
      if (newAnimal) {
        setFavoriteAnimal(newAnimal);
        localStorage.setItem("favoriteAnimalData", newAnimal);
        setNewAnimal("")
      }
    }

    const handleReset = () => {
      setFavoriteAnimal("");
      setNewAnimal("");
      localStorage.removeItem("favoriteAnimalData")
    }

    // ONCE, when we mount check for that data
    useEffect(() => {
      let localData = localStorage.getItem("favoriteAnimalData")
      if (localData) {
        setFavoriteAnimal(localData)
      }
      setCheckedLocalStorage(true)
    }, []);

    const returnAnimal = () => {
      console.log("doing return animal function");
        if (checkedLocalStorage === false) {
          return ""
        } else {
          
          return favoriteAnimal ? favoriteAnimal : "???"
        }
    }

  return (
    <div>
      {/* <h1>My Favorite Animal is: {returnAnimal()}</h1> */}
      <h1 style={{textAlign: "left"}}>My Favorite Animal is: {!checkedLocalStorage ? "" : favoriteAnimal ? favoriteAnimal : "???"}</h1>
      <button onClick={() => handleReset()}>Remove Favorite</button>
      <br></br>
      <label>
        New Favorite Animal
        <input value={newAnimal} onChange={(e) => setNewAnimal(e.target.value)}  />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
