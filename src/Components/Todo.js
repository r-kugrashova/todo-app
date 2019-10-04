import React from 'react';

class Todo extends React.Component {

    onChange = (e) => {
        this.props.onChange(this.props.item.id);
    };

    render() {
        const {item} = this.props;
        return (
            <div>
                <label style={{textDecoration: this.props.item.done ? 'line-through' : 'none'}}>
                    <input
                        onChange={this.onChange}
                        type="checkbox"
                        checked={item.done}
                    />
                    {item.text}
                </label>
            </div>
        );
    }

}

export default Todo