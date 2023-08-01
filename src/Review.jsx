import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegSurprise } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const handleNextBtn = () => {
  	setIndex(index + 1);
  	if (index >= people.length - 1) {
  	  setIndex(0);
  	}
  };
  const handlePrevBtn = () => {
  	setIndex(index - 1);
  	if (index <= 0) {
  	  setIndex(people.length - 1);
  	}
  };
  const handleRandBtn = () => {
  	const randNumber = Math.floor(Math.random() * people.length);
  	setIndex(randNumber);
  };
  const {name, job, image, text} = people[index];
  return (
    <article className='review'>
  	  <div className='img-container'>
  	    <img src={image} alt={name} className='person-img' />
  	    <span className='quote-icon'>
  	      <FaQuoteRight />
  	    </span>
  	  </div>
  	  <h4 className='author'>{name}</h4>
  	  <p className='job'>{job}</p>
  	  <p className='info'>{text}</p>
  	  <div className='button-container'>
  	    <button className='prev-btn' onClick={handlePrevBtn}>
  	      <FaChevronLeft />
  	    </button>
  	    <button className='next-btn' onClick={handleNextBtn}>
  	      <FaChevronRight />
  	    </button>
  	  </div>
  	  <button className='random-btn' onClick={handleRandBtn}>
  	    <span>Surprise me</span>
  	    <FaRegSurprise />
  	  </button>
    </article>
  );
};

export default Review;
