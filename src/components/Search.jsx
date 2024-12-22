import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MovieContext } from '../context/MovieProvider';

const Search = ({ title, data }) => {
  const {handleTrailer} = useContext(MovieContext)
  
  return (
    <div className='text-white p-10 mb-10'>
        <h2 className='uppercase text-xl font-bold mb-4'>{title}</h2>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {data && data.map((item) => (
                <div key={item.id} className='w-[200px] h-[300px] relative group' onClick={() => handleTrailer(item.id)}>
                    <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'>
                        <div className='absolute top-0 left-0 bg-black/30 w-full h-full' />
                        <img src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`} alt={item.title} className='w-full h-full object-cover' />
                        <p className='absolute uppercase text-md bottom-4 left-2'>{item.title || item.original_title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

Search.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}
export default Search