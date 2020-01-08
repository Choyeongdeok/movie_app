import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

class Movie extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		poster: PropTypes.string.isRequired,
		genres: PropTypes.array.isRequired,
		synopsis: PropTypes.string.isRequired
	};
	render() {
		return (
			<div className="Movie">
				<div className="Movie_columns">
					<MoviePoster
						poster={this.props.poster}
						alt={this.props.title}
					/>
				</div>
				<div className="Movie_columns">
					<h1>{this.props.title}</h1>
					<div className="Movie_genres">
						{this.props.genres.map((genre, index) => (
							<MovieGenre genre={genre} key={index} />
						))}
					</div>
					<div className="Movie_synopsis">
						<LinesEllipsis
							text={this.props.synopsis}
							maxLine={3}
							ellipsis="..."
							// trimRight
							// basedOn="letters"
						/>
					</div>
				</div>
			</div>
		);
	}
}

//class component
class MoviePoster extends Component {
	static propTypes = {
		poster: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	};
	render() {
		return (
			<img
				src={this.props.poster}
				alt={this.props.alt}
				title={this.props.alt}
				className="Movie_poster"
			/>
		);
	}
}

function MovieGenre({ genre }) {
	return <span className="Movie_genres">{genre} </span>;
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
};
//functional component
// function MoviePoster({poster}) {
//     return (
//         <img src = {poster} alt = "movie poster"/>
//     )
// }

// MoviePoster.propTypes = {
//     poster : PropTypes.string.isRequired
// }
export default Movie;
