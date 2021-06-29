import React from 'react'

class Hornedbeasts extends React.Component {

    render() {


        return (

            <div>
                <h2> {this.props.title}</h2>
                <p>{this.props.par} </p>
                <h4 >{this.props.num}</h4>
                <img style={{
                     width: "18rem", height: "18rem" }} src={this.props.Imgurl} alt={this.props.title}/>


            </div>
        );
    }

}


export default Hornedbeasts;