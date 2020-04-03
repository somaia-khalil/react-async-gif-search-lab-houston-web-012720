import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContanier extends React.Component{
    constructor(){
        super()
        this.state = {
            gifpictures: [],
             inputsearch: ""
        }
    }


    

    componentDidMount(){
        
        fetch("https://api.giphy.com/v1/gifs/search?q=2&api_key=dc6zaTOxFJmzC&rating=g")
        .then(res => res.json())
        .then(pictures => this.setState({
            gifpictures:pictures.data
        }))
    }


    search =(event)=>{
        this.setState({
            inputsearch: event.target.value
        }, ()=>console.log(this.state.inputsearch))
    }

    final =(event) =>{
        event.preventDefault()
        console.log(event)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.inputsearch}&limit=3&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(pictures => this.setState({
            gifpictures:pictures.data
        }) )
    }


    render(){
        return(
            <div>
            <GifList pictures={this.state.gifpictures} />
            <GifSearch search={this.search} final={this.final} />
            </div>
        )
    }
}