
// Question ---> Smooth Scrolling:

import React, { useRef } from 'react';

const Eleventh = () => {
    const scrollRef = useRef(null);

    const handleClick = () => {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <div>
        <h2>Eleventh Question</h2>
        <div style={{ height: '100vh', overflowY: 'scroll' }} ref={scrollRef}>
          <p>Scrollable Content</p>
        </div>
        <button onClick={handleClick}>Scroll to Top</button>
      </div>
    );
}

export default Eleventh



//In this example, we have a scrollable div element with a reference called scrollRef created using the useRef hook. When the button is clicked, the handleClick function is called, which uses the scrollTo method of the current property of scrollRef to scroll the div element to the top with a smooth animation.