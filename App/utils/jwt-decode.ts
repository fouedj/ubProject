import {jwtDecode} from 'jwt-decode';
// import 'core-js/stable/atob';
class JwtDecoder {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  decodeToken() {
    try {
      //@ts-ignore
      // console.log('decode token ::', this.token);
      const decodedToken = jwtDecode(this.token);
      console.log('decode token ::', decodedToken);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  getTokenExpirationDate(): Date | null {
    const decodedToken = this.decodeToken();
    if (decodedToken && decodedToken.exp) {
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      return expirationDate;
    }
    return null;
  }

  isTokenExpired(): boolean {
    const expirationDate = this.getTokenExpirationDate();
    if (expirationDate) {
      return expirationDate.valueOf() < new Date().valueOf();
    }
    return true;
  }
}

export default JwtDecoder;
