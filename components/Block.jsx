import Image from "next/image"


const Block = ({title, para, icons}) => {
  return (
    <div className="w-60 h-full flex items-center px-3 border-r border-gray-300">
        <div className="mr-2 text-2xl">{icons}</div>
        <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
        </div>
    </div>
  )
}

export default Block