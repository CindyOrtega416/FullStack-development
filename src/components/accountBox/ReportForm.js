import React, {Component, useState} from "react";
import MapPicker from "../accountBox/mapPicker";



class ReportForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

                    <div className="container">

                            <div className="mb-3">
                                <MapPicker />
                            </div>
    </div>
        );
    }
}
export default ReportForm;
