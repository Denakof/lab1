import React from 'react'
import Hornedbeasts from './Hornedbeasts'
import beasts from './Data.json'
class Main extends React.Component {


    render() {
        return (
            <div>
                {beasts.map((element, index) => {
                    return <Hornedbeasts key={index} title={element.title} Imgurl={element.image_url} par={element.description} num={element.horns} />

                })
                }



                {/* /* <Hornedbeasts title={this.beasts[1].title} Imgurl={this.beasts[1].image_url} par={this.beasts[1].description} num={this.beasts[1].horns}
                />
                <Hornedbeasts title={this.beasts[2].title} Imgurl={this.beasts[2].image_url} par={this.beasts[2].description} num={this.beasts[2].horns} */}

            </div>
        )
    }
}
export default Main;