import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }   
}

class Main extends Component {

  constructor(props) {
    super(props);
    // this.state = {
        // dishes: DISHES,
        // // selectedDish: null
        // comments: COMMENTS,
        // promotions: PROMOTIONS,
        // leaders: LEADERS
    // };
  }

  // onDishSelect(dishId) {
    // this.setState({ selectedDish: dishId});
  // }


  render() {

    const HomePage = () => {
      return(
        <Home 
              // as we changed states to props using redux..
              // dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]}

        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          />
        // 10 is base 10 interger, it will convert the string match.param.dishId to base to int
      );
    }

    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* <Route path="/aboutus" component={About} /> */}
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} /> 
          {/* //default router */}
          {/* <Route exact path="/contactus" component={Contact} /> */}
          <Route exact path='/contactus' component={Contact} />

          <Redirect to="/home" />   
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));