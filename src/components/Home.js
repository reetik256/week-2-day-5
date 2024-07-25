// // function Home(){
// //     return(
// //         <>
// //         <h1>Home Component</h1>
// //         </>
// //     )
// // }
// // export default Home;
// import { useState } from "react";
// function Home(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//         <h1>Home Component</h1>
//         <div className="counter">
//             <h6>Counter : {count}</h6>
//             <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
//             <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
//         </div>
//         </>
//     )
// }
// export default Home;
// import { useState } from "react";
// function Home(){
//     const [count,setCount] = useState(0);

//     return (
//         <>
//         <h3>Home Component</h3>
//         <div id="carouselExampleIndicators" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://imgd.aeplcdn.com/370x208/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80" class="d-block w-100" height="400" alt="Office1"/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://etimg.etb2bimg.com/photo/74065926.cms" class="d-block w-100" height="400" alt="Office2"/>
//     </div>
//     <div class="carousel-item">
//       <img src="https://imgd.aeplcdn.com/600x600/n/cw/ec/137229/front-view0.jpeg?isig=0&wm=0" class="d-block w-100" height="400" alt="office3"/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//         </>
//     )
// }
// export default Home;
import { useState } from "react";
function Home(){
    const [count,setCount] = useState(0);

    return (
        <>
        <h1>Home Component</h1>
        <div className="counter">
            <h6>Counter : {count}</h6>
            <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
            <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
        </>
    )
}
export default Home;