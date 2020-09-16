import React, { Component } from 'react'

export default class Dogs extends Component {
    render() {
        return (
            <div>
                <ul className="dogs">
                    {this.props.dogs.map(dog => (
                        <li key={dog._id}>
                            <div className="dog">
                                <a href={"#" + dog._id}>
                                    <img src={dog.image.src} alt={dog.title} />

                                </a>
                                <p>
                                    {dog.title}
                                </p>
                                <div className="dogs-cutes">
                                    {dog.cutes}
                                </div>
                                <button className="button primary">
                                    Bring home
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}