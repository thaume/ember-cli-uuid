const v4UUIDRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export default {
  isV4(maybeV4UUID) {
    return v4UUIDRegex.test(maybeV4UUID);
  }
};
