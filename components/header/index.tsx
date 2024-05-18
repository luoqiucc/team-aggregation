import AppBreadcrumb from './breadcrumb'
import AppSearch from './search'
import Avatar from './avatar'
import AppNav from './nav'
import ModeToggle from './mode-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <AppNav />
      <AppBreadcrumb />
      <AppSearch />
      <Avatar />
      <ModeToggle />
    </header>
  )
}
