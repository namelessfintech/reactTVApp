import React from 'react';
import SeriesList from '../../components/seriesList/index';
import Loader from'../../components/loader/index';
import Intro from '../../components/intro/intro'


class Series extends React.Component {

    // create my state objects before the render function
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    // componentDidMount() {
        
    // }

    onSeriesInputChange = e => {

        this.setState({seriesName: e.target.value, isFetching: true})

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((res) => {
                return res.json();
            })
            .then(json => this.setState({ series: json, isFetching: false }))
      
    }

    render(){

        const {series, seriesName, isFetching} = this.state;
        return (  
            <div> 
                <Intro message="Here you can find all of your most loved series" />
                <div>
                    <input 
                    value={seriesName} 
                    type="text" 
                    onChange={this.onSeriesInputChange}/>
                </div>
                {
                    // this is a conditional logic block inside the return logic
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    && <p>Please enter a series name</p>

                }
                {
                    // this is another conditional logic block meant to respond to a different state
                   !isFetching && series.length === 0  && seriesName.trim() !== '' 
                    && <p> No Series has been found with this name</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
                
            </div>
            

           
        )
    }
}

export default Series;