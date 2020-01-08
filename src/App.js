import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
	state = {};

	componentDidMount() {
		this._getmovies();
	}

	_getmovies = async () => {
		const movie = await this._callapi();
		this.setState({
			movie_array: movie
		});
	};

	_callapi = () => {
		return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
			.then(res => res.json())
			.then(json => json.data.movies)
			.catch(err => console.log(err));
	};

	_rendermovies = () => {
		const movies = this.state.movie_array.map(movie => {
			return (
				<Movie
					title={movie.title}
					poster={movie.medium_cover_image}
					key={movie.id}
					genres={movie.genres}
					synopsis={movie.synopsis}
				/>
			);
		});
		return movies;
	};

	render() {
		const { movie_array } = this.state;
		return (
			<div className={movie_array ? "App" : "App--loading"}>
				{this.state.movie_array ? this._rendermovies() : "Loading"}
				{/* {this.state.movie_array.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
        })} */}
			</div>
		);
	}
}

export default App;
