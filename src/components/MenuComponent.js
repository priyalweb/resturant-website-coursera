// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class Menu extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log("Menu Component constructor invoked");
    // }

    // componentDidMount() {
    //     console.log('Menu Component componentDidMount invoked');
    // }

    // render() 


    function RenderMenuItem({ dish, onClick}) {
        return (
            // <Card key={dish.id}
            //         onClick={() => onClick(dish.id)}> 
            <Card>                   
                {/* these are back quotes nor forward quote */}
                <Link to= {`/menu/${dish.id}`} >
                    <CardImg width="100" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            // const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Card onClick={() => this.props.onClick(dish.id)}> */}
                    {/* <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                    
                        <CardImg width="100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card> */}
                    {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        console.log('Menu Componenet render is invonked');

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                </div>
            </div>
        );
    }



        // const menu = this.props.dishes.map((dish) => {
        //     return (
        //         <div key={dish.id} className="col-12 col-md-5 m-1">
        //             {/* <Card onClick={() => this.props.onClick(dish.id)}> */}
        //             {/* <Card key={dish.id}
        //                 onClick={() => this.props.onClick(dish.id)}>
                    
        //                 <CardImg width="100" src={dish.image} alt={dish.name} />
        //                 <CardImgOverlay>
        //                     <CardTitle>{dish.name}</CardTitle>
        //                 </CardImgOverlay>
        //             </Card> */}
        //         </div>
        //     );
        // });

        // console.log('Menu Componenet render is invonked');

        // return (
        //     <div className="container">
        //         <div className="row">
        //                 {menu}
        //         </div>
        //         <div className="row">
        //         </div>
        //     </div>
        // );
    // }
// }

export default Menu;