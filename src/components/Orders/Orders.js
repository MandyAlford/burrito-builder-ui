import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { setOrders } from '../../actions';
import { getOrders } from '../../apiCalls';
import { deleteOrder } from '../../actions';
import { deleteOrderFromApi } from '../../apiCalls';

class Orders extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    const orderEls = this.props.orders.map(order => {
      return (
        <div className="order" key={Math.random()}>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li key={Math.random()}>{ingredient}</li>
            })}
          </ul>
          <button className='delete-btn' id={order.id} onClick={() => {
            deleteOrderFromApi(order.id)
            this.props.deleteOrder(order.id)
          }}>Delete Order</button>
        </div>
      )
    });

    return (
      <section>
        { orderEls.length ? orderEls : <p>No orders yet!</p> }
      </section>
    )
  }
}

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders)),
    deleteOrder: (id) => dispatch(deleteOrder(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
