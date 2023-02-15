import React, { Component } from 'react'
import { DynamicStar } from 'react-dynamic-star';
import axios from 'axios'
import './App.css'


export class App extends Component {
  state = {
    dataList: []
  }

  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products`)  //Fetch
      .then(res => {
        const dataList = res.data;
        this.setState({ dataList })
      })
  }
  render() {

    return (
      <div>

        <h1 style={{ color: 'black', textAlign: "center" }}>Welcome To My Products Website</h1>
        <div>
          {this.state.dataList.map(data =>

            <div className='card'>

              <h2 > {data.title}</h2>

              <div>
                <img src={data.image} style={{ width: "250px", height: "250px" }} />
                <h3>{data.category}</h3>
                <p>Price: ${data.price}</p>
                <div style={{ display: "inline-block", textAlign: "center", alignItems: "center" }}>
                  <p>Rating:</p>
                  <DynamicStar width={"20"} height={"20"} rating={data.rating.rate}/>
                  <p>({data.rating.count})</p>
                </div>
                <p>{data.description}</p>
                <p><button>Add to Cart</button></p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App