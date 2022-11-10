import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import data from './data.json';

function App() {
  const [filterData,setFilterData]= useState(data);
  const[inputText, setInputText] =useState();
  const[sortInputValue, setSortInputValue] =useState();

  const inputHandler = (e) =>{
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    filterResult(lowerCase);
  }

  const filterResult = (value) =>{
    let copydata =[...data];
    let filData = []
    copydata.map((elm) =>{
     if(elm.collegeName.toLowerCase().includes(value)){
      filData.push(elm);
     }
    })
    console.log(filData, inputText);
    setFilterData(filData);
  }

  const sortingInputHandler = (e) =>{
    //let csortvalue = document.getElementById('sort');
    //let sort_value = csortvalue.options[csortvalue.selectedIndex].value;
    setSortInputValue(e.target.value);
    console.log(e.target.value);
    sorting(e.target.value);
  }

  const sorting = (sortValue) =>{
    let newSortData;
    let tempData = [...data];
    if(sortValue === ""){
      newSortData = tempData;
    }
    
    if(sortValue === "a-z"){
      newSortData = tempData.sort((a,b) =>
      a.collegeName.localeCompare(b.collegeName)
      //console.log(sortValue,",",a.collegeName);
      );
    }
    
    if(sortValue === "z-a"){
      newSortData = tempData.sort((a,b) =>
      b.collegeName.localeCompare(a.collegeName)
      //console.log(sortValue,",",a.collegeName);
      );
    }
    
    if(sortValue === "lowest"){
      const sortingBy = (a,b) =>{
        return a.courseFees - b.courseFees;
      }
      newSortData = tempData.sort(sortingBy);
    }
    
    if(sortValue === "highest"){
      const sortingBy = (a,b) =>{
        return b.courseFees - a.courseFees;
      }
      newSortData = tempData.sort(sortingBy);
    }
    
    if(sortValue === "cRating"){
      const sortingBy = (a,b) =>{
        return b.collegeduniaRating - a.collegeduniaRating;
      }
      newSortData = tempData.sort(sortingBy);
    }
    
    if(sortValue === "uRRating"){
      const sortingBy = (a,b) =>{
        return b.UserRating - a.UserRating;
      }
      newSortData = tempData.sort(sortingBy);
    }


    setFilterData(newSortData);
  }

  return (
    <div className="App">
      <div className='search'>
        <div>
          <span>Search</span>
          <input 
          placeholder='Search'
          onChange={inputHandler}

          />
        </div>
        <div className='sort'>
          <span>Sort</span>
          <form action='#'>
            <label htmlFor='sort'></label>
            <select name='sort' id='sort' onChange={sortingInputHandler}>
              <option value="">Select </option>
              <option value="a-z">College Name(a-z)</option>
              <option value="z-a">College Name(z-a)</option>
              <option value="lowest">Course Fees(lowest)</option>
              <option value="highest">Course Fees(highest)</option>
              <option value="cRating">Collegedunia Rating</option>
              <option value="uRRating">User Review Rating</option>
            </select>
          </form>
        </div>
      </div>
      <div className='appCards'>
        {filterData.map(value => (
          <div key={value.id}>
          <Card data={value}/>
          </div>
          ))}
        </div>
      </div>
  );
}

export default App;
