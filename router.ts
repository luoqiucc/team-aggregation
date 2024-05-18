import type { LucideIcon } from 'lucide-react'
import { Home, Package, Settings, MessagesSquare } from 'lucide-react'

interface Router {
  path: string
  title: string
  icon: LucideIcon
}

const appRouter: Array<Router> = [
  {
    path: '/',
    title: '首页',
    icon: Home,
  },
  {
    path: '/discussion',
    title: '讨论',
    icon: MessagesSquare,
  },
  {
    path: '/library',
    title: '资源库',
    icon: Package,
  },
  {
    path: '/settings',
    title: '设置',
    icon: Settings,
  },
]

export { appRouter }
