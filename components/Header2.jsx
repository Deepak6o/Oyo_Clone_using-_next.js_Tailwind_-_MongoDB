import { IoIosArrowDown } from "react-icons/io";

const Header2 = () => {
    const List = [
        {
            name: 'Banglore'
        },
        {
            name: 'Kolkata'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Delhi'
        },
        {
            name: 'Hydrabad'
        },
    ]
  return (
    <div className="flex px-5 py-1 bg-gray-200 justify-between">
        {
            List.map((e)=>{
                return <span key={e.name} className="flex flex-row">{e.name}<IoIosArrowDown className="mt-1.5 ml-1 text-sm"/></span>
            })
        }
    </div>
  )
}

export default Header2