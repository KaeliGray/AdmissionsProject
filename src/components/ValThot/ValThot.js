import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class ValThot extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="val-thot-container">
                <Button color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.title}</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.props.body}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default ValThot;