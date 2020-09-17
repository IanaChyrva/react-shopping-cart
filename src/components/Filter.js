import React, { Component } from 'react'

export default class Filter extends Component {

    render() {
        return (
            <div className="Filter">
                <div className="filterResult">{this.props.count} Dogs</div>
                <div className="filterFeature">
                    Filter {" "}
                    <select value={this.props.features} onChange={this.props.filterDogs}>
                        <option value="">All</option>
                        <option value="Two dogs">Two dogs</option>
                        <option value="Plate">Plate</option>
                        <option value="Stylish">Stylish</option>
                        <option value="Toy">Toy</option>
                        <option value="Rich">Rich</option>
                    </select>
                </div>
            </div>
        )
    }
}
