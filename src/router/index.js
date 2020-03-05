// import HelloWorld from "@/components/HelloWorld";
import Overview from '@/components/Overview'
import Details from '@/components/Details'
import Delete from '@/components/Delete'
import Testing from '@/components/testing'

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { path: '/home', name: 'home', component: Overview, default: true },
  { path: '/details/:id', name: 'details', component: Details },
  { path: '/delete', name: 'delete', component: Delete },
  { path: '/testing', component: Testing }
]
