INSERT INTO vehicles
    (make, model, year, owner_id)

VALUES
    ($1, $2, cast($3 as int), cast($4 as int))

RETURNING *;