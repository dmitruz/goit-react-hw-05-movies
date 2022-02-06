/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchMovieReviews} from '../../services/api';

export default function Reviews  ()  {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then((result) => setReviews([...result.results]));
  }, []);

  const { movieId } = useParams();
  return (
    <section >
      <ul >
        {reviews &&
          reviews.map(({ author, content, id }) => (
            <li key={id} >
              <h3 >
                Author: <span >{author}</span>
              </h3>
              <p >{content}</p>
            </li>
          ))}
        {reviews && reviews.length === 0 && (
          <p>We dont have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
};