import "./App.css";
import { useEffect, useState } from "react";
import Cardlist from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/Serach-box-component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredUser, setFilteredUser] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);
  useEffect(() => {
    const newFilteredUser = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredUser(newFilteredUser);
    console.log("filter array effect");
  }, [monsters, searchField]);

  // console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        className="monster-search-box"
      />

      <Cardlist filterData={filteredUser} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       stringUser: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) =>
//         this.setState(() => {
//           return { monsters: data };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     const stringUser = e.target.value.toLowerCase();

//     this.setState(() => {
//       return { stringUser };
//     });
//   };

//   render() {
//     const { monsters, stringUser } = this.state;
//     const { onSearchChange } = this;

//     const filteredUser = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(stringUser)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onSearchChange={onSearchChange}
//           className="monster-search-box"
//         />

//         <Cardlist filterData={filteredUser} />
//       </div>
//     );
//   }
// }

export default App;
