import React,{ useState, useEffect } from "react"
import Footer from '../footer/Footer'
import Search from '../items/Search'
import DetailCategory from './DetailCategory'
import FadeMenu from './DropEvent'
import { getAllEvents } from '../../functions/eventFunctions'
import DetailItems from './DetailItems'


const DetailEvents = () => {
 
    const [text, settext] = useState("")
    const handleChange=(e)=>{
        if(e.target.value==""){
            setfiltered(item)
        }
        else{
            
            const searchVal = e.target.value.toLowerCase();

            let regex = new RegExp(searchVal, "g");

            const byparameter = item.filter((item) => {
                if (item.name) {
                return item.name
                    .toString()
                    .toLowerCase()
                    .match(regex);
                }
            });

            
            setfiltered([...new Set([ ...byparameter])]);
        }
    }

    const [item, setitem] = useState([])
    const [filtered,setfiltered] = useState([])

    const fetchevents=async()=>{
        const x = await getAllEvents()
        if(x?.data?.success){
            console.log(x)
            setitem(x.data.data)
            setfiltered(x.data.data)
        }
    }
    
    const handleClick=(category)=>{
        // console.log("current category",category)
        if(category === "All"){
            console.log("current category",category)
            setfiltered(item)
        }
        else{

            const byparameter = item.filter((item) => {
                if (item.category) {
                return item.category
                    .toString()
                    .toLowerCase() === category.toString().toLowerCase()
                    
                }
            });
            setfiltered([...new Set([ ...byparameter])]);
        }

        
    }

    const handlebylocation=(loc)=>{
        if(loc === "All"){
            // console.log("current category",loc)
            setfiltered(item)
        }
        else{
            const byparameter = item.filter((item) => {
                if (item.state) {
                return item.state
                    .toString()
                    .toLowerCase() === loc.toString().toLowerCase()
                    
                }
            });
            setfiltered([...new Set([ ...byparameter])]);
        }
    }

    useEffect(() => {
        fetchevents()
    }, [])


    return (
        <>
            <div style={{ width: '1140px', margin: 'auto', marginTop: '100px', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '768px', height: '45px', boxShadow: '0 5px 10px -5px', borderRadius: '12px', textAlign: 'center', position: 'relative', zIndex: '100', background: 'white', border: '1px solid blue', margin: 'auto 1rem' }}>
                        <Search style={{}}  handleChange={handleChange}/>
                    </div>
                    <FadeMenu handlebylocation={handlebylocation}/>
                </div>
                <div style={{ marginTop: '3rem' }}><DetailCategory handleClick={handleClick}/></div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <DetailItems item={filtered} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailEvents