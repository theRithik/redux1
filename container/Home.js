import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionFile'
import DisplayComponent from '../component/displayComponent'
class Home extends Component {

    //call action
    componentDidMount(){
        this.props.dispatch(movieList())
    }
    render(){
        return(
            <>
            <h1>Redux</h1>
            <DisplayComponent datalist={this.props.myData}/>
            </>
        )
    }
}

//here we will receive the update state

function mapStateToProps(state){
    
    return{
        myData:state.films
    }
}

export default connect(mapStateToProps)(Home)