select "cities"."name" as "city",
      count(*) as "totalCities"
  from "cities"
  join "countries" using ("countryId")
  group by "cities"."name";
