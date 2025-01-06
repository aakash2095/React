//=================================== Controlled Component ========================================

// import React, {useState} from 'react'

// const SearchForm = ({onSearch}) => {

//     const [query, setQuery] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSearch(query)
        
        
//     }
//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//         <input type="text" name="" placeholder='Search Github User' onChange={(e) => setQuery(e.target.value)}/>
//         <button type='submit'>Search</button>
//     </form>
//     </>
//   )
// }

// export default SearchForm


// ========================== UnControlled Component =========================
import React, {useRef} from 'react'

const SearchForm = ({onSearch}) => {

    // const [query, setQuery] = useState("");
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = inputRef.current.value;
        if (query.trim()) {
          onSearch(query)
          
        }
        
        
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="" placeholder='Search Github User' ref={inputRef}/>
        <button type='submit'>Search</button>
    </form>
    </>
  )
}

export default SearchForm


