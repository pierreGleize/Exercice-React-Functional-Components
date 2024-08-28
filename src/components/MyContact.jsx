import { useState, useEffect, lazy, Suspense } from "react";
import Search from "./Search";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import useFetch from "../hooks/useFetch";
// import TableUsers from "./TableUsers";
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallBack from "./ErrorFallBack";

const TableUsers = lazy(() => import('./TableUsers')) // Import dynamique

const MyContact = () => {

    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])

    useUpdateDocTitle(search)

    const {data, isLoading } = useFetch('https://jsonplaceholder.typicode.com/users')

   

    useEffect(() => {
        //Filter
        if (search !== ''){
            filterUsers()
        }else{
            setResultSearch([])
        }

    }, [search])


    const filterUsers = () => {
        const foundUsers = data.filter((user) => {
            return Object.values(user).join(' ').toLowerCase().includes(search.toLowerCase())
        })
        setResultSearch(foundUsers)
    }
    
    const handleChange = e => {
        setSearch(e.target.value)
    }

    

    const msgDisplay = (msg, color) => {
        return (
            <p style={{textAlign: 'center', color: color}}>{msg}</p>
        )
    }

    return (
        <>
            {
                isLoading ? msgDisplay('Veuillez patienter', 'red') : (
                    <Search 
                searchHandler={handleChange}
                search={search}/>
            
                )
            }
            {
                resultSearch.length === 0 && search !== '' ? msgDisplay('Pas de résultat', 'red') 
                :
                search === '' ? null
                :
                <ErrorBoundary FallbackComponent={ErrorFallBack}>
                    <Suspense
                fallback={<div>Chargement du tableau en cours...</div>}
                >
                   <TableUsers dataArray={resultSearch}/> 
                </Suspense>
                </ErrorBoundary>
                
                
            }
        </>  
    );
};

export default MyContact;