SELECT COUNT (id) as count
from vehicles
where owner_id = $1;