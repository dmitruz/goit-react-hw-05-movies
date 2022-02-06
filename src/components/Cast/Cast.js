import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "../../services/api";


const picturePath = "https://image.tmdb.org/t/p/w200";
const pictureDefaultProfile =  "https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg";

const Cast = () => {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then((result) => setCast([...result.cast]))
     
  }, [movieId]);

  return (
    <section >
      <ul>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id} >
              <img
                src={
                  profile_path
                    ? `${picturePath}/${profile_path}`
                    : pictureDefaultProfile
                }
                alt={`${name}`}
                
              ></img>
              <p >{name}</p>
              <p >
                {character !== ""
                  ? `Character: ${character}`
                  : "Character: n/a"}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Cast;