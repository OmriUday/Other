exports.getClients = (req, res, next) => {
  res.status(200).json({
    clients: [
      {
        passportId: '',
        firstName: '',
        lastName: '',
        gender: '',
        age: '',
        address: '',
        profession: '',
        imageUrl: '',
        cash: '',
        credit: '',
        creationDate: new Date(),
        lastUpdatedDate: new Date(),
        activity: ''
      }
    ]
  });
};

exports.createClient = (req, res, next) => {
  const passportId = req.body.passportId;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const gender = req.body.gender;
  const profession = req.body.profession;
  const imageUrl = req.body.imageUrl;
  const address = req.body.address;
  const cash = req.body.cash;
  const credit = req.body.credit;
  const creationDate = req.body.creationDate;
  const lastUpdatedDate = req.body.lastUpdatedDate;
  const activity = req.body.activity;
  // Create Client in db
  res.status(201).json({
    message: 'Client created successfully!',
    client: { id: new Date().toISOString(), passportId: passportId, firstName: firstName, lastName: lastName, gender: gender, profession: profession, age: age, address: address, imageUrl: imageUrl, cash: cash, credit: credit, creationDate: title, lastUpdatedDate: lastUpdatedDate, activity: activity }
  });
};
