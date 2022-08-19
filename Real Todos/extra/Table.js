import React from 'react'

function table() {
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default table
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actionCreators } from "../redux/index";
// import { bindActionCreators } from "redux";
// import Data from '../Data.json';

// function Table() {
//   console.log(Data)
//   const dispatch = useDispatch();
//   const { removeData, increment, decrement } = bindActionCreators(
//     actionCreators,
//     dispatch
//     );
//     // const lists = useSelector((state) => state.user.userData);
//   return (
//     <div>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//             <th scope="col">Rank</th>
//               <th scope="col">Participant Name</th>
//               <th scope="col">Location</th>
//               <th scope="col">Date</th>
//               <th scope="col">Units (KM)</th>
//               <th scope="col">Status</th>
//               <th scope="col">Points</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Data.map((item, i) => {
//               return (
//                 <h1>{item.name}</h1>
//                 // <tr key={i}>
//                 //   <th scope="row">{i + 1}</th>
//                 //   <td>{item.name}</td>
//                 //   <td>{item.location}</td>
//                 //   <td>{item.data}</td>
//                 //   <td>{item.unit}</td>
//                 //   <td>{item.types}</td>
//                 //   <td>{item.point}</td>
//                 //   <td>
//                 //     <button
//                 //       className="btn btn-dark"
//                 //       onClick={() => removeData(lists.i)}
//                 //     >
//                 //       Delete
//                 //     </button>
//                 //   </td>
//                 //   <td
//                 //     className="btn-warning"
//                 //     onClick={() =>
//                 //       dispatch({ type: "INCREMENT", payload: lists })
//                 //     }
//                 //   >
//                 //     +
//                 //   </td>
//                 //   {lists.qty ? lists.qty : 1}
//                 //   <td
//                 //     className="btn-warning"
//                 //     onClick={() =>
//                 //       dispatch({ type: "DECREMENT", payload: lists })
//                 //     }
//                 //   >
//                 //     -
//                 //   </td>
//                 // </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Table;
