import React from 'react'



export default class GifSearch extends React.Component{

    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.props.final(e)}>

                    <label> Search </label>
                    <input placeholder="search" onChange={this.props.search}></input>
                    <button  type ="submit"> Search </button>
                </form>
            </div>
        )
    }
}