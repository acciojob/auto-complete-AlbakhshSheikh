import React from "react";More actions
import './../styles/App.css';

const App = () => {
  let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  return (
    <div>
        {/* Do not remove the main div */}
    <Autocomplete  suggestions={fruits}/>
    </div>
  )
}

export default App
