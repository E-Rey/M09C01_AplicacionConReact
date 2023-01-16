import React from 'react'
import { ContentRowMovies } from './ContentRowMovies'
import { GenresInDb } from './GenresInDb'
import { LastMovieInDb } from './LastMovieInDb'

export const ContentRowTop = () => {
  return (
    <div className="container-fluid">
		<ContentRowMovies/>
		<div className="row">
			<LastMovieInDb/>
			<GenresInDb/>
		</div>
    </div>
  )
}
