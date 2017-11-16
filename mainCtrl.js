module.exports = {
  getUsers: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getUsers()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getVehicles: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getVehicles()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  postUsers: (req, res, next) => {
    const db = req.app.get("db");
    db
      .postUsers(req.body.name, req.body.email)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  postVehicles: (req, res, next) => {
    const db = req.app.get("db");
    db
      .postVehicles(
        req.body.make,
        req.body.model,
        req.body.year,
        req.body.owner_id
      )
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getVehicleCount: (req, res, next) => {
    const db = req.app.get("db");
    console.log("#5 ", req.params.userId);
    db
      .getVehicleCount(req.params.userId)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getVehicleByUser: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.params.userId);
    db
      .getVehicleByUser(req.params.userId)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getVehicle: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.query.userEmail, req.query.userFirstStart);
    db
      .getVehicle(req.query.userEmail, req.query.userFirstStart)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  getNewVehicle: (req, res, next) => {
    const db = req.app.get("db");
    db
      .getNewVehicle()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  putVehicleOwner: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.params.vehicleId, req.params.userId);
    db
      .putVehicleOwner(req.params.vehicleId, req.params.userId)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  deleteRemoveOwner: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.params.vehicleId, req.params.userId);
    db
      .deleteRemoveOwner(req.params.vehicleId, req.params.userId)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  },

  deleteVehicle: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.params.vehicleId);
    db
      .deleteVehicle(req.params.vehicleId)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(() => res.status(500).send());
  }
};
