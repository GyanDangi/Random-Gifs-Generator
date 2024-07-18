// import axios from 'axios';
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from './../hooks/useGif';
// const API_KEY =process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {

	// const [Gifs, setGifs]= useState(' ');
	// const [loading ,setLoading]= useState(false);
	const [tag,setTag] = useState('car');
	
	const {Gifs,loading,fetchData} = useGif(tag);

	// async function fetchData(){
	// 	setLoading(true);
	// 		const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`;
	// 		const {data}= await axios.get(url);
	// 		const imgSrc= await data.data.images.downsized_large.url;
	// 		setGifs(imgSrc);
	// 		setLoading(false);
	// }
	// useEffect(()=>{
	// 	fetchData()
	// },[]);

	function changeHandler(event){
			setTag(event.target.value);
	}

	function clickHandler(){
		fetchData(tag);
	}
  return (
	<div className='w-1/2 mb-1 mt-5 flex flex-col items-center bg-blue-500 rounded-md border-2
	 border-black'>
		<h1 
		className=' text-3xl underline uppercase font-bold mt-3'>Search {tag} GIfs
		</h1>

		{
			loading ? (<Spinner/>): (<img src={Gifs} alt='gifs' width='450px'
			className=' mt-2 mb-2 rounded-md '/>)
		}

		<input type="text " 
		className=' bg-blue-100 w-6/12 px-2 py-2 rounded-md mb-3 mt-3 text-center text-2xl font-bold'
		onChange={changeHandler}
		value={tag}
		/>
		<button
			onClick={clickHandler}
			className=' bg-yellow-400 w-10/12 px-2 py-1 rounded-md mb-3 mt-3 text-2xl font-bold'
		>
			Generate
			</button>
	</div>
  )
}

export default Tag
