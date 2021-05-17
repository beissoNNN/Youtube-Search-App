import React from 'react';
 
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    enterSearch(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    }

    search(){
        this.props.onSearchTermChange(this.state.term);
    }

    onInputChange(term) {
        this.setState({ term: term });
    }

    render() {
        return ( 
            <div className="row search-bar">
                <div className="col-md-8">
                    <input 
                        placeholder={"Search..."}
                        onChange={ event => this.onInputChange(event.target.value) } 
                        onKeyDown={ event => this.enterSearch(event) }
                    />
                </div>         
                <div className="col-md-4">
                    <button onClick={ () => this.search() }>Search</button>   
                </div>
            </div>
        );
    }
}

export default SearchBar;