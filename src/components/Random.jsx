// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
// const API_KEY =process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {

	// const [Gifs, setGifs]= useState(' ');
	// const [loading ,setLoading]= useState(false);

	const {Gifs,loading,fetchData} =useGif();

	// async function fetchData(){
	// 	setLoading(true);
	// 		const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
	// 		const {data}= await axios.get(url);
	// 		const imgSrc= await data.data.images.downsized_large.url;
	// 		setGifs(imgSrc);
	// 		setLoading(false);
	// }
	// useEffect(()=>{
	// 	fetchData()
	// },[]);

	function clickHandler(){
		fetchData();
	}
  return (
	<div className='w-1/2 mb-1 mt-5 flex flex-col items-center bg-green-400 rounded-md border-2
	 border-black'>
		<h1 
		className=' text-3xl underline uppercase font-bold mt-3'>Random GIfs
		</h1>

		{
			loading ? (<Spinner/>): (<img src={Gifs} alt='gifs' width='450px'
			className=' mt-2 mb-2 rounded-md'/>)
		}

		
		<button
			onClick={clickHandler}
			className=' bg-blue-100 w-10/12 px-2 py-1 rounded-md mb-3 mt-3 text-2xl font-bold'
		>
			Generate
			</button>
	</div>
  )
}

export default Random
