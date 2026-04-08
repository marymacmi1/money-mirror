const API_BASE_URL = ''

export interface User {
  id: string
  name: string
  email: string
  created_at: string
}

export interface Account {
  id: string
  user_id: string
  account_name: string
  provider: string
  account_type: string
  balance: number
  minimum_payment: number
  due_date: string
  metadata: Record<string, string>
  created_at: string
}

export interface Summary {
  total_balance: number
  total_accounts: number
  next_due: string
  accounts: Array<{
    account_name: string
    balance: number
    due_date: string
  }>
}

export interface ChartData {
  account_id: string
  account_name: string
  labels: string[]
  data: number[]
  metadata: Record<string, string>
}

export interface NewAccount {
  user_id: string
  account_name: string
  provider: string
  account_type: string
  balance: number
  minimum_payment?: number
  due_date?: string
  metadata?: Record<string, string>
}

function getAuthToken(): string | null {
  return localStorage.getItem('auth_token')
}

async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const token = getAuthToken()
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  })

  return response
}

export async function createUser(
  email: string,
  password: string,
  name: string
): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })

  if (!response.ok) {
    throw new Error('Failed to create user')
  }

  return response.json()
}

export async function getUsers(): Promise<User[]> {
  const response = await fetchWithAuth('/api/v1/user')

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  return response.json()
}

export async function getCurrentUser(): Promise<User> {
  const response = await fetchWithAuth('/api/v1/user/me')

  if (!response.ok) {
    throw new Error('Failed to fetch current user')
  }

  return response.json()
}

export async function createAccount(
  accountData: NewAccount
): Promise<Account> {
  const response = await fetchWithAuth('/api/v1/accounts', {
    method: 'POST',
    body: JSON.stringify(accountData),
  })

  if (!response.ok) {
    throw new Error('Failed to create account')
  }

  return response.json()
}

export async function getAccounts(): Promise<Account[]> {
  const response = await fetchWithAuth('/api/v1/accounts')

  if (!response.ok) {
    throw new Error('Failed to fetch accounts')
  }

  return response.json()
}

export async function getAccount(accountId: string): Promise<Account> {
  const response = await fetchWithAuth(`/api/v1/account/${accountId}`)

  if (!response.ok) {
    throw new Error('Failed to fetch account')
  }

  return response.json()
}

export async function getSummary(): Promise<Summary> {
  const response = await fetchWithAuth('/api/v1/summary')

  if (!response.ok) {
    throw new Error('Failed to fetch summary')
  }

  return response.json()
}

export async function getChartData(accountId: string): Promise<ChartData> {
  const response = await fetchWithAuth(`/api/v1/chart/${accountId}`)

  if (!response.ok) {
    throw new Error('Failed to fetch chart data')
  }

  return response.json()
}
