UPDATE vehicles set owner_id = NULL WHERE id = $1 and owner_id = $2
RETURNING *;