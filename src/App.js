// import React, { Component } from "react";
// import './App.css'

// class App extends Component {
//   constructor() {
//     super()
//     this.state= {
//       list: [],
//       item: ""
//     }
//   }


//   render() {
//     return(
//       <div>
//         <h1> TODO LIST</h1>
//         <input type='search' placeholder='enter' onChange={(event) => this.setState({item: event.target.value}) }/>
//         <button onClick={() => {
//           const Arr = [ ...this.state.list];
//           Arr.push(this.state.item);
//           this.setState({list: Arr}); 
//         }}> ADD </button>
//         <div>
//           {
//             this.state.list.map ((item) => {
//               return <h1>{item}</h1>
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }

// export default App;



import React, { useState } from "react";
import './App.css';

function App() {
  const [ list, setList ] = useState([]);
  const [ item, setItem ] = useState('');
   

   
    return (
      <div>
        <h1> TODO LIST</h1>
        <input type='search' placeholder='enter' onChange={event => setItem(event.target.value)}/>
        <button onClick={() => {
          const See = [ ...list ];
          See.push(item)
          setList(See);
          console.log(list );
         

        }} > ADD </button>
        <div>
          {
            list.map((item) => {
              return <h1>{item}</h1>
            })
          }
        </div>
      </div>
    )
  }


export default App;