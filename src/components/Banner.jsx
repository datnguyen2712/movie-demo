import IconRating from '../assets/rating.png';
import IconRatingHalf from '../assets/rating-half.png';
import ImgTemp from '../assets/temp-1.jpeg';
import IconPlay from '../assets/play-button.png';
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-center bg-no-repeat bg-cover bg-banner relative">
        <div className="absolute bg-black w-full h-full top-0 left-0 opacity-40"/>
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-10">
            <div className='w-[50%] flex flex-col space-y-5 items-baseline'>
                <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-5 text-md">
                    TV Show
                </p>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-4xl font-bold">Nghe nói em thích tôi</h2>
                    <div className="flex items-center space-x-3">
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRating} alt="rating" className='w-8 h-8' />
                        <img src={IconRatingHalf} alt="rating-half" className='w-8 h-8' />
                    </div>
                    <p className='text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit ad in dolor eius,
                        atque distinctio inventore possimus nam vel nostrum magni quia accusantium, a, modi quibusdam 
                        ratione molestias. Rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi 
                        recusandae tempora earum animi ipsam. Exercitationem beatae qui consequuntur eligendi quos vel, 
                        fugit architecto quod accusamus laborum distinctio, amet odio nulla.
                    </p>
                    <div className='flex items-center space-x-4'>
                        <button className='p-3 text-white bg-black font-bold text-md rounded'>Chi Tiết</button>
                        <button className='p-3 text-white bg-red-600 font-bold text-md rounded'>Xem Phim</button>
                    </div>
                </div>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                <div className='w-[300px] h-[400px] relative group cursor-pointer'>
                    <img src={ImgTemp} alt="temp" className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                        <img src={IconPlay} alt="play-button" className='w-16 h-16' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner