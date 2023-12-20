/* eslint-disable @typescript-eslint/no-explicit-any */

import useNetwork from './useNetwork'

const Hooks = () => {
  const { products, loading } = useNetwork();
  return (<>
    {loading ? <p>loading ...</p> : <div>
      {products.map((i: any, index: number) => <li key={index}>{i.title}</li>)}
    </div>}
  </>)
}

export default Hooks
