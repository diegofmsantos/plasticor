import { Suspense } from 'react';
import Login from './login'

const Page = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Login />
    </Suspense>
  )
}

export default Page;
