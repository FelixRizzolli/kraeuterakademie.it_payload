import { Block } from 'payload'

import { DashboardImageElement } from './DashboardImageElement'
import { DashboardImageText } from './DashboardImageText'
import { DashboardTextElement } from './DashboardTextElement'
import { DashboardTitleElement } from './DashboardTitleElement'

export const dashboardBlocks: Block[] = [
  DashboardImageElement,
  DashboardImageText,
  DashboardTextElement,
  DashboardTitleElement,
]
