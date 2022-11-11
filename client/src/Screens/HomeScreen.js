import React from 'react'
import Pizza from '../Components/Pizza'
import { useEffect } from 'react'
import { getAllPizzas } from '../actions/pizzaActions'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Components/Loading'
import Error from '../Components/Error'
const HomeScreen = () => {
  const pizzasState = useSelector((state) => state.getAllPizzasReducer)

  console.log(pizzasState)
  const { pizzas, loading, error } = pizzasState
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default HomeScreen
