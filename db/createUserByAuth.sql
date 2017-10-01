INSERT INTO users (username, user_id) VALUES ($1, $2) RETURNING username, authid;
