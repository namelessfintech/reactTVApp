import React from 'react';

class Series extends React.Component {

    // create my state objects before the render function
    state = {
        series: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=Billions')
            .then((res) => {
                return res.json();
            })
            .then(json => this.setState({ series: json }))
    }

    render(){
        return (  
            <div> The length of my series array: {this.state.series.length}</div>
   
        )
    }
}

export default Series;