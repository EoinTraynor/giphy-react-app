import React, { Component } from 'react';
import axios from 'axios';

class GIFS extends Component {
    render(){
        return(
            <p>GIFS</p>
        )
    }

    componentDidMount(){
        const apiKey = '1tQ9inqGiCCsNyfT0ZHL8mIXOevSFG1X';

        axios({
            method: 'get',
            url: 'http://api.giphy.com/v1/gifs/search',
            params: { 
                api_key: apiKey,
                q: 'dogs'            
            }
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }
}

export default GIFS;