import Image from "next/image"


export default function favCards({ product }) {
    return (
        <div className="bg-red-800 p-5 w-[600px] gap-20 flex flex-row justify-between items-center m-3 rounded-lg">
            <Image src={product.images[0]} width={100} height={100} className="h-24 aspect-auto rounded-sm" />
            <div className="flex flex-col">
                <h3 className="text-lg font-bold uppercase font-serif">{product.name}</h3>
                <p className="font-serif">{product.description}</p>
                <p className="font-semibold">${product.price}</p>
            </div>
            <Image src='/favourite.png' width={100} height={100} className="h-10 w-10" />
        </div>
    )
}