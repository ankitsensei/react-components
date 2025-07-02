// Import Images Here ❇️
// import Img1 from "../assets/PicsShowcaseImgs/img1.jpg"
// import Img2 from "../assets/PicsShowcaseImgs/img2.jpg"
// import Img3 from "../assets/PicsShowcaseImgs/img3.jpg"
// import Img4 from "../assets/PicsShowcaseImgs/img4.jpg"
// import Img5 from "../assets/PicsShowcaseImgs/img5.jpg"
// import Img6 from "../assets/PicsShowcaseImgs/img6.jpg"
// import Img7 from "../assets/PicsShowcaseImgs/img7.jpg"
// import Img8 from "../assets/PicsShowcaseImgs/img8.jpg"
// import Img9 from "../assets/PicsShowcaseImgs/img9.jpg"
// import Img10 from "../assets/PicsShowcaseImgs/img10.jpg"
// import Img11 from "../assets/PicsShowcaseImgs/img11.jpg"
// import Img12 from "../assets/PicsShowcaseImgs/img12.jpg"

const PicsShowcase = () => {
  const data = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img9, Img10, Img11, Img12, Img7, Img8,
  ]
  return (
    <div>
      <h1 className="text-center text-4xl">Pics</h1>
      <div className="columns-[150px] sm:columns-3 lg:columns-4 gap-0" >
        {
          data.map((item, index) => (
            <img key={index} src={item} alt={`img-${index + 1}`} className="w-full object-contain " />
          ))
        }
      </div>
    </div>
  ) 
}

export default PicsShowcase