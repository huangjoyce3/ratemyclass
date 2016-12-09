import React from 'react';
import './css/About.css';
import ReactDom from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var About = React.createClass({
	getInitialState: function() {
    return { modalIsOpen: false };
	  },
	 
	  openModal: function() {
	    this.setState({modalIsOpen: true});
	  },
	 
	  afterOpenModal: function() {
	    // references are now sync'd and can be accessed. 
	    this.refs.subtitle.style.color = '#f00';
	  },
	 
	  closeModal: function() {
	    this.setState({modalIsOpen: false});
	  },
	render(){
		return(
			<div className="about">
			    <button onClick={this.openModal}>Open Modal</button>
			    <Modal
		          isOpen={this.state.modalIsOpen}
		          onAfterOpen={this.afterOpenModal}
		          onRequestClose={this.closeModal}
		          style={customStyles}
		          contentLabel="Example Modal"
		        >
				<h3>About Us</h3>
				<button onClick={this.closeModal}>close</button>
				<div className="description">
				<p>The purpose of this INFO 343 project is to ease the hassle of making college schedules. It helps students to find classes that best fit their academic goals and interests through connection with their peers. It is a one stop for all students needs for selecting classes. </p>
				<p>Currently, this project focuses only on classes that are offered within iSchool.</p>
				
				</div>
				
				<div className="pictures">
				<p>Created by three hardworking Informatics girls with love&#9829;</p>
					<div className="member">
						<div className="image">
						<img src={require('./imgs/Christy.jpg')} />
						</div>
						<p>Christy Lu</p>
					</div>

					<div className="member">
						<div className="image">
						<img src={require('./imgs/Joyce.jpg')} />
						</div>
						<p>Joyce Huang</p>
					</div>

					<div className="member">
						<div className="image">
						<img src={require('./imgs/Jing.jpg')} />
						</div>
						<p>Jing Wen Pan</p>
					</div>
				</div>
				</Modal>
			</div>
		);
	}
});

export default About;