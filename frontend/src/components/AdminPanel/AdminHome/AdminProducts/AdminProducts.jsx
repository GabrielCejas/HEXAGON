import {Link} from "react-router-dom"
import "./AdminProducts.css"
import {useEffect, useState} from "react"
import {connect} from "react-redux"

import productoAction from "../../../../redux/actions/productoAction"
import {Table} from "react-bootstrap"
import ListProduct from "./ListProduct"

function AdminProducts(props) {
  const [data, setData] = useState([])
  /* useEffect(() => {
    props
      .fetchearProductos()
      .then((res) => setData(res.respuesta))
      .catch((error) => console.log(error))
  }, []) */

  return (
    <>
      <Link to="newproduct">New Product</Link>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Category</th>
            <th>Description</th>
            <th>Buttons</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 1 &&
            data.map((user, index) => {
              return <ListProduct user={user} key={index} />
            })}
        </tbody>
      </Table>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.authReducer.users,
  }
}

const mapDispatchToProps = {
  fetchearProductos: productoAction.fetchearProductos,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
