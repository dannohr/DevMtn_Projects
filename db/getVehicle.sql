SELECT v.*
FROM vehicles v JOIN users u on v.owner_id = u.id
WHERE (u.email = $1 AND $2 IS NULL)
    or
    ($1 IS NULL and LEFT(u.name,2) = $2);