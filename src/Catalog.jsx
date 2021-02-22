import React, { Component } from "react"
import "./normalize.css"
import "./Catalog.css"

import whiteLogo from "./img/globoticket-horizontal-white.svg"
import cartImg from "./img/cart.svg"

import thumbNail1 from "./img/shutterstock_415922566_thumbnail_1.jpg"
import thumbNail2 from "./img/shutterstock_606456248_thumbnail_2.jpg"
import thumbNail3 from "./img/shutterstock_1746589040_thumbnail_3.jpg"
import eventData from "./eventData.json"

const thumbNails = [thumbNail1, thumbNail2, thumbNail3]

const Event = ({ data }) => {
	const { thumbNail, dateTime, name, artist, price } = data
	return (
		<tr>
			<td class="event-image">
				<img src={thumbNails[thumbNail]} />
			</td>
			<td class="event-date">dateTime</td>
			<td class="event-name">{name}</td>
			<td class="event-artist">{artist}</td>
			<td class="event-price">${price}</td>
			<td class="event-purchase-button">
				<button>Purchase Details</button>
			</td>
		</tr>
	)
}

export default class Catalog extends Component {
	state = {
		totalTickets: 0,
	}
	addTicket() {
		this.setState({ totalTickets: this.state.totalTickets + 1 })
	}
	render() {
		return (
			<div class="container">
				<header>
					<h1>
						<img src={whiteLogo} />
					</h1>
					<div class="header-cart">
						<img src={cartImg} />
						<p>
							<span>{this.state.totalTickets}</span> tickets
						</p>
					</div>
				</header>
				<section>
					<div class="search-bar">
						<select name="filter-dropdown">
							<option selected>all</option>
							<option>other 1</option>
							<option>other 2</option>
							<option>other 3</option>
						</select>
						<button>Filter</button>
					</div>
					<div class="table">
						<table>
							<thead>
								<tr>
									<th scope="col">&nbsp;</th>
									<th scope="col">Date</th>
									<th scope="col">Name</th>
									<th scope="col">Artist</th>
									<th scope="col">Price</th>
									<th scope="col">&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								{eventData.map((ed) => (
									<Event data={ed} />
								))}
							</tbody>
						</table>
					</div>
					<button onClick={this.addTicket.bind(this)}>Add</button>
				</section>
			</div>
		)
	}
}
