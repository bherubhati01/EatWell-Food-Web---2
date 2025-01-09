/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import './Add.css'

function Add({url}) {
  const [image, setimge] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "salad",
  })

  useEffect(() => {
    // console.log(data)
  }, [data])

  const onChangeHeandler = (event) => {
    const name1 = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name1]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    try {
      const response = await axios.post(`${url}/api/food/add`, formData)
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "salad",

        })
        setimge(false)
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className='add'>
      <ToastContainer />
      <form onSubmit={onSubmitHandler} action="#" className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Uplaod Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="image_upload" />
          </label>
          <input onChange={(e) => setimge(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHeandler} value={data.name} name='name' type="text" id='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHeandler} value={data.description} name="description" id="description" rows={6} placeholder='Write Content here' required ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHeandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHeandler} value={data.price} type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button className="add-btn" type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Add