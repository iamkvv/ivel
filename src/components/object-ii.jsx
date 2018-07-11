import React from 'react';

class ObjectII extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: null }
    }
    componentDidMount() {
        let self = this;
        fetch('https://fish-text.ru/get?format=json&number=5')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
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
                    Описание Объекта II
                </h2>
                {this.state.text}
            </div>
        )
    }

}


export default ObjectII