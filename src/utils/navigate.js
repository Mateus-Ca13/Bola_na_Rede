import { useNavigate } from 'react-router-dom';

export let navigate;

export function NavigateHelper({children}) {
    const nav = useNavigate()
    navigate = nav;
  return (
    children
  )
}
