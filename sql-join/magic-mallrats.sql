select "firstName",
      "lastName"
    from "customers"
    join "rentals" using ("customerId")
    join "inventory" using ("storeId")
    where "title" = 'Magic Mallrats';
