import React, { Component } from 'react';
import { Form, Input, Button } from "reactstrap";
import Board from '../components/Board';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfRows: '',
            numberOfColumns: '',
            isBoardShown: false,
        }

        this.handleRowChange = this.handleRowChange.bind(this);
        this.handleColumnChange = this.handleColumnChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleRowChange(event) {
        this.setState({
            numberOfRows: parseInt(event.target.value, 10) || event.target.value,
        });
    }

    handleColumnChange(event) {
        this.setState({
            numberOfColumns: parseInt(event.target.value, 10) || event.target.value,
        });
    }

    handleClick() {
        this.setState({
            isBoardShown: true,
        });
    }

    board() {
        if (this.state.isBoardShown) {
            return (
                <Board row={this.state.numberOfRows} column={this.state.numberOfColumns} />
            );
        }
    }

    render() {
        return (
            <div>
                <div className="gameplay" hidden={this.state.isBoardShown}>
                    <h4>Gameplay</h4>
                    <p>Before play begins, a square grid of at least 3x3 squares in size is drawn. Players take turns to add either an "S" or an "O" to any square, with no requirement to use the same letter each turn. The object of the game is for each player to attempt to create the straight sequence S-O-S among connected squares (either diagonally, horizontally, or vertically), and to create as many such sequences as they can. If a player succeeds in creating an SOS, that player immediately takes another turn, and continues to do so until no SOS can be created on their turn. Otherwise turns alternate between players after each move.</p>
                    <p>Keeping track of who made which SOSs can be done by, e.g., one player circling their SOSs and the other player drawing a line through theirs. Once the grid has been filled up, the winner is the player who made the most SOSs. If the grid is filled up and the number of SOSs for each player is the same, then the game is a draw.</p>
                    <p>The game can also be played where the player who creates an SOS is the winner and if no SOSs are created the game is a draw.</p>
                </div>
                <Form hidden={this.state.isBoardShown}>
                    <h4>Grid Size</h4>
                    <h6>Number Of Rows:</h6>
                    <Input className="mb-3" type="text" value={this.state.numberOfRows} onChange={this.handleRowChange} />
                    <h6>Number Of Columns:</h6>
                    <Input className="mb-3" type="text" value={this.state.numberOfColumns} onChange={this.handleColumnChange} />
                    <Button className="" color="primary" onClick={this.handleClick}><h6>Play</h6></Button>
                </Form>
                {this.board()}
            </div>
        );
    }
}

export default Settings;