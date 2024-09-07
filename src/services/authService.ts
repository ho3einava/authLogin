// services/authService.ts
export interface LoginPayload {
  userType: string;
  passwordAuth: {
    username: string;
    password: string;
  };
}

export interface AuthResponse {
  token: string;
}

export const login = async (
  loginPayload: LoginPayload,
): Promise<AuthResponse> => {
  const response = await fetch("https://api.ijarent.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginPayload),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data: AuthResponse = await response.json();

  localStorage.setItem("authToken", data.token);

  return data;
};
