import React from 'react';
import { Route } from "react-router-dom";
import HeaderModule from '../shared/components/modules/HeaderModule';

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

    updateMessage = async () => {
        let tmp_messages = [];
        try {
            await this.props.db.collection('test').get().then((snapshot) => {
                snapshot.forEach((doc) => {
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
            });
        }
        catch (error) {
            alert(error.message);
        } 
        this.setState({
            messages: tmp_messages,
        });
    }
    
    render() {
        return (
            <div>
                <Route exact path="/dbtest">
                    <HeaderModule />
                    < br />
                    <button onClick={() => this.updateMessage()}>Update</button>
                    {this.messagesTable()}
                </Route>
            </div>
        )
    }
}

export default DBTestRouter;