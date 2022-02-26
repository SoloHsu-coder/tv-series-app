import './index.css';

const SeriesList = (props)=> {
    return (
        <div>
            <ul className = "series-lists">
                {props.list && props.list.length>0 && props.list.map(serie =>(
                    <li key = {serie.show.id}>
                        {serie.show.name}
                    </li>
                ))}
            </ul>
        </div> 
        
        
    
    );
}
export default SeriesList;