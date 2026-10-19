import AddToCart from '../../../assets/icons/addshoppingcart.png';

function ProductCard({ image, name, oldPrice, price }) {
    return (
        <article className='group flex h-full flex-col overflow-hidden cursor-pointer p-3 sm:p-4 lg:p-5 rounded-[30px] border border-[rgba(208,104,91,0.15)] bg-[#fdfdfd] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.05)] hover:shadow-[0px_0px_10px_1px_rgba(0,0,0,0.09)] hover:border-[rgba(128,63,54,0.2)] hover:brightness-104 duration-700 transition-all ease-in-out'>
            <img src={image}
                className='group-hover:scale-102 duration-700 transition-all ease-in-out'
                alt={name} />

            <h3 className="my-0.5 flex min-h-10 items-end px-1 text-[15px] font-bold leading-5 text-primary transition-colors duration-700 group-hover:text-hover-button sm:text-[16px] lg:text-[18px]">
                <span className="w-full">{name}</span>
            </h3>

            <div className="flex justify-between px-1 pt-1">
                <div className='flex flex-col gap-1 '>
                    <span className='text-secondary/50 group-hover:text-secondary/70 duration-700 transition-all ease-in-out font-medium text-[15px] line-through'>
                        {oldPrice}
                    </span>
                    <span className='font-bold text-[18px] text-primary group-hover:text-hover-button duration-700 transition-all ease-in-out'>
                        {price}
                    </span>
                </div>

                <button
                    type="button"
                    aria-label={`Add ${name} to cart`}
                >
                    <img src={AddToCart}
                        className='w-11 bg-button hover:bg-hover-button duration-400 p-2 cursor-pointer rounded-[50%]'
                        alt="" />
                </button>
            </div>
        </article>
    );
}

export default ProductCard;