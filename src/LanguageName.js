import React, { Component } from 'react'

class LanguageName extends Component {

    state= {
        language: "Javascript"
    }


    //Since compunt did mount Authomaticall render
    //component will mount will stop and clear the 
    // api call
    componentDidMount(){
        
        this.interval = setInterval( () => {
            console.log("hi this will call api ")
        }, 2000)
    }


    //I use this is method as a demo not real code
    //so will not techically stop and clear the api call 
    componentWillUnmount (){
        clearInterval(this.interval)
    }

    //since setState authomatically render the app shouldComponetUpdate 
    //will avoid autho render if the state is not updated or change 
    //keep it from render
    shouldComponentUpdate(nextProps, nextState){
        if (this.state.language === nextState.language){
            return false;
        } else 
        {
            return true;
        }
    }
    faveLanguage = () =>{
        this.setState({
            language: "cSharp"
        })
    }
    render() {
        console.log("Favorite language")
        return (
            <div>
              {this.state.language} <br />
              <button onClick={this.faveLanguage}> Chage Fav language </button> 
            </div>
        )
    }
}

export default LanguageName;