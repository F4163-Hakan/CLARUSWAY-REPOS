// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  const handleClick = () => {
    alert("Btn Clicked");
  };
  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>

      <button
        onClick={() => handleClear("Clear Btn Clicked")}
        className="btn btn-dark"
      >
        Clear
      </button>
      <button onClick={handleChange} className="btn btn-danger">
        Change
      </button>
      {/* <button onClick={(e) => handleChange(e)} className="btn btn-danger">
        Change
      </button> */}
    </div>
  );
};

export default Events;
