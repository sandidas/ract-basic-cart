import React from 'react'; 

const ReviewCart = ({ product, handleRemoveItem }) => {
    // console.log(product);



    return (
       
        <div>
            <div className='flex flex-row justify-between bg-slate-700 m-2 p-5 text-left border-lime-600 font-medium rounded-lg'>

                <div className='flex flex-row gap-5'>
                    <div>
                        <img className='h-20 rounded-lg' src={product.img} alt="" />
                    </div>
                    <div className='self-center'>
                        <h3 className='font-bold text-white'> {product.name} </h3>
                        <p> Price: {product.price} </p>
                        <p>Quantity {product.quantity} </p>
                    </div>
                </div>
                <div className='self-center'>
                    <button
                    onClick={()=> handleRemoveItem(product.id) }
                    
                    className='bg-[#2A303C] rounded-md shadow-emerald-100 py-4 px-6 text-white font-bold hover:bg-black'>X</button>
                </div>
            </div>



        </div>
    );
};

export default ReviewCart;