import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import VideoPlayer from './components/video_player';

//const API_KEY = 'AIzaSyAH07rpJ5rz_xO61m2NmdVGXcR25IpNjDM';
const API_KEY = 'AIzaSyAF7MGe_IxsVnt7q8VI1JV5y2OGsrJHxUo';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null,
            counter: 0
        };

        this.videoSearch('reactjs');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                 videos: [videos[0],videos[1],videos[2]],
                 selectedVideo: videos[0]
            });
        }); 
    }

    viewCounter() {
        this.setState({
            counter: this.state.counter + 1
       });
    }

    render () {
        return (
            <Router>
                <div>
                    <Switch>

                        <Route path="/detail">
                            <div className="info-detail">

                                <button>
                                    <Link to="/">
                                        Back
                                    </Link>
                                </button>

                                <VideoDetail video={this.state.selectedVideo}/>

                            </div>
                        </Route>


                        <Route path="/">

                            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                            
                            <div className="container-fluid">
                                <div className="row">

                                    <div className="col-md-8 order-0 order-md-0">
                                        <VideoPlayer onCounterChange={() => this.viewCounter()} video={this.state.selectedVideo} />
                                    </div>

                                    <div className="col-md-4 order-2 order-md-1">
                                        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
                                    </div>

                                    <div className="col-md-4 order-1 order-md-2">

                                        <div className="info-detail">
                                            Videos watched: {this.state.counter}
                                        </div> 

                                        <div className="info-detail">
                                            <button>
                                                <Link to="/detail">
                                                    Details
                                                </Link>
                                            </button>    
                                        </div>  

                                    </div>

                                </div>
                            </div> 
                        </Route>

                    </Switch>
                </div> 
            </Router>
        )
    }
}

//Agarra componente y ponerlo en la web para verlo
ReactDOM.render(<App/>,document.querySelector('.container'));