import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Content } from '../content/Content'


export const AppRouter = () => {
  return (
    <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Content/>}/>
            </Route>
    </Routes>
  )
}
