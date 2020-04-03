import React from 'react'



export default class GifList extends React.Component{


    render(){
        return(
            <div>
                <ul>
                    {this.props.pictures.map(picture => <li><img src={picture.images.original.url}/></li>)}
                </ul>
          
            </div>
        )
    }
}