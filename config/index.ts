import type { AppInfo } from '@/types/app'
export const APP_ID = '6747909a-5bbb-4c42-8e8c-e333307795db'
export const API_KEY = process.env.NEXT_PUBLIC_DIFY_API_KEY
export const API_URL = ''
export const APP_INFO: AppInfo = {
  title: 'Text Generator APP',
  description: 'App description',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
