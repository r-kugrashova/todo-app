import React from 'react';

class VisibilityFilters extends React.Component {

    onChange = (e) => {
        this.props.onChange(e.target.id)
    };

    render() {
        return(
            <ul style={{listStyleType:"none"}}>
                <li style={{display:"inline", marginLeft:"20px"}}>
                    <label>
                        <input type="radio"
                               checked={this.props.filters === 'All'}
                               onChange={this.onChange}
                               id='All'/>
                        All
                    </label>
                </li>
                <li style={{display:"inline", marginLeft:"20px"}}>
                    <label>
                        <input
                            type="radio"
                            checked={this.props.filters === 'Completed'}
                            onChange={this.onChange}
                            id='Completed'/>
                        Completed
                    </label>
                </li>
                <li style={{display:"inline", marginLeft:"20px"}}>
                    <label>
                        <input
                            type="radio"
                            checked={this.props.filters === 'Incompleted'}
                            onChange={this.onChange}
                            id='Incompleted'/>
                        Incompleted
                    </label>
                </li>
            </ul>
        )
    }
}
export default VisibilityFilters