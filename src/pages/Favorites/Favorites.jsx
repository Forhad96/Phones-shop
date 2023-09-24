// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import PhonesCard from "../../components/Phones/PhonesCard";
import useGetPhones from "../../hooks/useGetPhones";
import { getLocalStorageData } from "../../utility/LocalStorage";


const Favorites = () => {
    const [phones] = useGetPhones()
    const [favoritePhones,setFavoritePhones] =useState()
    const [noData,setNoData] = useState("No Item Available")
    const [showAll,setShowAll] = useState(false)

    useEffect(()=>{

        const storedFavorites = getLocalStorageData()
        const filteredPhones = phones?.filter(phone => storedFavorites.includes(phone.id))
        if(filteredPhones){
            setFavoritePhones(filteredPhones)
        }
     
        
    },[phones])

    return (
        <div className="flex flex-col items-center justify-center gap-5">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                showAll?
                favoritePhones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>):
                favoritePhones?.slice(0,3).map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)

            }
        </div>
        {
        <button onClick={()=>setShowAll(!showAll)} className="btn bg-sky-400 mt-10">{showAll?"Show less":"Show All"}</button>

            
        }
        </div>
    );
};

export default Favorites;