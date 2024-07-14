import React from 'react'
import "./newsletter.css"

function Newsletter() {

    const handleNumberletter = (event) => {
        if (event.target.value.length > 3) {
            event.target.className = "border2";
        }else if (event.target.value.length >= 1)  {
            event.target.className = "border1";
        }else{
            event.target.className = "";
        }
    }
  return (
      <form>
          <label>nom</label>
          <input type="text" onChange={handleNumberletter} />
          <label>premon</label>
          <input type="text" onChange={handleNumberletter} />
          <label>email</label>
          <input type="text" onChange={handleNumberletter} />

          <input type="submit" />
      </form>
  )
}

export default Newsletter




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Newsletter() {
//     const handleNumberletter = (event) => {
//         if (event.target.value.length <= 3) {
//             event.target.className = 'form-control border border-danger';
//         } else {
//             event.target.className = 'form-control border border-success';
//         }
//     };

//     return (
//         <form>
//             <div className="form-group">
//                 <label>Nom</label>
//                 <input type="text" className="form-control" onChange={handleNumberletter} />
//             </div>
//             <div className="form-group">
//                 <label>Prénom</label>
//                 <input type="text" className="form-control" onChange={handleNumberletter} />
//             </div>
//             <div className="form-group">
//                 <label>Email</label>
//                 <input type="text" className="form-control" onChange={handleNumberletter} />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     );
// }

// export default Newsletter;
