export default {
  readDate: (dataString) => {
    const dateInstance = new Date(dataString);
    return dateInstance.toDateString();
  },
  getRoleName: (roleID) => {
    switch (roleID) {
      case 1:
        return 'Superadmin';
      case 2:
        return 'Admin';
      default: return 'Regular';
    }
  }
};
