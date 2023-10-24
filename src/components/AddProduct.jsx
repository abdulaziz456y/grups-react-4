/* eslint-disable react/prop-types */


export default function AddProduct({
    title,
    setTitle,
    price,
    setPrice,
    handleSubmit
}) {
    

  return (
      <div >
          <form  action="" onSubmit={handleSubmit}>
              <label htmlFor=""></label>
              <br />
              <input className="inp-1" placeholder="   title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <label htmlFor=""></label>
              <br />
              <input className="inp-2" placeholder="    price"
                  type="text"
                  name=""
                  id=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <button className="buttonn">add</button>
          </form>
    </div>
  )
}
