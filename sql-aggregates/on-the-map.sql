select "countries"."name" as "countries",
      count(*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId";
