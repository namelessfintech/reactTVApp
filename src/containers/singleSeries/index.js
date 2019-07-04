
import React from 'react'; 
import Loader from '../../components/loader';

class SingleSeries extends React.Component {

    state={
        show: null
    }

    componentDidMount(){
        const {id } = this.props.match.params
        fetch(`http://api.tvmaze.com/shows/${id}?embed-epidodes`)
            .then((res) => {
                return res.json();
            })
            .then(json => this.setState({show: json}))
    }
    render(){
  
        const {show} = this.state;
        console.log(show)
        return (
            <div>
                {
                    show === null && <Loader/>
                }
                {
                    show !== null && 
                    
                    <div>
                        <p>{show.name}</p>
                        <p>Premierd - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show.weight}</p>
                        <p>
                            <img alt="show" src={show.image.medium}/>
                        </p>
                        
                    </div>
                }
            </div>
        )
    }
}


export default SingleSeries;