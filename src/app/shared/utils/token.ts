import { TokenData } from "@interfaces/index";

/**
 * DEVUELVE LA CARGA UTIL DEL TOKEN EN UN OBJETO
 * @param token string
 * @returns TokenData
 */
export const parseJwt = (token: string): TokenData | null => {
  const base64Url = token?.split('.')[1];

  if (base64Url) {
    const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
    if (base64) {
      const jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      const payload = (jsonPayload && JSON.parse(jsonPayload)) as TokenData;
      return payload
    }
  }
  return null;
}

export const hasTokenExpired = (token: TokenData): boolean => {
  const expirationDate = new Date(token.exp * 1000)
  return expirationDate < new Date()
}
