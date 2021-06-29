import React from 'react'
import Hornedbeasts from './Hornedbeasts'
import beasts from './Data.json'
class Main extends React.Component {



    render() {

        return (
            <div>
                {beasts.map((element, index) => {
                    return <Hornedbeasts selectfun={this.props.selectfun} key={index} title={element.title} Imgurl={element.image_url} par={element.description} num={element.horns} />

                })
                }

            </div>
        )
    }
}
export default Main;