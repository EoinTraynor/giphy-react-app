import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class GIFS extends Component {
    constructor(){
        super();
        this.state = {
            gifs: [],
            pagination: {},
        }
    }

    // Giphy has a hard offset limit of 4999
    // if no offset passed, default to 0
    getGIFs = (offset = 0) => {
        // if requesting the max offset limit needs to be set at 24 (can't request 5000)
        const limit = offset===4975 ? 24 : 25;                         
        const apiKey = process.env.REACT_APP_API_KEY;        
        axios({
            method: 'get',
            url: 'http://api.giphy.com/v1/gifs/search',
            params: { 
                api_key: apiKey,
                q: 'dog',
                offset: offset,
                limit: limit         
            }
        })
        .then(response => {            
            // 25 gifs per page
            this.setState({
                gifs: response.data.data,
                pagination: response.data.pagination
            });            
        })
        .catch(err => console.log(err));
    }

    handlePageClick = data => {
        // starts at page postion 0
        const selectedPage = data.selected;
        const offset = selectedPage*25;        
        this.getGIFs(offset);
    }

    render(){        
        // pagination vals        
        const totalCount = this.state.pagination.total_count;
        // if pagination total exceeds 4999(200 pages) create fixed limit
        const numOfPages = totalCount>=5000 ? 200 : Math.ceil(totalCount/25);                
        
        // array of gifs
        const gifs = this.state.gifs.map((gif, index) => {
            return (
                // would use a seperate component if each gif required more complexity
                <div key={index} className="gif">
                    <h3>{gif.title}</h3>
                    <img src={gif.images.original.url} alt={gif.title}/>
                </div>
            )
        });
        // pagination navigation
        const pagination = <ReactPaginate 
            pageCount={numOfPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            previousLabel={"pervious"}
            nextLabel={"next"}                
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
        />;

        return(
            <div className="gifs">
                <h1>Dog GIFs</h1>
                <p>Number of pages: {numOfPages}</p>
                {pagination}
                {gifs}
            </div>
        )
    }

    componentDidMount(){
        this.getGIFs();
    }
    
    componentDidUpdate() {        
        // move to the top of the page
        window.scrollTo(0, 0);                        
    }
}

export default GIFS;