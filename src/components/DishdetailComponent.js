import { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb,
     BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row,
      Col, Label  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }

    handleSubmit(values) {
        this.toggleModal();

        // this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        // alert("Username: "+ this.usename.value + "Password: "+this.password.value
        //     + " Remember: "+ this.remember.checked);
        alert("Current state is: " + JSON.stringify(values))
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>

                <div className="row row-content">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-9">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                    <Row className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" name="rating" className="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author" md={2}>Your name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control"
                                             validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                            <Errors className="text-danger" model=".author" show="touched" 
                                            messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="feedback" md={2}>Your feedback</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" 
                                            validators={{ required }} />
                                            <Errors className="text-danger" model=".comment" show="touched" 
                                            messages={{ required: 'Required' }} />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

// class DishDetail extends Component {

    // componentDidMount() {
    //     console.log('DishDetail Component componentDidMount invoked');
    // }

    // componentDidUpdate() {
    //     console.log('DishDetail Component componentDidUpdate invoked');
    // }

    // createCommentDisplayDate(timestamp) {
    //     const date = new Date(timestamp);
    //     return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});
    // }

    // renderDish(dish) {
    //     return (
    //        <div className="col-12 col-md-5 m-1">
    //             <Card>
    //                 <CardImg top width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //        </div>
            
    //     );
    // }

    function RenderDish({dish}) {
        return (
           <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
           </div>
            
        );
    }

    // renderComments(comments) {
    //     if (comments != null) {
    //         return (
    //             // <div >
    //             <div className="col-12 col-md-5 m-1">
    //                 <h4>Comments</h4>
    //                 <ul className="list-unstyled">
    //                 { comments.map((comment) => {
    //                     return (
    //                         <li key={comment.id}>
    //                             <p>{comment.comment}</p>
    //                             <p>-- {comment.author}, {this.createCommentDisplayDate(comment.date)}</p>
    //                         </li>
    //                     );
    //                 })}
    //                 </ul>
    //             </div>
    //         );
    //     }
    //     else
    //         return (<p><i>No comments recorded yet</i></p>);
    // }

    function RenderComments({comments}) {
        if (comments != null) {
            return (
                // <div >
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    { comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                    </ul>
                    <div>
                        <CommentForm />
                    </div>
                </div>
            );
        }
        else{
            return (
            <div>
                <p><i>No comments recorded yet</i></p>
                <CommentForm />
            </div>
            );
        }
    }

    
//     renderComments(comments) {
//         if (comments) {
//             return (
//                 <div>
//                     <h4>Comments</h4>
//                     <ul className="list-unstyled">
//                     { comments.map((comment) => (
//                         <li>
//                             <p>{comment.comment}</p>
//                             <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
//                         </li>
//                     ))};
//                     </ul>
//                 </div>
//             );
//         }
//         return (<p><i>No comments recorded yet</i></p>);
//     }

    // renderDetail(dish) {
    //     if (dish) {
    //         return (
    //             <div className="row">
                    
    //                     { this.renderDish(dish) }
                    
                    
    //                     { this.renderComments(dish.comments) }
                    
    //             </div>
            
    //         );
    //     }
    //     return (<div/>);
    // }
    
    // render() {
    //         return(
    //             <div className="container">   
    //                     { this.renderDetail(this.props.dish) }
    //             </div>  
    //         );    
    // }

    // render() {

    //     console.log('DishDetail Component componentDidMount render invoked');

        // if (this.props.dish != null){
        //     return (
        //         <div className="container">
        //             <div className="row">
        //                 {this.renderDish(this.props.dish)}
        //                 {this.renderComments(this.props.dish.comments)}
        //             </div>
        //         </div>
        //     );
        // }else{
        //     return(
        //         <div></div>
        //     );
        // }
    // }

    const DishDetail = (props) => {
        if (props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            {/* <BreadcrumbItem><Link to='./home'>Home</Link></BreadcrumbItem> */}
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments= {props.comments} />
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

// }

export default DishDetail;