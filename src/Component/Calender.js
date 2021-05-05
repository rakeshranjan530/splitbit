import Calendar from 'react-calendar';
import forwardarrow from '../assets/forwardarrow.png'
import backwardarrow from '../assets/backwardarrow.png'
import checked from '../assets/checked.svg'
import { useEffect, useState } from 'react';
import getDiff from '../utils/convertor';

const CalendarComponent = (props) => {
    const {history,location} = props;
    const data = location?.data || ''
    const [volatile, setVolatile]= useState({
        currentValue: '',
        nextValue: '',
        calendarData : JSON.parse(localStorage.getItem('calendar')) || []
    })
    useEffect(()=>{
        const d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var nextDate = new Date(year, month+1, day);
        setVolatile((state)=>({
            ...state,
            currentValue: (state?.calendarData || []).filter(e=>e.name === data)[0]?.currentValue || d,
            nextValue:(state?.calendarData || []).filter(e=>e.name === data)[0]?.nextValue || nextDate
        }))
    },[])
    const handleOnchange = (value, name) => {
        let localData = volatile?.calendarData;
        const filteredData = localData?.filter((el)=> el.name === data)
        let currentValue = (name === 'currentValue' && value) || volatile?.currentValue;
        let nextValue = (name === 'nextValue' && value) || volatile?.nextValue;
        if(Array.isArray(filteredData) && filteredData.length === 0){
            const selectData = {
                name:data,
                currentValue,
                nextValue,
            }
            localData.push(selectData);
        }
        else{
            const filteredObj = filteredData[0];
            filteredObj.currentValue = currentValue;
            filteredObj.nextValue = nextValue;
            localData.map((e)=>{
             return e.name === data && ({...e,...filteredObj})
            })
        }
        setVolatile((state)=>({
            ...state,
            [name]:value,
            calendarData:localData
        }))
        try {
            localStorage.setItem("calendar",JSON.stringify(localData))
        } catch (error) {
            console.log("Error localstorage ", error)
        }
    }
    
    return(
        <div className="container">
            <div className="heading">
                <h2 style={{fontWeight:"400",fontSize:"x-large"}}>Web applications in {data} usually completes by.</h2>
            </div>
            <div className="schedulecontainer">
                <div>
                    <Calendar
                        onChange = {(value)=>handleOnchange(value,'currentValue')}
                        value={volatile?.currentValue && new Date(volatile?.currentValue)}
                    />
                </div>
                
                <div style={{placeSelf:"center"}}>
                   <div style={{textAlign:"center"}}><img src={checked} alt="...loading" style={{width:"40px"}} /></div> 
                    <div style={{fontWeight:"400",fontSize:"larger"}}>{(volatile?.currentValue && volatile?.nextValue && getDiff(volatile?.currentValue,volatile?.nextValue)) || 'No. of days'}</div>
                </div>
                <div>
                    <Calendar
                        onChange = {(value)=>handleOnchange(value,'nextValue')}
                        value={volatile?.nextValue && new Date(volatile?.nextValue)}
                    />
                </div>
            </div>
            <div className="footer">
                <div style={{display:"flex",justifyContent:"space-between",width:"165px",alignItems:"flex-end",cursor:'pointer'}}
                   onClick={()=>{history.push("/");}}
                >
                    <img src={backwardarrow} alt="...loading" style={{width:"20px"}} />   
                    <span style={{fontWeight:"300",fontSize:"medium"}}>Reselect Technologies</span>  
                </div>
                <div style={{display:"flex",justifyContent:"space-between",width:"241px",alignItems:"flex-end",cursor:'pointer'}}>
                    <span style={{fontWeight:"300",fontSize:"medium"}}>How can you track your progress</span>
                    <img src={forwardarrow} alt="...loading" style={{width:"20px"}} />   
                </div>
            </div>
        </div>
    )
}
export default CalendarComponent;