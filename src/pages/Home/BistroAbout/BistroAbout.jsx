
import img from '../../../assets/shop/banner2.jpg';
const BistroAbout = () => {
    return (
        <div className='mb-72 '>
           <div>
           <img className='w-1/2 mx-auto' src={img} alt="" />
           </div>
           <div className='relative px-4 py-4 bg-slate-100 w-1/3 mx-auto -mt-60 text-center text-black'>
           <h1>BISTRO BOSS</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis hic optio reiciendis, explicabo illum consequatur tempore ad tempora praesentium quae!</p>
           </div>
        </div>
    );
};

export default BistroAbout;