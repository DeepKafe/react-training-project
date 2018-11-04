import React, { Component } from 'react';
import { Row, Col, FormControl, Button } from 'react-bootstrap';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staff: props.staff
        }
    }

    changeValue = (index) => (e) => {
        // eslint-disable-next-line
        this.state.staff[index].value = e.target.value;
        this.forceUpdate();
    }

    saveUpdate = () => {
        const { staff } = this.state;
        for (let i = 0; i < staff.length; i++) {
            staff[i].value = parseInt(staff[i].value, 10);
        }

        this.props.onSave(staff);
        this.props.onCancel();
    }

    render() {
        const { staff } = this.state;
        return (
            <div>
                <div>
                    {staff.map((item, index) => {
                        return (
                            <Row key={index} className="row-marin">
                                <Col componentClass={'form'} sm={2}>
                                    {item.text}
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="number" value={this.state.staff[index].value}
                                        onChange={this.changeValue(index)} />
                                </Col>
                            </Row>
                        );
                    })}
                    <Button className="btn btn-default button-cancel" onClick={this.props.onCancel}>Cancel</Button>
                    <Button className="btn btn-primary" onClick={this.saveUpdate}>Save</Button>
                </div>
            </div>
        );
    }
}

export default Staff