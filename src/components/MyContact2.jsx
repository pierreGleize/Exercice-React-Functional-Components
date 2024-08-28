import { useState, useEffect, useTransition } from "react";
import Search from "./Search";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";
import useFetch from "../hooks/useFetch";
import TableUsers from "./TableUsers";
import { fakeUsersGenerator } from "../data/users";

const users = fakeUsersGenerator()
console.log(users)

const MyContact2 = () => {


    const [search, setSearch] = useState('')
    const [resultSearch, setResultSearch] = useState([])
    const [isPending, startTransition] = useTransition()

    useUpdateDocTitle(search)

    

    useEffect(() => {
        //Filter
        if (search !== ''){
            startTransition(() => {
                filterUsers()
            })
            
        }else{
            setResultSearch([])
        }

    }, [search])


    const filterUsers = () => {
        const foundUsers = users.filter((user) => {
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
        <p>Total: {users.length} membres</p>
        <p>Utilisation de useTransition</p>
            <Search 
            searchHandler={handleChange}
            search={search}/>
            
            
            {
                search === '' ? null
                :
                <TableUsers dataArray={resultSearch}
                notification ={isPending}
                />
            }
        </>  
    );
};

export default MyContact2;