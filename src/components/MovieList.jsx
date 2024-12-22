import { useContext } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MovieContext } from '../context/MovieProvider';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    }
};
// import ImgTemp from '../assets/temp-1.jpeg';
const MovieList = ({ title, data }) => {
  const {handleTrailer} = useContext(MovieContext)

  return (
    <div className="text-white p-10 mb-10">
        <h2 className='uppercase text-xl font-bold mb-4'>{title}</h2>
        <Carousel responsive={responsive} className='flex items-center space-x-4'>
            {data && data.length > 0 && 
                data.map((item) => (
                <div key={item.id} className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(item.id)}>
                    <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                        <div className='absolute top-0 left-0 bg-black/30 w-full h-full' />
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt={item.title} className='w-full h-full object-cover' />
                        <p className='absolute uppercase text-md bottom-4 left-2'>{item.title || item.original_title}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
  )
}

MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}
export default MovieList