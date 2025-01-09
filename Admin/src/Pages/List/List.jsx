/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

function List({url}) {
  
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    // console.log(foodId)
    const response = await axios.post(`${url}/api/food/remove`, {id : foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='list add flex-col'>
      <ToastContainer/>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} alt="product_img" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor' style={{ color: "red" }}>X</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default List