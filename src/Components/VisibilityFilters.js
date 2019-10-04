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
                        <input type="radio" checked={this.props.filters[0].done} onChange={this.onChange} id={this.props.filters[0].id}/>
                        {this.props.filters[0].id}
                    </label>
                </li>
                <li style={{display:"inline", marginLeft:"20px"}}>
                    <label>
                        <input type="radio" checked={this.props.filters[1].done} onChange={this.onChange} id={this.props.filters[1].id}/>
                        {this.props.filters[1].id}
                    </label>
                </li>
                <li style={{display:"inline", marginLeft:"20px"}}>
                    <label>
                        <input type="radio" checked={this.props.filters[2].done} onChange={this.onChange} id={this.props.filters[2].id}/>
                        {this.props.filters[2].id}
                    </label>
                </li>
            </ul>
        )
    }
}
export default VisibilityFilters