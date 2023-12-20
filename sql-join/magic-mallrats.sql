select "firstName",
      "lastName"
    from "customers"
    join "rentals" using ("customerId")
    join "inventory" using ("storeId")
    join "films" using ("filmId")
    where "title" = 'Magic Mallrats';
