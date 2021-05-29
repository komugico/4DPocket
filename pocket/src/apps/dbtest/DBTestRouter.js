import React from 'react';
import { Route } from "react-router-dom";

class DBTestRouter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    }

    messagesTable() {
        return (
            <table style={{ border: 'solid 1px' }}>
                <tbody>
                    {this.state.messages}
                </tbody>
            </table>
        );
    }

    componentDidMount() {
        this.props.db.collection('test').get().then((snapshot) => {
            let tmp_messages = [];
            snapshot.forEach((doc) => {
                console.log(doc.data().message);
                tmp_messages.push(
                    <tr>
                        <td style={{ border: 'solid 1px' }}>
                            <p>{doc.id}</p>
                        </td>
                        <td style={{ border: 'solid 1px' }}>
                            <p>{doc.data().message}</p>
                        </td>
                    </tr>
                );
            });
            this.setState({
                messages: tmp_messages,
            });
        });
    }

    render() {
        return (
            <div>
                <Route exact path="/dbtest">
                    { this.messagesTable() }
                </Route>
            </div>
        )
    }
}

export default DBTestRouter;