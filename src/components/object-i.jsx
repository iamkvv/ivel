import React from 'react';

class ObjectI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: null }
    }
    componentDidMount() {
        let self = this;
        fetch('https://fish-text.ru/get?format=json&number=1')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.text)
                self.setState({ text: data.text })

            })
            .catch(function (err) {
                console.log(err)
            });
    }

    render() {
        return (
            <div style={{ width: '50%', margin: '20px auto' }}>
                <h2>
                    Описание Объекта I
                </h2>
                {this.state.text}
            </div>
        )
    }

}

// const ObjectI = () => (
//     <div>
//         12345
//     </div>
// )
export default ObjectI