select "releaseYear",
      "genres"."name" as "genres"
    from "filmGenre"
    join "films" using ("filmId")
    join "genres" using ("genreId")
    where "title" = 'Boogie Amelie';
