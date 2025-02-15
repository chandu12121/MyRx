class ImmutableEmployee { 
    constructor(name, id, dateOfJoining, addresses) {
      this.name = name;
      this.id = id;
      this.dateOfJoining = new Date(dateOfJoining);
      this.addresses = addresses.map(addr => ({ ...addr }));
  
      Object.freeze(this);
      Object.freeze(this.addresses);
    }
  }
  
  module.exports = ImmutableEmployee;
  